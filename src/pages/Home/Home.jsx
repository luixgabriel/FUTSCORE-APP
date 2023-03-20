import React from 'react';
import homeImg from '../../assets/imgs/voleio.png';
import './Home.css';

function Home() {
  return (
    <div className="main">
      <div className="homepage">
        <img src={homeImg} alt="voleio" />
        <h1>INTERSALAS</h1>
      </div>
    </div>
  );
}

export default Home;
