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
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const getTeams = async () => {
      const teamsAPI = await axios.get();
      setTeams(teamsAPI.data);
    };

    getTeams();
  }, []);

  const handleTimeClick = (id) => {
    setSelectedTeam(id);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const response = await axios.delete(`delete/${id}`);
    console.log(response);
  };

  const closeModal = () => {
    setSelectedTeam(null);
  };

  return (
    <>
      <Header />
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
                  <Link to="/times">
                    <FaEdit />
                  </Link>
                  <Link
                    to="/times"
                    type="submit"
                    onClick={() => {
                      handleDelete(t._id);
                    }}
                  >
                    <FaWindowClose />
                  </Link>
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    handleTimeClick(t._id);
                  }}
                >
                  Mais informações
                </button>
              </div>
            ))}
            {selectedTeam && (
              <ModalTeam isOpen id={selectedTeam} isClosed={closeModal} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
