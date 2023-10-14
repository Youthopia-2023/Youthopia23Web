// EventTicketModal.js
// import React, { useState } from "react";
import Modal from "react-modal";
import { FaDownload } from "react-icons/fa";
import "./EventTicketModal.css";

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
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Event Ticket Modal"
    >
      <h2>Your Event Tickets: </h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.sno}
            {event.name}
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
