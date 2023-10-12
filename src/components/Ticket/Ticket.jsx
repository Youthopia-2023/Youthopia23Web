import React from "react";
import "./Ticket.css";
import textYouth from "../../assets/textYouth.svg";
import BGticket from "../../assets/BGticket.svg";
import youthopiaLogo from "../../assets/youthopiaLogo.svg";
import ditlogowhite from "../../assets/ditlogowhite.svg";
import Line from "../../assets/Line.svg";
import Group from "../../assets/Group.svg";

function Ticket() {
  return (
    <div className="container">
      <div className="image">
        <img src={BGticket} className="rec" alt="" />
      </div>

      <div className="Logos">
        <img src={youthopiaLogo} />
        <img src={ditlogowhite} />
      </div>

      <div>
        <p className="Ticket">Ticket Details</p>
      </div>
      <div className="Details">
        <p>Ticket Name-</p>
        <p>Event Venue-</p>
        <p>Event Time-</p>
        <p>Ticket No-</p>
      </div>
      <div >
        <img src={textYouth} className="Textyouth" />
      </div>
      <div>
        <img src={Line}  className="Line"/>
      </div>
      <div>
        <img src={Group} className="group"/>
      </div>
    </div>
  );
}
export default Ticket;
