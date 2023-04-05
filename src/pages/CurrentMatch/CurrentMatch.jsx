/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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

const MySwal = withReactContent(Swal);

function CurrentMatch() {
  const { id } = useParams();
  const [players, setPlayers] = useState('');
  const [match, setMatch] = useState('');
  const [teams, setTeams] = useState('');
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [scoreboard, setScoreboard] = useState({});
  const [modalOpenTeam1, setModalOpenTeam1] = useState(false);
  const [modalOpenTeam2, setModalOpenTeam2] = useState(false);

  useEffect(() => {
    const getMatch = async () => {
      const response = await axios.get(`match/searchmatch/${id}`);
      setMatch(response.data);
      setTeams(response.data.teams);
      setScoreboard(response.data.scoreboard);
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

  const goalTeam1 = async () => {
    setModalOpenTeam1(!modalOpenTeam1);
  };

  const goalTeam2 = async () => {
    setModalOpenTeam2(!modalOpenTeam2);
  };

  const modalClose = () => {
    setModalOpenTeam1(false);
    setModalOpenTeam2(false);
  };

  return (
    <>
      <Header />
      <div className="currentMatch-main">
        <div className="currentMatch-section">
          <div className="title-teams">
            <h1>{teams.team1}</h1>
            <h1>x</h1>
            <h1>{teams.team2}</h1>
          </div>

          <div className="scoreboard">
            <h2>Placar:</h2>
            <h2>{scoreboard.team1Goals}</h2>
            <h2>x</h2>
            <h2>{scoreboard.team2Goals}</h2>
          </div>
          <div className="time">
            <h2>Tempo:</h2>
            <h2>{match.duration}</h2>
          </div>

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
