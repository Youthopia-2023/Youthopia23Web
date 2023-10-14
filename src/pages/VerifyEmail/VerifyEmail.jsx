import React from 'react'
import './VerifyEmail.css'
import Youthopia from '../../assets/youthopia.png'
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";


const VerifyEmail = () => {
  return (
    <div className='Verify-container'>
        <div className="verify">
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star2} alt="star-2" className="star-2"></img>
         <img src={star3} alt="star-3" className="star-3"></img>
        <img src={line} alt="star-3" className="line-4"></img>
        <img src={ellipse} alt="star-3" className="ellipse"></img>

        <img src={Youthopia} alt="" />

        <p>Verify your E-mail to finish your signUp</p>
                <form action="#">
                    <div className="verify-details">
                        <input type="email" placeholder="Email" />
                    </div>
                </form>
                <button className="verify-btn">Verify</button>




        </div>
      
    </div>
  )
}

export default VerifyEmail
