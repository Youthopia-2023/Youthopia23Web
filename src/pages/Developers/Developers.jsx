import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import youthopia from "../../assets/youthopia.png";
import "./Developers.css";

export default function Developers() {
  return (
    <div className="developers">
      <Navbar />

      <div className="dev-container">
        
        <div className="youthopia-logo">
          <img src={youthopia} alt="youthopia" />
        </div>
        <div className="card-container">
          
          
          <div className="conveners card-cont">
            <p className="heading">Design Team</p>
            <p className="con">Member 1</p>
            <p className="con">Member 2</p>
            <p className="con">Member 3</p>
            <p className="con">Member 4</p>
          </div>
          
          <div className="conveners card-cont">
            <p className="heading">Development Team</p>
            <p className="con">Member 1</p>
            <p className="con">Member 2</p>
            <p className="con">Member 3</p>
            <p className="con">Member 4</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
