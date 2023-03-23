import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import noShield from '../../assets/imgs/no-shield.png';
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

  return (
    <>
      <Header />
      <div className="players-main">
        <div className="section-players">
          <div className="titles">
            <h1>Times cadastrados:</h1>
            <Link to="/registrarTime">
              <button type="submit">
                <span>ADICIONAR UM NOVO TIME</span>
                <svg
                  viewBox="-5 -5 110 110"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="teams">
            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
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

            <div className="list-teams">
              <img src={noShield} alt="vasco" />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
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

            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
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

            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
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

            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
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

            <div className="list-teams">
              <img
                src="https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-0.png"
                alt="vasco"
              />
              <h2>VASCO</h2>
              <span>Gigante da colina</span>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
