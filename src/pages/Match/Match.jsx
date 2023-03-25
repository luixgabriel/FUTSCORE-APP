import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Match.css';
import soccerField from '../../assets/imgs/soccerStadium.png';
import shirtTeam from '../../assets/imgs/shirtTeam.png';

function Match() {
  const [duration, setDuration] = useState(0);
  const [checkedboxes, setCheckedboxes] = useState([]);

  const handleChange = async (e) => {
    const { value } = e.target;
    const { checked } = e.target;
    if (checked) {
      setCheckedboxes([...checkedboxes, value]);
    }
  };
  return (
    <>
      <Header />
      <div className="match-main">
        <div className="section-match">
          <img src={soccerField} alt={soccerField} className="soccerField" />
          <div className="match-stats">
            <div className="team-1">
              <img src={shirtTeam} alt={shirtTeam} />
              <h2>TIME 1</h2>
              <select>
                <option>Vasco</option>
                <option>Vasco</option>
                <option>Vasco</option>
                <option>Vasco</option>
              </select>
            </div>

            <div className="match-options">
              <div className="duration">
                <h2>Duração</h2>
                <input
                  type="checkbox"
                  name="10"
                  value="10"
                  onChange={handleChange}
                />
                10min
                <br />
                <input
                  type="checkbox"
                  name="10"
                  value="15"
                  onChange={handleChange}
                />
                15min
                <br />
                <input
                  type="checkbox"
                  name="10"
                  value="30"
                  onChange={handleChange}
                />
                30min
                <br />
                <input
                  type="checkbox"
                  name="10"
                  value="45"
                  onChange={handleChange}
                />
                45min
                <br />
              </div>
            </div>

            <div className="team-2">
              <img src={shirtTeam} alt={shirtTeam} />
              <h2>TIME 2</h2>
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
