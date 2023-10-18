// EventTicketModal.js
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaDownload } from "react-icons/fa";
import "./EventTicketModal.css";
import axios from "axios";
import { baseUrl } from "../../url";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EventTicketModal = ({ isOpen, closeModal, events }) => {
  const [eventname, setEventname] = useState();
  const userData = useSelector((state) => state);
  const [id, setId] = useState([]);

  const fetchdata = async () => {
    axios
      .get(`${baseUrl}/user/getregisteruser`, {
        headers: { Authorization: `Bearer ${userData.token}` },
      })
      .then(function (response) {
        console.log(response.data.details);
        // setEventbyid(response.data.details);
            for (var i = 0; i < response.data.details.length; i++) {
              // setEventId(eventbyid[i].event_id);
              axios
                .post(`${baseUrl}/event/geteventdetailsbyid`, {
                  id: response.data.details[i].event_id,
                })
                .then(function (response) {
                  console.log(response);
                  setEventname(response);
                

                  // console.log(response.data.details[0].event_name);
               
                })
                .catch(function (error) {
                  console.log(error);
                  // alert("error occured");
                });
            }
      })
      .catch(function (error) {
        console.log(error);
        // alert("error occured");
      });

    //eslint-disable-line
  };
  useEffect(() => {
    fetchdata();

  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Event Ticket Modal"
    >
      <h2>Your Event Tickets: </h2>
      <ul>
        {eventname?.data.details.map((event, index) => (
          <li key={index}>
            
            {event.event_name}
            <button
              className="download"
              onClick={() => window.open(event.ticketURL)}
            >
              <span className="download-icon">
                <FaDownload />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <button className="close" onClick={closeModal}>
        Close
      </button>
    </Modal>
  );
};

export default EventTicketModal;
