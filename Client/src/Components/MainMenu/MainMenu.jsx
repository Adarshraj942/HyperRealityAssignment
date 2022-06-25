import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { RatingContext } from "../../Helpers/Contexts";
import "./MainMenu.css";
import { getQuestionsFromServer } from "../../Api/QuestionRequest";
import { createRating } from "../../Api/RatingRequest";
const MainMenu = () => {
  //Context
  const { rating, setRating } = useContext(RatingContext);
  const { Questions, setQNA } = useContext(RatingContext);
  //state
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  //fetching questions from the server
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await getQuestionsFromServer();
        setQNA(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getQuestions();
  }, []);

  //Start rating
  const handleStart = async () => {
    if (!isNaN(user) && user.length === 10) {
      sessionStorage.setItem("userInfo", user);
      const addRatiing = async () => {
        try {
          await createRating({ user });
        } catch (error) {
          console.log(error);
        }
      };
      addRatiing();
      setRating("rating");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="Menu">
      <h3 style={{ color: "green" }}>Welcome</h3>
      <input
        type="text"
        className="input1"
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter your phone.."
      />
      {error && (
        <span style={{ color: "red" }}>Enter a valid mobile number</span>
      )}
      <button className="button" onClick={handleStart}>
        Start Rating
      </button>
    </div>
  );
};

export default MainMenu;
