import "./Events.css"



import Youthopia from '../../assets/youthopia.png'

import Card from "./card/Card"

function Events() {

  return (
    <div className="events">
      <img className="youImg" src={Youthopia} alt="Image not foud" />
      <div className="secNavBar">
        <a href="/events">Technical</a>
        <a href="/events/cultural">Cultural</a>
        <a href="/events/informal">Informal</a>
      </div>
      <div className="card-Container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Events
