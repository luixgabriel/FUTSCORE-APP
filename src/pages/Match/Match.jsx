import React from 'react';
import Header from '../../components/Header/Header';
import './Match.css';
import soccerField from '../../assets/imgs/soccerStadium.png';
import shirtTeam from '../../assets/imgs/shirtTeam.png';

function Match() {
  return (
    <>
      <Header />
      <div className="match-main">
        <div className="section-match">
          <img src={soccerField} alt={soccerField} />
          <div className="match-stats">
            <div className="team-1">
              <img src={shirtTeam} alt={shirtTeam} />
              <h2>Time 1</h2>
              <select>
                <option>Vasco</option>
                <option>Vasco</option>
                <option>Vasco</option>
                <option>Vasco</option>
              </select>
            </div>

            <div className="team-2">
              <img src={shirtTeam} alt={shirtTeam} />
              <h2>Time 2</h2>
              <select>
                <option>Vasco</option>
                <option>Vasco</option>
                <option>Vasco</option>
                <option>Vasco</option>
              </select>
            </div>
          </div>
          <h1>hello world</h1>
        </div>
      </div>
    </>
  );
}

export default Match;
