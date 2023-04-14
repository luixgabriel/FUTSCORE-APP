/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Header from '../../components/Header/Header';
import axios from '../../services/axios';
import Shirt from '../../assets/imgs/camisatime.png';
import './CurrentMatch.css';
import soccerField from '../../assets/imgs/soccerStadium.png';
import ModalGoal from '../../components/ModalGoal/ModalGoal';
import Timer from '../../components/Timer/Timer';

const MySwal = withReactContent(Swal);

function CurrentMatch() {
  const { id } = useParams();
  const [players, setPlayers] = useState('');
  const [match, setMatch] = useState('');
  const [teams, setTeams] = useState('');
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [durationGame, setDurationGame] = useState(0);
  const [matchTime, setMatchTime] = useState(0);
  const [modalOpenTeam1, setModalOpenTeam1] = useState(false);
  const [modalOpenTeam2, setModalOpenTeam2] = useState(false);
  const [goalT1, setGoalT1] = useState(0);
  const [goalT2, setGoalT2] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    const getMatch = async () => {
      const response = await axios.get(`match/searchmatch/${id}`);
      setMatch(response.data);
      setTeams(response.data.teams);
      setDurationGame(response.data.duration * 60);
      setMatchTime(response.data.times);
      setGoalT1(response.data.scoreboard.team1Goals);
      setGoalT2(response.data.scoreboard.team2Goals);
    };
    getMatch();
  }, []);

  useEffect(() => {
    const getPlayers = async () => {
      const response = await axios.get('/player/showPlayers');
      setPlayers(response.data);
      if (players) {
        setTeam1Players(players.filter((p) => p.team === teams.team1));
        setTeam2Players(players.filter((p) => p.team === teams.team2));
      }
    };

    getPlayers();
  }, [match]);

  console.log(matchTime);

  const goalTeam1 = async () => {
    setModalOpenTeam1(!modalOpenTeam1);
    setGoalT1(goalT1 + 1);
  };

  const goalTeam2 = async () => {
    setModalOpenTeam2(!modalOpenTeam2);
    setGoalT2(goalT2 + 1);
  };

  const modalClose = (e) => {
    e.preventDefault();
    setModalOpenTeam1(false);
    setModalOpenTeam2(false);
  };

  const startingMatch = () => {
    setStartTimer(!startTimer);
  };

  return (
    <>
      <Header />

      <div className="currentMatch-main">
        <div className="currentMatch-section">
          <div className="title-teams">
            <h1>{teams.team1}</h1>
            <div className="x">
              <h2>x</h2>
            </div>
            <h1>{teams.team2}</h1>
          </div>
          <div className="scoreboard">
            <h2>Placar:</h2>
            <h3>{goalT1}</h3>
            <h2>x</h2>
            <h3>{goalT2}</h3>
          </div>
          {startTimer === true ? (
            <div className="time">
              {durationGame > 0 ? (
                <Timer duration={durationGame} matchTime={matchTime} />
              ) : (
                <p>CARREGANDO</p>
              )}
            </div>
          ) : (
            <div className="btnStart">
              <button type="submit" onClick={startingMatch}>
                Iniciar partida
              </button>
            </div>
          )}
          <div className="team-goals">
            <div className="teamMatch-1">
              <ModalGoal
                id={match._id}
                team={teams.team1}
                isOpen={modalOpenTeam1}
                onClose={modalClose}
                players={team1Players}
              />
              <button type="submit" onClick={goalTeam1}>
                Gol do {teams.team1} <GiSoccerBall />
              </button>
              <h3>{teams.team1}</h3>
              <table className="players-team">
                <thead>
                  <tr>
                    <th>
                      <img src={Shirt} alt="CamisaTime" />
                    </th>
                    <th>jogadores</th>
                  </tr>
                </thead>
                <tbody>
                  {team1Players.map((t1Player) => (
                    <tr key={t1Player._id}>
                      <td>{t1Player.numberTshirt}</td>
                      <td>{t1Player.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <img
              src={soccerField}
              className="soccerfield"
              alt="Campo de futebol"
            />
            <div className="teamMatch-2">
              <ModalGoal
                id={match._id}
                team={teams.team2}
                isOpen={modalOpenTeam2}
                onClose={modalClose}
                players={team2Players}
              />
              <button type="submit" onClick={goalTeam2}>
                Gol do {teams.team2} <GiSoccerBall />
              </button>
              <h3>{teams.team2}</h3>
              <table className="players-team">
                <thead>
                  <tr>
                    <th>
                      <img src={Shirt} alt="CamisaTime" />
                    </th>
                    <th>jogadores</th>
                  </tr>
                </thead>
                <tbody>
                  {team2Players.map((t2Player) => (
                    <tr key={t2Player._id}>
                      <td>{t2Player.numberTshirt}</td>
                      <td>{t2Player.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentMatch;
