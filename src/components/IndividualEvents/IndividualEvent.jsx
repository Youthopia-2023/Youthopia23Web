import React from "react";
import "./IndividualEvent.css";
import logo from "../../assets/Youthopia.svg";
// import tech from '../../assets/tech.jpg'
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState,useEffect } from "react";
const IndividualEvent = () => {
  let props = useLocation();
  // console.log(props.state)
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function Small() {
    return (
      <>
        <>
          <Navbar />
          <div className="individualEvent">
            <div className="logo-wrapper">
              <img className="logo" src={logo}></img>
            </div>
            <div className="event-wrapper">
            <h1>{props.state.name}</h1>
              <div className="event-img-wrapper">
                
                <div className="img-container">
                  <img className="tech" src={props.state.imgUrl}></img>
                </div>
              </div>
              <div className="event-info-wrapper">
                <div className="info-container">
                  <div className="event-details">
                    <h3>{props.state.venue}</h3>
                    <h3 className="date">{props.state.date}</h3>
                    <h3>{props.state.time}</h3>
                  </div>
                  <div className="event-text">
                    <p>{props.state.discription}</p>
                  </div>
                  <div className="event-managers">
                    <h4>Event Co Ordinatore: </h4>
                    {Object.keys(props.state.Coordinator).map(function (
                      key,
                      index
                    ) {
                      return (
                        <h4 key={index}>
                          Event Co Ordinatore: {key},{" "}
                          {props.state.Coordinator[key]}
                        </h4>
                      );
                    })}
                    <h4>Over All Heads: </h4>
                    {Object.keys(props.state.head).map((head, index) => {
                      return (
                        <h4 key={index}>
                          {head}: {props.state.head[head]}{" "}
                        </h4>
                      );
                    })}
                    <h4>Fees: {props.state.fees}₹</h4>
                  </div>

                  <div className="register-btn">
                    <button className="btn">REGISTER NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      </>
    );
  }
  function Large(){
    return (
      <>
      <Navbar />
      <div className="individualEvent">
        <div className="logo-wrapper">
          <img className="logo" src={logo}></img>
        </div>
        <div className="event-wrapper">
          <div className="event-img-wrapper">
            <div className="img-container">
              <img className="tech" src={props.state.imgUrl}></img>
            </div>
          </div>
          <div className="event-info-wrapper">
            <div className="info-container">
              <h1>{props.state.name}</h1>
              <div className="event-details">
                <h3>{props.state.venue}</h3>
                <h3 className="date">{props.state.date}</h3>
                <h3>{props.state.time}</h3>
              </div>
              <div className="event-text">
                <p>{props.state.discription}</p>
              </div>
              <div className="event-managers">
                <h4>Event Co Ordinatore: </h4>
                {Object.keys(props.state.Coordinator).map(function (
                  key,
                  index
                ) {
                  return (
                    <h4 key={index}>
                      Event Co Ordinatore: {key}, {props.state.Coordinator[key]}
                    </h4>
                  );
                })}
                <h4>Over All Heads: </h4>
                {Object.keys(props.state.head).map((head, index) => {
                  return (
                    <h4 key={index}>
                      {head}: {props.state.head[head]}{" "}
                    </h4>
                  );
                })}
                <h4>Fees: {props.state.fees}₹</h4>
              </div>

              <div className="register-btn">
                <button className="btn">REGISTER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
    )
  }

  return (
    <>
      {width<1200?<Small/>:<Large/>}
      </>
  );
};

export default IndividualEvent;
