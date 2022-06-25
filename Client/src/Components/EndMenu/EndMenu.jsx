import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { RatingContext } from "../../Helpers/Contexts";
import Thanks from "../../Image/thanks.png.png"
const EndMenu = () => {
  //context
  const { rating, setRating } = useContext(RatingContext);
  const { Questions, setQNA } = useContext(RatingContext);
  //Setting back to welcome page after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setQNA([]);
      setRating("menu");

      sessionStorage.clear("userInfo");
    }, 5000);
  });
  return (
    <div>
      <img
        style={{ width: "250px", height: "250px" }}
        src={Thanks}
        alt=""
      />
    </div>
  );
};

export default EndMenu;
