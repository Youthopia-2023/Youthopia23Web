import "./PageNotFound.css"
import logo from "../../assets/youthopia.svg"
import image404 from "../../assets/image404.png"
import { useNavigate } from "react-router"

function PageNotFound() {
    const navigate = useNavigate();
    const backToHomepage = () => {
        navigate("/");
    }
    return (
        <div className="pageNotFound">
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
