import "./Footer.css"
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai"
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"
import location from "../../assets/location.svg"
import naac from "../../assets/NAAC LOGO PNG.svg"
import years from "../../assets/25_years_logo.svg"
import youthopia from "../../assets/youthopia 2022 white small 1.svg"
import Dit from "../../assets/Dit white.svg"
function Footer() {
    const moveToInstagram = () => {
        window.open("https://www.instagram.com/ditu.youthopia/")
    }
    const moveToLinkedIn = () => {
        window.open("https://www.linkedin.com/school/dit-university/")
    }
    const moveToYoutube = () => {
        window.open("https://www.youtube.com/")
    }

    const moveToFacebook = () => {
        window.open("https://www.facebook.com/ditu.youthopia/")
    }

    return (
        <div className="footer">
            <div className="footerSocials">
                <div className="text">FOLLOW US:</div>
                <div className="icons">
                    <AiOutlineInstagram onClick={moveToInstagram}/>
                    <BiLogoLinkedin onClick={moveToLinkedIn}/>
                    <AiFillYoutube onClick={moveToYoutube}/>
                    <BiLogoFacebook onClick={moveToFacebook}/>
                </div>
            </div>
            <div className="rowTwo">
                <div className="address">
                    <div className="addressText">
                        <div className="mainHeading"><div className="addressIcon"><img src={location} alt="" /></div>DIT University,</div>
                        <div className="subAddress">Mussoorie - Diversion Road, Village Makkawala, Dehradun, Uttarakhand -248009,India</div>
                    </div>
                </div>
                <div className="contactMobile">
                    <BsFillTelephoneFill /><div className="number"><a href="tel:+911800121041000">1800121041000</a></div>
                </div>
            </div>
            <div className="lastRow">
                <div className="leftLogo">
                    <img src={naac} alt="" />
                    <div className="line"></div>
                    <img src={years} alt="" />
                </div>
                <div className="copyrights">
                    Design & Developed By
                    Technical & Design Team
                    YOUTHOPIA 2023
                </div>
                <div className="rightLogo">
                    <img src={youthopia} alt="" />
                    <div className="line"></div>
                    <img src={Dit} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
