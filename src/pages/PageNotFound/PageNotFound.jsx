import "./PageNotFound.css"
import logo from "../../assets/Youthopia.svg"
import image404 from "../../assets/image404.png"
import { useNavigate } from "react-router"
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";

function PageNotFound() {
    const navigate = useNavigate();
    const backToHomepage = () => {
        navigate("/");
    }
    return (
        <div className="pageNotFound">
            <img src={star1} alt="star-1" className="star-1"></img>
            <img src={star2} alt="star-2" className="star-2"></img>
            <img src={star3} alt="star-3" className="star-3"></img>
            <img src={line} alt="star-3" className="line-4"></img>
            <img src={ellipse} alt="star-3" className="ellipse"></img>
            <div className="card404">
                <img src={logo} alt="" />
                <div className="section404">
                    <img src={image404} alt="" />
                    <div className="text404">
                        OPPS! IT LOOKS LIKE YOU ARE LOST IN SPACE
                    </div>
                    <button className="backToHome" onClick={backToHomepage}> Back to Homepage</button>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
