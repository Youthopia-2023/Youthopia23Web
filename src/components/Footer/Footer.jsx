import "./Footer.css"
import {AiOutlineInstagram, AiFillYoutube} from "react-icons/ai"
import {BiLogoLinkedin, BiLogoFacebook} from "react-icons/bi"
function Footer() {
  return (
    <div className="footer">
      <div className="footerSocials">
        <div className="text">FOLLOW US:</div>
        <div className="icons">
            <AiOutlineInstagram/>
            <BiLogoLinkedin/>
            <AiFillYoutube/>
            <BiLogoFacebook/>
        </div>
      </div>
      <div className="rowTwo"></div>
    </div>
  )
}

export default Footer
