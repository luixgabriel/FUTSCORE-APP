import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Team.css';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const response = await fetch(
        'https://apiintersala-production.up.railway.app/'
      );
      const teamsAPI = await response.json();
      setTeams(teamsAPI);
    };

    getTeams();
  }, []);

  console.log(teams);
  return (
    <>
      <Header />
      <div className="players-main">
        <div className="section-players">
          <h1>Times Cadastrados:</h1>
        </div>
      </div>
    </>
  );
}

export default Teams;
