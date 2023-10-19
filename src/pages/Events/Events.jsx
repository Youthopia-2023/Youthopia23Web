import "./Events.css";
import Card from "./card/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Youthopia from "../../assets/youthopia.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { baseUrl } from "../../url";
import loader from "../../assets/loader.gif"
function Events() {
  const [loading, setLoading] = useState(true);
  const [eventdata, setEventdata] = useState([]);
  const [filteredevents, setFilteredevents] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      axios.get(`${baseUrl}/event/geteventdetails`).then((res) => {
        setEventdata(res);
        let a = [];
        res?.data?.details.filter((event) => {
          if (event.category === cat) {
            a.push(event);
            setFilteredevents(a);
            setLoading(false);
          }
        });
      });
      console.log(data.data.details);       //eslint-disable-line
    };
    fetchdata();
  }, []);
  const [cat, setCat] = useState("technical");
  const card = filteredevents?.map((event, index) => {
    return (
      <Card
        key={index}
        id={event.event_id}
        name={event.event_name}
        venue={event.venue}
        date={event.date}
        start_time={event.start_time}
        end_time={event.end_time}
        discription={event.event_description}
        Coordinator={event.coordinator}
        head={event.overall_head}
        fees1={event.fees1}
        fees2={event.fees2}
        max={event.participant_max}
        min={event.participant_min}
        imgUrl={event.event_poster}
        category={event.category}
      />
    );
  });
  function handleChange(category) {
    setCat((cate) => category);         //eslint-disable-line
  }
  useEffect(() => {
    let a = [];
    eventdata?.data?.details.filter((event) => {
      if (event.category === cat) {
        a.push(event);
        setFilteredevents(a);
      }
    });
    console.log(filteredevents);
  }, [cat]);
  return (
    <div className="mainEventBody">
      <Navbar />
      <div className="events">
        <div className="youthopiaImg">
          <img src={Youthopia} alt="Image not foud" />
        </div>
        <div className="secNavBar">
          <div onClick={() => handleChange("technical")} className="a">
            Technical
          </div>
          <div onClick={() => handleChange("cultural")} className="a">
            Cultural
          </div>
          <div onClick={() => handleChange("informal")} className="a">
            Informal
          </div>
        </div>
        {loading&&<div className="loaderDiv">
          <img src={loader} alt="" />
        </div>}
        <div className="card-Container">{card}</div>
        <Footer />
      </div>
    </div>
  );
}
export default Events;
