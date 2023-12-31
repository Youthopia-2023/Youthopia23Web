import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import loader from "../../assets/loader.gif";
import "./About.css";
import youthopia from "../../assets/Youthopia.svg";
import AboutUsImgBox from "../../components/AboutUsImgBox/AboutUsImgBox";
import { baseUrl } from "../../url";
import axios from "axios";
import { useState, useEffect } from "react";

function About() {
  const [headsdata, setHeadsdata] = useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      axios.get(`${baseUrl}/a/getheaddetails`).then((res) => {
        // console.log(res.data.details.length);
        let data = res.data.details;
        var list = new Map();
        data.forEach(element => {
          if (list.has(element.index)) {
            list.set(element.index, [...list.get(element.index), element])
          } else {
            list.set(element.index, [element])
          }
        });
        setHeadsdata(list);
        setLoading(false);
        // console.log(list);
      });
    };
    fetchdata();
  }, []);

  if (!headsdata) {
    return <div>Loading...</div>
  }


  return (
    <div className="about">
      <Navbar />
      <div className="mainBody">
        <div className="innerDiv">
          <div className="about-container">
            <div className="youthopia-logo">
              <img src={youthopia} alt="youthopia"/>
            </div>
            <div className="heading">
              <p>MEET OUR TEAM</p>
              {loading&&<img src={loader} alt="img not available"/>}
            </div>
          </div>
          <div className="content-heads">
            {
              Array.from(headsdata).map(([index, elements]) => (
                console.log(elements),
                <div key={index} className="category">
                  <p className="designations">{elements[0].designation}</p>
                  <div className="image-row">
                  {elements.map((element, i) => (
                    <AboutUsImgBox
                      key={i}
                      img={element.image}
                      name={element.name}
                      role={element.designation}
                      phone={element.number}
                    />
                  ))}
                  </div>
                </div>
              ))
            }
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
