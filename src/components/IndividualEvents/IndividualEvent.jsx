import React from 'react'
import "./IndividualEvent.css"
import logo from "../../assets/Youthopia.svg"
// import tech from '../../assets/tech.jpg'
import { useLocation } from 'react-router-dom'
const IndividualEvent = () => {
  let props=useLocation();
  console.log(props)
  
  
  return (
    <div className='individualEvent'>
      <div className="logo-wrapper">
        <img className='logo' src={logo}></img>
      </div>

      <div className="event-wrapper">
        <div className="event-img-wrapper">
          <div className="img-container">
            <img className='tech' src={tech}></img>
          </div>
        </div>
        <div className="event-info-wrapper">
          <div className="info-container">
            <h1>{props.state.name}</h1>
            <div className="event-details">
              <h3>{props.state.venue}</h3>
              <h3 className='date'>{props.state.date}</h3>
              <h3>{props.state.time}</h3>
            </div>
            <div className="event-text">
              <p>{props.state.discription}</p>
            </div>
            <div className="event-managers">
              <h4>Event Co Ordinatore: {props.state.Coordinator}</h4>
              <h4>Over All Head: {props.state.head} </h4>
              <h4>Fees: {props.state.fees}₹</h4>
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
