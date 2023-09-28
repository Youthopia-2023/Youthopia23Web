import React from "react";
import './Login.css';
import Youthopia from '../../assets/youthopia.png'
export default function Login(){
    return (
        <div className="LoginContainer">
            <div className="Login">
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