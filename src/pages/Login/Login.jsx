import React from "react";
import './Login.css';
import Youthopia from '../../assets/youthopia.png'
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";


export default function Login(){
    return (
        <div className="LoginContainer">
            <div className="Login">
                        <img src={star1} alt="star-1" className="star-1"></img>
                    <img src={star2} alt="star-2" className="star-2"></img>
                    <img src={star3} alt="star-3" className="star-3"></img>
                    <img src={line} alt="star-3" className="line-4"></img>
                    <img src={ellipse} alt="star-3" className="ellipse"></img>

                <img src={Youthopia} alt="" />
                <p>Login</p>
                <form action="#">
                    <div className="login-details">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <label >
                    <input type="checkbox" />
                    I agree to this terms and conditions
                    </label>
                </form>
                <button className="login-btn">Login</button>
            </div>
        </div>
    )
}