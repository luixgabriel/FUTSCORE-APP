/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Header from '../../components/Header/Header';
import ModalGoal from '../../components/ModalGoal/ModalGoal';
import axios from '../../services/axios';
import Shirt from '../../assets/imgs/camisatime.png';
import './CurrentMatch.css';
import soccerField from '../../assets/imgs/soccerStadium.png';

const MySwal = withReactContent(Swal);

function CurrentMatch() {
  const { id } = useParams();
  const [players, setPlayers] = useState('');
  const [match, setMatch] = useState('');
  const [team1, setTeam1] = useState('');

  console.log(id);

  useEffect(() => {
    const getMatch = async () => {
      const response = await axios.get(`match/searchmatch/${id}`);
      setMatch(response.data);
      setTeam1(response.data.teams.team1);
    };
    getMatch();
  }, []);

  // useEffect(() => {
  //   const getPlayers = async () => {
  //     const response = await axios.get('/player/showPlayers');
  //     setPlayers(response.data);
  //     const playersTeam1 = players.filter(
  //       (player) => player.team === match.teams.team1
  //     );
  //   };

  //   getPlayers();
  // }, [match]);

  // const { team1 } = match.teams;

  const goalTeam1 = async () => {};

  return (
    <>
      <Header />
      <div className="currentMatch-main">
        <div className="currentMatch-section">
          <div className="title-teams">
            <p>{match._id}</p>

            <h1>{team1}</h1>
            <h1>X</h1>
            <h1>vasco</h1>
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
              <button type="submit" onClick={goalTeam1}>
                Gol do vasco <GiSoccerBall />
              </button>
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
              <button type="submit">
                Gol do vasco <GiSoccerBall />
              </button>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentMatch;
