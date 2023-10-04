import "./Events.css"
// import data from './dummy/data.json'
// import Youthopia from '../../assets/youthopia.png'

// import Card from "./card/Card"
// import { useState } from "react"

import Youthopia from '../../assets/youthopia.png'
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";


function Events() {

  // const [cat, setCat] = useState("Technical");

  // const card = data.events[cat].map((event, index) => {
  //   console.log(event)
  //   return (
  //     <Card
  //       id={event.id}
  //       name={event.name}
  //       venue={event.venue}
  //       date={event.date}
  //       time={event.time}
  //       discription={event.description}
  //       Coordinator={event.coordinator}
  //       head={event.head}
  //       fees={event.price}
  //       imgUrl={event.imgUrl}
  //       category={event.category}
  //     />
  //   )
  // })



  // function handleChange(category) {

  //   setCat(cat => category)
  // }

  return (
  //   <div className="events">
  //     <img className="youImg" src={Youthopia} alt="Image not foud" />
  //     <div className="secNavBar">
  //       <div onClick={() => handleChange("Technical")} className="a">Technical</div>
  //       <div onClick={() => handleChange("Cultural")} className="a">Cultural</div>
  //       <div onClick={() => handleChange("Informal")} className="a">Informal</div>
  //     </div>
  //     <div className="card-Container">
  //       {card}
  //     </div>
  //   </div>
  // )
  <div className='registre-container'>
  <div className="registre">
  <img src={star1} alt="star-1" className="star-1"></img>
  <img src={star1} alt="star-1" className="star-1"></img>
  <img src={star2} alt="star-2" className="star-2"></img>
   <img src={star3} alt="star-3" className="star-3"></img>
  <img src={line} alt="star-3" className="line-4"></img>
  <img src={ellipse} alt="star-3" className="ellipse"></img>

  <img src={Youthopia} alt="" />

  <p className='registre-text'>REGISTRATION WILL BE OPEN SOON!</p>
   <button className="registre-btn">Back to Homepage</button>


  </div>

</div>
  )
}

export default Events
