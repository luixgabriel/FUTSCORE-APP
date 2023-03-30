import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Shirt from '../../assets/imgs/camisatime.png';
import './CurrentMatch.css';
import soccerField from '../../assets/imgs/soccerStadium.png';

function CurrentMatch() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Header />
      <div className="currentMatch-main">
        <div className="currentMatch-section">
          <div className="title-teams">
            <h1>VASCO</h1>
            <h1>X</h1>
            <h1>FLUMINENSE</h1>
          </div>
          <div className="scoreboard">
            <h2>Placar:</h2>
            <h2>2</h2>
            <h2>x</h2>
            <h2>3</h2>
          </div>
          <div className="time">
            <h2>Tempo:</h2>
            <h2>30:00</h2>
          </div>
          <div className="team-goals">
            <div className="teamMatch-1">
              <h3>VASCO</h3>
              <table className="players-team">
                <tr>
                  <th>
                    <img src={Shirt} alt="CamisaTime" />
                  </th>
                  <th>jogadores</th>
                </tr>
                <tr>
                  <td>10</td>
                  <td>luis</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>luis</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>luis</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>luis</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>luis</td>
                </tr>
              </table>
            </div>
            <img
              src={soccerField}
              className="soccerfield"
              alt="Campo de futebol"
            />
            <div className="teamMatch-2">
              <h3>FLUMINENSE</h3>
              <span>luis</span>
              <span>messi</span>
              <span>cr7</span>
              <span>modric</span>
              <span>navas</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentMatch;
