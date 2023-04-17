import React from 'react';
import Ball from '../../assets/imgs/bola.png';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-screen">
      <img src={Ball} alt="Bola" />
      <h2>Carregando...</h2>
    </div>
  );
}

export default Loading;
