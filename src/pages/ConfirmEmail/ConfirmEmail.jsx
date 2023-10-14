import React from 'react'
import './ConfirmEmail.css'
import Youthopia from '../../assets/youthopia.png'
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";

const ConfirmEmail = () => {
  return (
    <div className='confirm-container'>
        <div className="confirm">
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star2} alt="star-2" className="star-2"></img>
         <img src={star3} alt="star-3" className="star-3"></img>
        <img src={line} alt="star-3" className="line-4"></img>
        <img src={ellipse} alt="star-3" className="ellipse"></img>

        <img src={Youthopia} alt="" />
        <p className='confirm-text'>To confirm your email address check your email and click the link to activate your account</p>
         <button className="confirm-btn">Verify</button>

        </div>
      
    </div>
  )
}

export default ConfirmEmail
