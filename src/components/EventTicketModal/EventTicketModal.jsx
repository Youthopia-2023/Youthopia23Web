// EventTicketModal.js
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaDownload } from "react-icons/fa";
import "./EventTicketModal.css";
import axios from "axios";
import { baseUrl } from "../../url";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const [eventname, setEventname] = useState([]);
  const userData = useSelector((state) => state);
  const navigate = useNavigate();

  const fetchdata = async () => {
    axios
      .get(`${baseUrl}/user/getregisteruser`, {
        headers: { Authorization: `Bearer ${userData.token}` },
      })
      .then(function (response) {
        setEventname([]);
        console.log(response.data.details);
        // setEventbyid(response.data.details);
        for (var i = 0; i < response.data.details.length; i++) {
          // setEventId(eventbyid[i].event_id);
          axios
            .post(`${baseUrl}/event/geteventdetailsbyid`, {
              id: response.data.details[i].event_id,
            })
            .then(function (response) {
              // console.log(response);
              if (response.data.details[0]) {
                let data = eventname;
                data.push(response?.data?.details[0]);
                setEventname(data);
              }

              // console.log(response.data.details[0].event_name);
              // console.log(eventname);
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
      <div style={{ overflow: "scroll", maxHeight: "80vh" }}>
        <h2>Your Event Tickets: </h2>
        <ul>
          {eventname?.map((event, index) => (
            <li key={index}>
              {event?.event_name}
              <button
                className="download"
                onClick={() =>
                  navigate("/ticket", {
                    state: {
                      ev: `${event.event_id}`,
                      us: {
                        name: event.event_name,
                        venue: event.venue,
                        date: event.date,
                        start_time: event.start_time,
                      },
                    },
                  })
                }
              >
                <span className="download-icon">
                  <FaDownload />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="close" onClick={closeModal}>
        Close
      </button>
    </Modal>
  );
};

export default EventTicketModal;
