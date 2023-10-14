import "./sponsors.css";
import arrow from "../../assets/Polygon 1.svg";
import logo1 from "../../assets/Baskin-Robbins-Logo-2020.png";
import logo2 from "../../assets/ccd-logo-r-.svg"
import logo3 from "../../assets/ccd-logo-r-.svg";
import logo4 from "../../assets/Dunkin-donuts-logo.png";
import logo5 from "../../assets/McDonald's_Golden_Arches.svg.png";
import logo6 from '../../assets/Starbucks_Corporation_Logo_2011.svg.png';
import logo7 from "../../assets/Subway-logo.png";

function Sponsor() {
  return (
    <div className="main-sponsor">
      <div className="main-container">
        <h2>SPONSORS</h2>
        <div className="arrow">
          <img src={arrow} alt="arrow"></img>
        </div>
        <div className="sponsor-grid">
          <div className="grids">
            <img src={logo1} alt="logo-1" className="sponsor-logo"></img>
          </div>
          <div className="grids">
            <img src={logo2} alt="logo-2" className="sponsor-logo"></img>
          </div>
          <div className="grids">
            <img src={logo3} alt="logo-3" className="sponsor-logo"></img>
          </div>
          <div className="grids">
            <img src={logo4} alt="logo-4" className="sponsor-logo"></img>
          </div>
          <div className="grids">
            <img src={logo5} alt="logo-5" className="sponsor-logo"></img>
          </div>
          <div className="grids">
            <img src={logo6} alt="logo-6" className="sponsor-logo"></img>
          </div>
          <div className="grids">
            <img src={logo7} alt="logo-7" className="sponsor-logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
