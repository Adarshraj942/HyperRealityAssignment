import React, { useState, useContext, useEffect } from "react";

import { FaStar } from "react-icons/fa";
import { RatingContext } from "../../Helpers/Contexts";
import "./Rating.css";
import swal from "sweetalert";

import axios from "axios";
import { addRating } from "../../Api/RatingRequest";
const Rating = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ratingPoint, setRatingPoint] = useState(0);
  const { rating, setRating } = useContext(RatingContext);
  const { Questions, setQNA } = useContext(RatingContext);
  const [feedBack, setFeedBack] = useState("");
  const [hover, setHover] = useState(null);
  const [prev, setPrev] = useState(null);

  const userInfo = sessionStorage.getItem("userInfo");

  const nextQuestion = async () => {
    if (ratingPoint !== 0) {
      let rating = {
        Question: Questions[currentQuestion].prompt,
        rating: ratingPoint,
        userInfo: userInfo,
      };

     try {
     
      const { data } = await addRating(rating)

      if (data.modifiedCount === 1) {
        setRatingPoint(0);
        setCurrentQuestion(currentQuestion + 1);
        setPrev(1);
      }else{
        console.log("data is not modified")
      }
     } catch (error) {
      console.log(error);
     }
    } else {
      swal({
        title: "Do you want to skip?",
        text: "You can answer by going back!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          setCurrentQuestion(currentQuestion + 1);
          setPrev(null);
          setRatingPoint(0);
          swal("You have skipped!", {
            icon: "success",
          });
        } else {
          swal("Continue!");
        }
      });
    }
  };
  const prevQuestion = () => {
    if (currentQuestion > 0 && prev == null)
      setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = async () => {
    if (feedBack !== "") {
      let rating = {
        Question: Questions[currentQuestion].prompt,
        rating: feedBack,
        userInfo: userInfo,
      };
     try {
       await addRating(rating)

      setRating("endScreen");
     } catch (error) {
      console.log(error);
     }
    } else {
      swal("Enter feeback to finish..!", {
        color: "warning",
      });
    }
  };
  return (
    <div className="Rating">
      <div className="badge">
      <h3 style={{color:"orangered"}}>{currentQuestion+1}/{Questions.length}</h3>
      </div>
      <h2 className="Question">{currentQuestion+1}.  {Questions[currentQuestion].prompt}...?</h2>

      {Questions[currentQuestion].Scale ? (
        <>
          <div className="ratings">
            {[...Array(5)].map((star, i) => {
              let ratingValue = 0;
              {
                Questions[currentQuestion].Scale === 5
                  ? (ratingValue = i + 1)
                  : (ratingValue = 2 * (i + 1));
              }

              return (
                <label>
                  <input
                    className="input"
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRatingPoint(ratingValue)}
                  />
                  <FaStar
                    color={
                      ratingValue <= (hover || ratingPoint)
                        ? "#ffc107"
                        : "#e4e5e9"
                    }
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <div className="nav-button">
            {currentQuestion > 0 && prev === null ? (
              <button className="button n-btn" onClick={prevQuestion}>
                Prev Question
              </button>
            ) : (
              ""
            )}
            <button className="button n-btn" onClick={nextQuestion}>
              Next Question
            </button>
          </div>
        </>
      ) : (
        <div className="feedback">
          <input
            className="input2"
            placeholder="Enter your feedback here..."
            type="text"
            onChange={(e) => setFeedBack(e.target.value)}
          />
         <div className="nav-button">
         {prev===null && 
           <button className="button n-btn" onClick={prevQuestion}>
                Prev Question
              </button> }
          <button className="button s-btn" onClick={handleSubmit}>
            Submit
          </button>
         </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
