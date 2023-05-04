import React, { useEffect, useState } from 'react';
import { GiSoccerBall, GiTrashCan } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import LoadingTimer from '../../components/LoadingTimer/LoadingTimer';
import axios from '../../services/axios';
import './ListMatchs.css';

function ListMatchs() {
  const [matchsInProgress, setMatchsInProgress] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      const matchesAPI = await axios.get('/match/matches');
      const matches = matchesAPI.data.filter(
        (match) => match.finished === false
      );
      setMatchsInProgress(matches);
    };

    getMatches();
  }, []);

  // if (matchsInProgress.length <= 0) {
  //   return <Loading />;
  // }

  return (
    <>
      <Header />
      <div className="listMatch-button">
        <button type="submit">
          <Link to="/criarPartida">Criar nova partida</Link>
        </button>
      </div>

      <div className="listMatchs-main">
        <div className="listMatchs-section">
          <div className="match-configs">
            <h2>CONFRONTO</h2>

            <h2>DURAÇÃO</h2>

            <h2>TEMPOS</h2>

            <h2>AÇÕES</h2>
          </div>
          {matchsInProgress.length <= 0 && <LoadingTimer />}

          {matchsInProgress.map((match) => (
            <div key={match._id} className="match-info">
              <div className="scoreboardTeams">
                <h4>{match.teams.team1}</h4>
                <h4>x</h4>
                <h4>{match.teams.team2}</h4>
              </div>
              <div>
                <h4>{match.duration}</h4>
              </div>
              <div>
                <h4>{match.times}</h4>
              </div>
              <div>
                <button type="submit">
                  <Link to={`/partida/${match._id}`}>
                    Iniciar partida <GiSoccerBall />
                  </Link>
                </button>
                <button type="submit" style={{ backgroundColor: 'red' }}>
                  <Link to="delete">
                    Excluir partida <GiTrashCan />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListMatchs;
