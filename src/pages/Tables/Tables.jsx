import React, { useState, useEffect } from 'react';
import axios from '../../services/axios';
import './Tables.css';
import Header from '../../components/Header/Header';

function Tables() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const teamsAPI = await axios.get();
      setTeams(teamsAPI.data);
    };
    const getPlayers = async () => {
      const response = await axios.get('/player/showPlayers');
      setPlayers(response.data);
    };

    getTeams();
    getPlayers();
  }, []);

  console.log(players);
  console.log(teams);

  return (
    <>
      <Header />
      <div className="table-stats">
        <div className="stats">
          <div className="championship">
            <h3>Campeonato</h3>
            <table className="players-team">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Partidas</th>
                  <th>Vitórias</th>
                  <th>Derrotas</th>
                  <th>Empates</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((t) => (
                  <tr>
                    <td>{t.name}</td>
                    <td>{t.wins + t.defeats + t.draws}</td>
                    <td>{t.wins}</td>
                    <td>{t.defeats}</td>
                    <td>{t.draws}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="players-table">
            <div className="goals">
              <h3>Maior Goleador</h3>
              <table className="strikers">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Gols</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>luis</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="assists">
              <h3>Maior Assistente</h3>
              <table className="table-assists">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Assistências</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>luis</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tables;
