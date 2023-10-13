import "./Events.css"
import Card from "./card/Card"
import { useState, useEffect } from "react"
import axios from "axios"
import Youthopia from '../../assets/youthopia.png'
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function Events() {
  const[eventdata,setEventdata]= useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:3000/event/geteventdetails");
      setEventdata(data);
      console.log(data.data.details);
    }
    fetchdata();
  }, []);

  const [cat, setCat] = useState("Technical");

  

  const card = eventdata?.data?.details.filter(function(event){
    return event.category===cat;
  }).map((event, index) => {
    return (
      <Card
        id={event.id}
        name={event.event_name}
        venue={event.venue}
        date={event.date}
        time={event.time}
        discription={event.description}
        Coordinator={event.coordinator}
        head={event.head}
        fees={event.fees1}
        imgUrl={event.event_poster}
        category={event.category}
      />
    );
  });



  function handleChange(category) {

    setCat(cat => category)
  }

  return (
    <>
      <Navbar />
      <div className="events">
        <img className="youImg" src={Youthopia} alt="Image not foud" />
        <div className="secNavBar">
          <div onClick={() => handleChange("Technical")} className="a">
            Technical
          </div>
          <div onClick={() => handleChange("Cultural")} className="a">
            Cultural
          </div>
          <div onClick={() => handleChange("Informal")} className="a">
            Informal
          </div>
        </div>
        <div className="card-Container">{card}</div>
      </div>
      <Footer />
    </>
  );
    // <>
    // <Navbar/>
    // <div className='registre-container'>
    //   <div className="registre">
    //     <img src={star1} alt="star-1" className="star-1"></img>
    //     <img src={star1} alt="star-1" className="star-1"></img>
    //     <img src={star2} alt="star-2" className="star-2"></img>
    //     <img src={star3} alt="star-3" className="star-3"></img>
    //     <img src={line} alt="star-3" className="line-4"></img>
    //     <img src={ellipse} alt="star-3" className="ellipse"></img>
    //     <img src={Youthopia} alt="" />
    //     <p className='registre-text'>REGISTRATION WILL BE OPEN SOON!</p>
    //     <Link to="/"><button className="registre-btn">Back to Homepage</button></Link>
    //   </div>
    // </div>
    // <Footer/>
    // </>
    
  
}

export default Events
