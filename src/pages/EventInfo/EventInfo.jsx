import React from 'react'
import IndividualEvent from "../../components/IndividualEvents/IndividualEvent"
import data from "../../components/IndividualEvents/IndividualEventData"
import Navbar from "../../components/Navbar/Navbar"


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
      <Navbar />
      {entries}
    </div>
  )
}

export default EventInfo
