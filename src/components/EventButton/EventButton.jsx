// App.js
import React, { useState } from 'react';
import EventTicketModal from '../EventTicketModal/EventTicketModal';
import "./EventButton.css";

const Button = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const events = [
    { sno: '1. ' , name: 'Event Name', ticketURL: 'https://example.com/ticket1.pdf' },
    { sno: '2. ' , name: 'Event Name', ticketURL: 'https://example.com/ticket2.pdf' },
    { sno: '3. ' , name: 'Event Name', ticketURL: 'https://example.com/ticket2.pdf' }

  ];

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Your Events</button>
      <EventTicketModal
        isOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        events={events}
      />
    </div>
  );
};

export default Button;
