import "./Events.css"
import { BrowserRouter,Route } from "react-router-dom"
import Youthopia from '../../assets/youthopia.png'

function Events() {
  return (
    <div className="events">
      <img className="youImg" src={Youthopia} alt="Image not foud" />
      <div className="secNavBar">
        <a href="/events">Technical</a>
        <a href="/events/cultural">Cultural</a>
        <a href="/events/informal">Informal</a>
      </div>
      
    </div>
  )
}

export default Events
