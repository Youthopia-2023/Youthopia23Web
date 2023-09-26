import "./Events.css"
import IndividualEvent from "../../components/IndividualEvents/IndividualEvent"
import data from "../../components/IndividualEvents/IndividualEventData"


function Events() {
  const entries = data.map(entry => {
    return(
      <IndividualEvent 
         key = {entry.id}
         {...entry}
      
      />
    )
  }) 

  return (
    <div>
      {entries}
    </div>
  )
}

export default Events
