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
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { user } from "../../store/store";
const Profile = () => {
  const userData = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userData.token) {
      navigate("/login", { replace: true });
    }
  }, []);

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
            <p>{`${userData.firstName} ${userData.lastName}`}</p>
            <hr></hr>
          </div>
          <div className="inner-container-2">
            <div className="row">
              <p className="heading">Mobile Number</p>
              <p className="info">{userData.phonenumber}</p>
              <p className="heading">E-mail</p>
              <p className="info">{userData.email}</p>
            </div>
            <div className="row">
              <p className="heading">College</p>
              <p className="info">{userData.college}</p>
              <p className="heading">Year</p>
              <p className="info">{`${userData.year} year`}</p>
            </div>
          </div>
          <div className="btn-container">
            <EventButton />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.4rem",
                marginTop: "0.5rem",
                background: "white",
                color: "black",
                borderRadius: "20px",
                fontWeight: 500,
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(user.clear());
                toast.success("Logged out!");
                navigate("/");
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
