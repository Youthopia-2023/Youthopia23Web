import "./main.css";
import img1 from "../../assets/DIT LOGO WHITE.png"
import img2 from "../../assets/Youthopia Logo.png"
import img3 from "../../assets/NAAC LOGO PNG.png"
import img4 from "../../assets/youthopia 2022 white small 1.png"
import img5 from "../../assets/25_years_logo.png"

function Main() {
  return (
    <div className="main-page">
      <div className="logo-container">
        <div className="logo">
          {/* Logo 1 */}
          <img src={img1} alt="Logo 1" />
        </div>
        <div className="logo">
          {/* Logo 2 */}
          <img src={img2} alt="Logo 2" />
        </div>
        <div className="logo">
          <div className="inner-container">
          <div className="clg-logo">
            <img src={img3} alt="Logo 3"></img>
          </div>
          <div className="clg-logo">
            <img src={img4} alt="Logo 3"></img>
          </div>
          <div className="clg-logo">
            <img src={img5} alt="Logo 3"></img>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
