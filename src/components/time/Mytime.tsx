import React, { useState } from 'react';
import "./Mytime.css"

interface TimeSchedulerProps {
  selectedDate: Date;
}

const Mytime: React.FC<TimeSchedulerProps> = ({ selectedDate }) => {
  const [time, setTime] = useState('');

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleSchedule = () => {
    alert(`Scheduled ${selectedDate.toDateString()} at ${time}`);
  };

  return (
    <div className="time-scheduler">
      <h3>Schedule Time for {selectedDate.toDateString()}</h3>
      <input type="time" value={time} onChange={handleTimeChange} />
      <button onClick={handleSchedule}>Schedule</button>
    </div>
  );
};

export default Mytime;

