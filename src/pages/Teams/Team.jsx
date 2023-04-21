import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import noShield from '../../assets/imgs/no-shield.png';
import LoadingTimer from '../../components/LoadingTimer/LoadingTimer';
import ModalTeam from '../../components/ModalTeam/ModalTeam';
import './Team.css';
import axios from '../../services/axios';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const teamsAPI = await axios.get();
      setTeams(teamsAPI.data);
    };

    getTeams();
  }, []);

  console.log(teams);

  return (
    <>
      <Header />
      <ModalTeam />
      <div className="players-main">
        <div className="section-players">
          <div className="titles">
            <h1>Times cadastrados:</h1>
            <Link to="/registrarTime">
              <button type="submit">
                <span>Adicionar um novo time</span>
              </button>
            </Link>
          </div>

          <div className="teams">
            {teams.length <= 0 && <LoadingTimer />}
            {teams.map((t) => (
              <div className="list-teams" key={t._id}>
                <img
                  src={t.shield === 'null' ? noShield : t.shield}
                  alt="EscudoTime"
                />
                <h2>{t.name}</h2>
                <span>{t.slogan}</span>
                <div className="team-buttons">
                  <Link to="/">
                    <FaEdit />
                  </Link>
                  <Link to="/">
                    <FaWindowClose />
                  </Link>
                </div>
                <button type="submit">Mais informações</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
