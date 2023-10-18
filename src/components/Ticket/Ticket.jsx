import "./Ticket.css";
import textYouth from "../../assets/youthopia.png";
import BGticket from "../../assets/BGticket.svg";
import youthopiaLogo from "../../assets/youthopiaLogo.svg";
import ditlogowhite from "../../assets/ditlogowhite.svg";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";


function Ticket() {
  let props = useLocation();
  const userData = useSelector((state) => state);
  const navigate = useNavigate()

  const getPdf = () => {
    const domElement = document.querySelector(".Ticket-container");
    html2canvas(domElement).then((canvas) => {
      const img = canvas.toDataURL("image/jpeg");
      downloadURI(img, `ticket_${props.state.ev}`);
    });
  };

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    navigate("/")
  }

  useLayoutEffect(() => {
    getPdf();
  }, []);
  console.log(props);
  return (
    <div className="Ticket-container">

      <img src={BGticket} className="rec" alt="" />

      <div className="Logos">
        <img src={youthopiaLogo} />
        <img src={ditlogowhite} />
      </div>

      <div className="elements">

        <div className="image1">
          <img src={textYouth} className="Textyouth" />
        </div>

        <div className="Ticket-details">
          <p className="head">Ticket Details</p>
          <p>Event Name- {props.state.us.name}</p>
          <p>Event Venue- {props.state.us.venue}</p>
          <p>Event Date- {props.state.us.date}</p>
          <p>Event Time- {props.state.us.start_time}</p>
          <p>Ticket No: {`${props.state.ev}-${userData.phonenumber}`}</p>
        </div>

      </div>
    </div>
  );
}
export default Ticket;
