import React from 'react'
import IndividualEvent from "../../components/IndividualEvents/IndividualEvent"
import data from "../../components/IndividualEvents/IndividualEventData"


const EventInfo = () => {
    const entries = data.map(entry => {
        return(
          <IndividualEvent 
             key = {entry.id}
             {...entry}
          
          />
        )
      }) 
    
  return (
    <div className='eventinfo'>
      {entries}
    </div>
  )
}

export default EventInfo
