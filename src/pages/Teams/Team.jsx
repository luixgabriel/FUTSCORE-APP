import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
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
          <div className="titles">
            <h1>Times cadastrados:</h1>
            <button type="submit">
              <span>Adicionar novo time</span>
              <i />
            </button>
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
