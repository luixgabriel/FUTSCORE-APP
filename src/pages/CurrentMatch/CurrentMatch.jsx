/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import LineUp from '../../components/LineUp/LineUp';
import Loading from '../../components/Loading/Loading';

const MySwal = withReactContent(Swal);

function CurrentMatch() {
  const { id } = useParams();
  const [match, setMatch] = useState('');
  const [teams, setTeams] = useState('');
  const [durationGame, setDurationGame] = useState(0);
  const [secondHalf, setSecondHalf] = useState(false);
  const [modalOpenTeam1, setModalOpenTeam1] = useState(false);
  const [modalOpenTeam2, setModalOpenTeam2] = useState(false);
  const [goalT1, setGoalT1] = useState(0);
  const [goalT2, setGoalT2] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [finishingMatch, setFinishingMatch] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getMatch = async () => {
      const response = await axios.get(`match/searchmatch/${id}`);
      setMatch(response.data);
      setTeams(response.data.teams);
      setDurationGame(response.data.duration * 60);
      setGoalT1(response.data.scoreboard.team1Goals);
      setGoalT2(response.data.scoreboard.team2Goals);
    };
    getMatch();
  }, []);

  const modalClose = (e) => {
    e.preventDefault();
    setModalOpenTeam1(false);
    setModalOpenTeam2(false);
  };

  const startingMatch = () => {
    setStartTimer(!startTimer);
    if (match.times > 1) {
      setSecondHalf(true);
    } else {
      setFinishingMatch(true);
    }
  };

  const handleTimeUp = () => {
    setStartTimer(!startTimer);
  };

  const startingSecondHalf = () => {
    setStartTimer(!startTimer);
    setSecondHalf(false);
    setFinishingMatch(true);
  };

  const finishMatch = async () => {
    let winner;
    let defeated;
    let draw = false;

    if (goalT1 > goalT2) {
      setLoading(true);
      winner = match.teams.team1;
      defeated = match.teams.team2;

      const response = await axios.put(`match/result/${match._id}`, {
        winner,
        defeated,
      });
      await axios.put('update', {
        winner,
        defeated,
      });
      navigate('/partidas');
    } else if (goalT1 === goalT2) {
      setLoading(true);
      draw = true;
      winner = match.teams.team1;
      defeated = match.teams.team2;

      const response = await axios.put(`match/result/${match._id}`, {
        winner,
        defeated,
        draw,
      });

      await axios.put('update', {
        draw: true,
        winner,
        defeated,
      });
      navigate('/partidas');
    } else {
      setLoading(true);
      winner = match.teams.team2;
      defeated = match.teams.team1;

      const response = await axios.put(`match/result/${match._id}`, {
        winner,
        defeated,
      });
      await axios.put('update', {
        winner,
        defeated,
      });
      navigate('/partidas');
    }
  };

  return (
    <>
      <Header />
      {loading && <Loading />}
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
                <Timer duration={durationGame} onTimeUp={handleTimeUp} />
              ) : (
                <Loading />
              )}
            </div>
          ) : (
            <div className="btnStart">
              {finishingMatch === true ? (
                <button type="submit" onClick={finishMatch}>
                  Finalizar Partida
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={
                    secondHalf === true ? startingSecondHalf : startingMatch
                  }
                >
                  {secondHalf === true
                    ? 'Iniciar Segundo Tempo'
                    : 'Iniciar Partida'}
                </button>
              )}
            </div>
          )}
          <div className="team-goals">
            <div className="teamMatch-1">
              <ModalGoal
                id={match._id}
                team={teams.team1}
                isOpen={modalOpenTeam1}
                onClose={modalClose}
              />
              <button
                type="submit"
                onClick={() => {
                  setModalOpenTeam1(!modalOpenTeam1);
                  setGoalT1(goalT1 + 1);
                }}
              >
                Gol do {teams.team1} <GiSoccerBall />
              </button>
              <h3>{teams.team1}</h3>
              {teams ? <LineUp team={teams.team1} /> : <Loading />}
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
              />
              <button
                type="submit"
                onClick={() => {
                  setModalOpenTeam2(!modalOpenTeam2);
                  setGoalT2(goalT2 + 1);
                }}
              >
                Gol do {teams.team2} <GiSoccerBall />
              </button>
              <h3>{teams.team2}</h3>
              {teams ? <LineUp team={teams.team2} /> : <Loading />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentMatch;
