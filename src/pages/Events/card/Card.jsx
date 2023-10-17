// import IndividualEvent from "../../../components/IndividualEvents/IndividualEvent";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  // const style = {
  //   margin: "30px 0 0 20%",
  //   fontFamily: "Stellar",
  //   height: "50px",
  //   color: "black",
  //   fontSize: "22px",
  //   width: "80%",
  //   borderRadius: "8px",
  //   bottom: "50px",
  //   backgroundColor: "#f8f8f8",
  //   border: "2px solid BsSlack",
  // };
  const datatopass = {
    id: props.id,
    name: props.name,
    venue: props.venue,
    date: props.date,
    start_time: props.start_time,
    end_time: props.end_time,
    min: props.min,
    max: props.max,
    discription: props.discription,
    Coordinator: props.Coordinator,
    head: props.head,
    fees1: props.fees1,
    fees2: props.fees2,
    imgUrl: props.imgUrl,
    category: props.category,
  };

  // console.log(props)
  return (
    <div className="card" id={props.id}>
      <div className="image">
        <img src={props.imgUrl}></img>
      </div>
      <div className="content">
        <div className="event-name">{props.name}</div>
        <div className="detail">
          <p>{props.venue}</p>
          <p>{props.date}</p>
        </div>
        <div className="detail">
          <p>{props.fees1}</p>
          <p>{props.start_time}</p>
        </div>
      </div>

      <Link
        to="/IndividualEvent" // Assuming you have a route for individual events
        state={datatopass}
      >
        <p className="register2">Register Now</p>
      </Link>
    </div>
  );
}
