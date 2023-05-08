import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import noShield from '../../assets/imgs/no-shield.png';
import LoadingTimer from '../../components/LoadingTimer/LoadingTimer';
import Loading from '../../components/Loading/Loading';
import ModalTeam from '../../components/ModalTeam/ModalTeam';
import './Team.css';
import axios from '../../services/axios';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleDelete = async (e, id, index) => {
    e.persist();
    if (window.confirm('Tem certeza que deseja deletar esse time?')) {
      setLoading(true);
      await axios.delete(`delete/${id}`);
      const newTeams = [...teams];
      newTeams.splice(index, 1);
      setTeams(newTeams);
      setLoading(false);
      toast.success('Time deletado com sucesso!');
    }
  };

  const closeModal = () => {
    setSelectedTeam(null);
  };

  return (
    <>
      <Header />
      <ToastContainer />
      {loading && <Loading />}
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
            {teams.map((t, index) => (
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
                    onClick={(e) => {
                      handleDelete(e, t._id, index);
                    }}
                  >
                    <FaWindowClose />
                  </Link>
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    handleTimeClick(t.id);
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
