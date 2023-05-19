import React, { useState, useEffect } from 'react';
import axios from '../../services/axios';
import './Tables.css';
import Header from '../../components/Header/Header';
import LoadingTimer from '../../components/LoadingTimer/LoadingTimer';

function Tables() {
  const [teams, setTeams] = useState([]);
  const [scorersTable, setScorersTable] = useState([]);
  const [assistsTable, setAssistsTable] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const teamsAPI = await axios.get();
      setTeams(teamsAPI.data);
    };
    const getPlayers = async () => {
      const response = await axios.get('/player/showPlayers');
      setScorersTable(response.data.sort((a, b) => b.goals - a.goals));
      setAssistsTable(response.data.sort((a, b) => b.assists - a.assists));
    };

    getTeams();
    getPlayers();
  }, []);

  if (teams) {
    teams.sort((a, b) => b.wins - a.wins);
  }

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
                  <tr key={t._id}>
                    <td>{t.name}</td>
                    <td>{t.wins + t.defeats + t.draws}</td>
                    <td>{t.wins}</td>
                    <td>{t.defeats}</td>
                    <td>{t.draws}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {teams.length <= 0 && <LoadingTimer />}
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
                  {scorersTable.map((s) => (
                    <tr key={s._id}>
                      <td>{s.name}</td>
                      <td>{s.goals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {scorersTable.length <= 0 && <LoadingTimer />}
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
                  {assistsTable.map((a) => (
                    <tr key={a._id}>
                      <td>{a.name}</td>
                      <td>{a.assists}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {assistsTable.length <= 0 && <LoadingTimer />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tables;
