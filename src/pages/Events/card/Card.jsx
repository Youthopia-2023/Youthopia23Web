import IndividualEvent from "../../../components/IndividualEvents/IndividualEvent";
import "./Card.css";
import { Link } from "react-router-dom";


export default function Card(props) {
  const datatopass={
        id: props.id,
      name:props.name,
      venue:props.venue,
      date:props.date,
      time:props.time,
      discription:props.discription,
      Coordinator:props.Coordinator,
      head:props.head,
      fees:props.fees,
      imgUrl:props.imgUrl,
      category:props.category,
    }
  
  console.log(props)
  return (
    <div className="card" id={props.id}>
      <div className="image">
        <p className="revealing_soon">REVEALING</p>
        <p className="revealing_soon">SOON</p>
      </div>
      <div className="content">
        <div className="event-name">{props.name}</div>
        <div className="detail">
          <p>Venue</p>
          <p>{props.date}</p>
        </div>
        <div className="detail">
          <p>{props.price}</p>
          <p>{props.time}</p>
        </div>
      </div>

      <Link
        to='/IndividualEvent'  // Assuming you have a route for individual events
        className="register"
        state={datatopass}
      >
        Register Now
      </Link>
        
    </div>
  );
}
