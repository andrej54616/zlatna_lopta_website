import React from 'react';
import Navigation from './Navigation'; 
import logo from '../images/Logo_Zlatna_Lopta-01.png'
import './css/Cover.css'; 

const Cover = () => {
  return (
    <div className="cover-container">
      <Navigation /> 
      <div className="cover-content">
      <img src={logo} alt="Zlatna Lopta Logo" className="cover-logo" />
      <p className='header-text'>Balon za Fudbal</p>
        <h1>Zlatna Lopta</h1>
        <p className='cover-text'>Provedite zlatne trenutke i uzmite jedan sportski predah od užurbane svakodnevnice.
        <br/> Vaš termin za mali fudbal možete zakazati putem broja telefona +381 63 37 96 96</p>
      </div>
    </div>
  );
};

export default Cover;