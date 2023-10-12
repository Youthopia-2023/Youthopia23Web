import "./Register.css";
import Youthopia from "../../assets/youthopia.png";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Register() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const min = parseInt(searchParams.get("min"))
  const max = parseInt(searchParams.get("max"));
  const [count, setCount] = useState(min);

  function Counter() {
    function decrement() {
      if (count == min) {
        setCount(min);
      } else {
        setCount(count - 1);
      }
    }
    function increment() {
      if (count == max) {
        setCount(max);
      } else {
        setCount(count + 1);
      }
    }

    return (
      <div className="Counter">
        <button className="dec" type="button" onClick={decrement}>
          -
        </button>
        <p className="Count">{count}</p>
        <button className="inc" type="button" onClick={increment}>
          +
        </button>
      </div>
    );
  }
  function IND() {
    return (
      <div className="Ind">
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star2} alt="star-2" className="star-2"></img>
        {/* <img src={star3} alt="star-3" className="star-3"></img> */}
        <img src={line} alt="star-3" className="line-4"></img>
        <img src={ellipse} alt="star-3" className="ellipse"></img>

        <form action="#">
          <p>Participant Details</p>
          <hr className="horiLine" />
          <label htmlFor="yourName">Your Name</label>
          <input type="text" id="yourName" placeholder="Enter Full Name" />
          <label htmlFor="SAPId">SAP ID</label>
          <input type="text" id="SAPID" placeholder="Enter Your SAP ID" />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Phone Number" />

          <input
            className="reg"
            type="submit"
            value="Register Now"
            placeholder="Register"
          />
        </form>
      </div>
    );
  }
  function Team() {
    return (
      <div className="Ind">
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star2} alt="star-2" className="star-2"></img>
        {/* <img src={star3} alt="star-3" className="star-3"></img> */}
        <img src={line} alt="star-3" className="line-4"></img>
        <img src={ellipse} alt="star-3" className="ellipse"></img>

        <form action="#">
          <p>Participant Details</p>
          <hr className="horiLine" />
          <label htmlFor="yourName">Team Name</label>
          <input type="text" id="yourName" placeholder="Team Name" />
          <label htmlFor="SAPId">Team Leaders Phone Number</label>
          <input type="tel" id="SAPID" placeholder="Enter Your Phone Number" />
          <Counter />
          {Array.from({ length: count }, (_, index) => (
            <div key={index}>
              <label htmlFor={`memberName${index}`}>
                Team Member {index + 1} 
              </label>
              <input
                type="text"
                id={`memberName${index}`}
                placeholder={`Team Member ${index + 1}`}
              />
            </div>
          ))}

          <input
            className="reg"
            type="submit"
            value="Register Now"
            placeholder="Register"
          />
        </form>
      </div>
    );
  }
  return (
    <div className="Register">
        <Navbar/>
      <img className="youthop" src={Youthopia} alt="" style={{margin: '100vh 0px 0px 38%;'}} />
      <div className="eventDet">
        <div className="poster"></div>
        <p className="heading">Technical Event</p>
      </div>

      <div className="partDet">
        <div className="register">
          
          {(min===1 && max==1)?<IND/>:<Team/>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
