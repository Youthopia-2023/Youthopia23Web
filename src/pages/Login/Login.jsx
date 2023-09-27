import React from "react";
import './Login.css';
import Youthopia from '../../assets/youthopia.png'
export default function Login(){
    return (
        <div className="LoginContainer">
            <div className="Login">
                <img src={Youthopia} alt="" />
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
                    I agree to this terms and conditions
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}