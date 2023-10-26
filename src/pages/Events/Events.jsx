import "./Events.css";
import Card from "./card/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Youthopia from "../../assets/youthopia.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { baseUrl } from "../../url";
import loader from "../../assets/loader.gif";
import { user } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
function Events() {
  const [filteredevents, setFilteredevents] = useState([]);
  const eventData = useSelector((state) => state);
  const [loading, setLoading] = useState(
    eventData?.data?.data?.details[0] ? false : true
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchdata = async () => {
      axios.get(`${baseUrl}/event/geteventdetails`).then((res) => {
        dispatch(user.setData(res));
        let a = [];
        res?.data?.details.filter((event) => {
          if (event.category === eventData.category) {
            a.push(event);
            setFilteredevents(a);
            setLoading(false);
          }
        });
      });
    };
    if (!eventData?.data?.data?.details[0]) {
      fetchdata();
    }
  }, []);
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
        rules={event.rules}
        bots={event.bots}
        max={event.participant_max}
        min={event.participant_min}
        imgUrl={event.event_poster}
        category={event.category}
        forms={event.forms ? event.forms : ""}
      />
    );
  });
  function handleChange(category) {
    dispatch(user.setCategorie(category)); //eslint-disable-line
  }
  useEffect(() => {
    let a = [];
    eventData?.data?.data?.details.filter((event) => {
      if (event.category === eventData.category) {
        a.push(event);
        setFilteredevents(a);
      }
    });
  }, [eventData.category]);
  return (
    <div className="mainEventBody">
      <Navbar />
      <div className="events">
        <div className="youthopiaImg">
          <img src={Youthopia} alt="Image not foud" />
        </div>
        <div className="secNavBar">
          <div
            onClick={() => handleChange("technical")}
            className={`${
              eventData.category === "technical" ? "activeInnerNav" : ""
            } a`}
          >
            Technical
          </div>
          <div
            onClick={() => handleChange("cultural")}
            className={`${
              eventData.category === "cultural" ? "activeInnerNav" : ""
            } a`}
          >
            Cultural
          </div>
          <div
            onClick={() => handleChange("informal")}
            className={`${
              eventData.category === "informal" ? "activeInnerNav" : ""
            } a`}
          >
            Informal
          </div>
        </div>
        {loading && (
          <div className="loaderDiv">
            <img src={loader} alt="" />
          </div>
        )}
        <div className="card-Container">{card}</div>
        <Footer />
      </div>
    </div>
  );
}
export default Events;
