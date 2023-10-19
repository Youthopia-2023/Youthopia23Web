import "./sponsors.css";
import arrow from "../../assets/Polygon 1.svg";
import { baseUrl } from "../../url";
import { useEffect, useState } from "react";
import axios from "axios";
import loader from "../../assets/loader.gif"

function Sponsor() {
  const [imgUrls, setImgUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    axios.get(`${baseUrl}/sponsor/getlandingpagedetails`).then((res) => {
      setImgUrls(res.data?.details[0]?.sponser_img);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="main-sponsor">
      <h2>SPONSORS</h2>
      <div className="arrow">
        <img src={arrow} alt="arrow"></img>
      </div>
      <div className="sponsor-grid">
        {loading && <img src={loader} alt="not available" />}
        {
          imgUrls?.map((url, index) => (
            <img src={url} alt="logo-1" className="sponsor-logo" key={index} />
          ))
        }
        {/* <div className="grids">
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
          </div> */}
      </div>
    </div>
  );
}

export default Sponsor;
