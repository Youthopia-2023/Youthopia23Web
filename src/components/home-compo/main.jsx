import "./main.css";
import img1 from "../../assets/DIT LOGO WHITE.svg";
import img2 from "../../assets/Youthopia.svg";
import img3 from "../../assets/NAAC LOGO PNG.svg";
import img4 from "../../assets/youthopia 2022 white small 1.svg";
import img5 from "../../assets/25_years_logo.svg";
import star1 from "../../assets/Group 22.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import star4 from "../../assets/Star5.svg";
import elipse from "../../assets/Ellipse.png"
import lines from "../../assets/Group 23.svg";
import ball from "../../assets/ball.png"
import balls from "../../assets/balls.png"
import Timer from "../Timer/Timer";

function Main() {
  return (
    <div className="main-page">
      <div className="logo-container">
        <div className="RowOne">
          <img className="DIT" src={img1} alt="Logo 1" />
        </div>
        
        <div className="RowTwo">
          <img src={img2} alt="Logo 2" className="youthopia" />
        </div>
        <div className="Timer">
          <Timer/>
        </div>
        <div className="RowThree">
          <div className="inner-container">
            <div className="clg-logo left">
              <img src={img3} alt="Logo 3"></img>
            </div>
            <div className="clg-logo center">
              <img src={img4} alt="Logo 4"></img>
            </div>
            <div className="clg-logo right">
              <img src={img5} alt="Logo 5"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="rndm-images">
        <img src={star1} alt="star-1" className="star-1"></img>
        <img src={star2} alt="star-2" className="star-2"></img>
        <img src={star3} alt="star-3" className="star-3"></img>
        <img src={star4} alt="star-4" className="star-4"></img>
        <img src={lines} alt="lines" className="lines"></img>
      </div>
    </div>
  );
}

export default Main;