/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Match.css';
import soccerField from '../../assets/imgs/soccerStadium.png';
import shirtTeam from '../../assets/imgs/shirtTeam.png';
import axios from '../../services/axios';

const MySwal = withReactContent(Swal);
function Match() {
  const [duration, setDuration] = useState(0);
  const [times, setTimes] = useState(0);
  const [checkedboxes, setCheckedboxes] = useState([]);
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [teams, setTeams] = useState([]);
  const [match, setMatch] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getTeams = async () => {
      const teamsAPI = await axios.get();
      setTeams(teamsAPI.data);
    };

    getTeams();
  }, []);

  const checkboxChange = async (e) => {
    const { value } = e.target;
    const { checked } = e.target;

    if (checked) {
      setCheckedboxes([...checkedboxes, value]);
    }

    if (checkedboxes.length > 0) {
      MySwal.fire({
        title: <p>Ooops..</p>,
        text: 'Só é permitido uma checkbox de duração selecionada.',
        icon: 'error',
        timer: 2000,
        confirmButtonText: 'Vamos tentar novamente.',
      });
      setCheckedboxes([]);
      setTimeout(() => {
        window.location.reload();
      }, '1500');
    }
    setDuration(value);
  };

  const createMatch = async () => {
    if (
      team1 === '' ||
      team2 === '' ||
      duration === '' ||
      times === '' ||
      times === 0
    ) {
      MySwal.fire({
        title: <p>Ooops..</p>,
        text: 'Preencha todas as informações da partida.',
        icon: 'error',
        timer: 2000,
        confirmButtonText: 'Vamos tentar novamente.',
      });
      return;
    }
    const teamsCreate = [team1, team2];
    const { data } = await axios.post('match/', {
      name: teamsCreate,
      duration,
      times,
    });
    setMatch(data);
    navigate('/partidas');
  };

  return (
    <>
      <Header />
      <div className="match-main">
        <div className="section-match">
          <img src={soccerField} alt={soccerField} className="soccerField" />
          <div className="match-stats">
            <div className="team-1">
              <img src={shirtTeam} alt={shirtTeam} />
              <h2>TIME 1</h2>
              <select onChange={(e) => setTeam1(e.target.value)}>
                <option />
                {teams.map((team) => (
                  <option key={team._id} value={team.name}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="match-options">
              <div className="duration">
                <h2>Duração</h2>
                <input
                  type="checkbox"
                  name="1"
                  value="1"
                  onChange={checkboxChange}
                />
                1min
                <input
                  type="checkbox"
                  name="10"
                  value="10"
                  onChange={checkboxChange}
                />
                10min
                <br />
                <input
                  type="checkbox"
                  name="10"
                  value="15"
                  onChange={checkboxChange}
                />
                15min
                <br />
                <input
                  type="checkbox"
                  name="10"
                  value="30"
                  onChange={checkboxChange}
                />
                30min
                <br />
                <input
                  type="checkbox"
                  name="10"
                  value="45"
                  onChange={checkboxChange}
                />
                45min
                <br />
              </div>
              <div className="times">
                <h2>Tempos</h2>
                <input
                  type="number"
                  value={times}
                  onChange={(e) => setTimes(e.target.value)}
                />
              </div>
            </div>

            <div className="team-2">
              <img src={shirtTeam} alt={shirtTeam} />
              <h2>TIME 2</h2>
              <select
                onChange={(e) => {
                  setTeam2(e.target.value);
                }}
              >
                <option />
                {teams.map((team) => (
                  <option key={team._id} value={team.name}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" onClick={createMatch}>
            Criar partida
          </button>
        </div>
      </div>
    </>
  );
}

export default Match;
