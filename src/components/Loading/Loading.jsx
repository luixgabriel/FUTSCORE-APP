import React from 'react';
import Ball from '../../assets/imgs/bola.png';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-screen">
      <img src={Ball} alt="Bola" />
    </div>
  );
}

export default Loading;
