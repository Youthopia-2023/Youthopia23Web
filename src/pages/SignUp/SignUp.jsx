import React from 'react'
import Youthopia from '../../assets/youthopia.png'
import './SignUp.css';


const SignUp = () => {
  return (
    <div className='signUp-container'>
        <div className="signUp">
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
