// import React, { useState } from "react";
import "./Profile.css";
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";
import Youthopia from "../../assets/youthopia.png";
import ProfileImg from "../../assets/ProfileDmyImg.svg";
import EventButton from "../../components/EventButton/EventButton";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const Profile = () => {
  return (
    <>
    <Navbar />
    <div className="profile">
      <div className="profile-container">
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star2} alt="star-2" className="star-2"></img>
        <img src={star3} alt="star-3" className="star-3"></img>
        <img src={line} alt="star-3" className="line-4"></img>
        <img src={ellipse} alt="star-3" className="ellipse"></img>
        <div className="inner-container-1">
          <img className="youthopia-logo" src={Youthopia} alt="" />
          <img className="profile-img" src={ProfileImg} />
          <p>Name</p>
          <hr></hr>
        </div>
        <div className="inner-container-2">
          <div className="row">
            <p className="heading">Mobile Number</p>
            <p className="info">8989898989</p>
            <p className="heading">E-mail</p>
            <p className="info">ex@mail.com</p>
          </div>
          <div className="row">
            <p className="heading">College</p>
            <p className="info">DIT University</p>
            <p className="heading">Year</p>
            <p className="info">2 Year</p>
          </div>
        </div>
        <div className="btn-container">
        <EventButton />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Profile;
