import React from "react";
import "./Footer.css";
import ditBgimage from "../../assets/ditBgimage.svg";
import yearsLogo from "../../assets/yearsLogo.svg";
import ditlogowhite from "../../assets/ditlogowhite.svg";
import NaacLogo from "../../assets/NaacLogo.svg";
import youthopiaLogo from "../../assets/youthopiaLogo.svg"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai" 

function Footer() {
  return (

      <div className="container">
		<p className="head">FOLLOW US :
		<div className="icons">
		<i>
			<AiOutlineInstagram/>
		</i>
		<i>
		 <AiFillLinkedin/>
		</i>
		<i>
		<AiFillYoutube/>
		</i>
		<i>
		<AiFillFacebook/>
		</i>
		</div>
		</p>
    <div className="image">
        <img src={ditBgimage} alt="" />
		
    </div>

    <div className="logos">
    <div className="leftCorner">
        <img  src={NaacLogo} alt=""/>
        <img  src={yearsLogo} alt=""/>
        
    </div>

    <div className="rightCorner" >
        <img  src={youthopiaLogo} alt=""/>
        <img  src={ditlogowhite} alt=""/>
    </div>

	  </div>
	  </div>
  );
}
export default Footer;
