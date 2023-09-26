import React from 'react'
import "./IndividualEvent.css"
import logo from "../../assets/logo.png"
const IndividualEvent = (props) => {
  return (
    <div className='individualEvent'>
      <div className="logo-wrapper">
        <img className='logo' src={logo}></img>
      </div>

      <div className="event-wrapper">
        <div className="event-img-wrapper">
          <div className="img-container">
            <img className='tech' src={props.imgUrl}></img>
          </div>
        </div>
        <div className="event-info-wrapper">
          <div className="info-container">
            <h1>{props.name}</h1>
            <div className="event-details">
              <h3>{props.venue}</h3>
              <h3 className='date'>{props.date}</h3>
              <h3>{props.time}</h3>
            </div>
            <div className="event-text">
              <p>{props.discription}</p>
            </div>
            <div className="event-managers">
              <h4>Event Co Ordinatore: {props.CoOrdinatore}</h4>
              <h4>Over All Head: {props.head} </h4>
              <h4>Fees: {props.fees}₹</h4>
            </div>

            <div className="register-btn">
              <button className='btn'>REGISTER NOW</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default IndividualEvent
