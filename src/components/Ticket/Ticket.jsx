import React from "react";
import "./Ticket.css";
import textYouth from "../../assets/youthopia.png";
import BGticket from "../../assets/BGticket.svg";
import youthopiaLogo from "../../assets/youthopiaLogo.svg";
import ditlogowhite from "../../assets/ditlogowhite.svg";


function Ticket() {
  return (
    <div className="Ticket-container">
      
        <img src={BGticket} className="rec" alt="" />
    
      <div className="Logos">
        <img src={youthopiaLogo} />
        <img src={ditlogowhite} />
      </div>

      <div className="elements">

        <div className="image1">
        <img src={textYouth} className="Textyouth"/>
        </div>

        <div className="Ticket-details">
         <p className="head">Ticket Details</p>
         <p>Ticket Name-</p>
         <p>Event Venue-</p>
         <p>Event Date-</p>
         <p>Event Time-</p>
         <p>Ticket No:</p>
        </div>
        
      </div>
    </div>
  );
}
export default Ticket;
