import React from "react";
import "./Registration.css";
import Youthopia from "../../assets/youthopia.png";
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";

const Registration = () => {
  return (
    <div className="registre-container">
      <div className="registre">
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star2} alt="star-2" className="star-2"></img>
        <img src={star3} alt="star-3" className="star-3"></img>
        <img src={line} alt="star-3" className="line-4"></img>
        <img src={ellipse} alt="star-3" className="ellipse"></img>

        <img className="youthopia-logo" src={Youthopia} alt="" />

        <p className="registre-text">REGISTRATION WILL BE OPEN SOON!</p>
        <button className="registre-btn">Back to Homepage</button>
      </div>
    </div>
  );
};

export default Registration;
