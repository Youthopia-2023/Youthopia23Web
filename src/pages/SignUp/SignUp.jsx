import React , { useState }  from 'react'
import Youthopia from '../../assets/youthopia.png'
import './SignUp.css';
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";




const SignUp = () => {
  return (
  
    <div className='signUp-container'>
        <div className="signUp">
           <img src={star1} alt="star-1" className="star-1"></img>
           <img src={star2} alt="star-2" className="star-2"></img>
           <img src={star3} alt="star-3" className="star-3"></img>
           <img src={line} alt="star-3" className="line-4"></img>
           <img src={ellipse} alt="star-3" className="ellipse"></img>

            <img src={Youthopia}></img>
            <p>SIGN UP</p>
                <form action="#">
                    <div className="name">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password"/>
                    <label >
                    <input type="checkbox" />
                    I agree to this terms and condition
                    </label>
                    <input type="submit" />
                </form>

        </div>
      
    </div>
  )
}

export default SignUp
