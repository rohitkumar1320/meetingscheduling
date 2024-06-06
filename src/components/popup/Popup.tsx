import React, { useState } from 'react';
import Calendar from '../calender/Calender';
import Mytime from '../time/Mytime';
import './Popup.css'

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="m-[5px] w-104 h-vh">
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Calendar</h2>
          <p>Select your flexable date and time</p>
          <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          {selectedDate && <Mytime selectedDate={selectedDate} />}
        </div>
      </div>
    </div>
  );
};

export default Popup;
