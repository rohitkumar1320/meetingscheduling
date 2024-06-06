
import Popup from '../popup/Popup';
import React, { useState } from 'react';
import "./Home.css"

const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    return (
      <div className='relative'>
        <h1>Welcome to Meeting Scheduling</h1>
        <button onClick={openPopup} className=' ml-48'>Open Popup</button>
        {isPopupOpen && <Popup onClose={closePopup} />}
      </div>
    );
  };

  export default Home;