/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './ModalGoal.css';
import PropTypes from 'prop-types';
import Goal from '../../assets/imgs/goal.png';
import 'animate.css';
import axios from '../../services/axios';

function ModalGoal({ id, team, isOpen, onClose }) {
  const [strikerTeam, setStrikerTeam] = useState('');
  const [assistTeam, setAssistTeam] = useState('');
  const [players, setPlayers] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);

  console.log(team);

  useEffect(() => {
    const getPlayers = async () => {
      const response = await axios.get('/player/showPlayers');
      setPlayers(response.data);
    };

    getPlayers();
  }, []);

  useEffect(() => {
    setTeamPlayers(players.filter((p) => p.team === team));
  }, [players]);

  const goal = async () => {
    const response = await axios.put(`match/current/${id}`, {
      team,
      goals: strikerTeam,
      assists: assistTeam,
    });
    setStrikerTeam('');
    setAssistTeam('');
  };

  if (isOpen) {
    return (
      <div className="modal-overlay animate__animated animate__fadeIn animate__faster">
        <div className="modal">
          <div className="modal-header">
            <img src={Goal} alt="gol" />
            <h3>GOLLLLLLLLL 🎉</h3>
          </div>
          <div className="modal-body">
            <h4>AUTOR DO GOL</h4>
            <select onChange={(e) => setStrikerTeam(e.target.value)}>
              <option />
              {teamPlayers.map((p) => (
                <option key={p._id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
            <h4>AUTOR DA ASSISTÊNCIA</h4>
            <select onChange={(e) => setAssistTeam(e.target.value)}>
              <option />
              <option value={assistTeam}>Sem assistência</option>
              {teamPlayers.map((p) => (
                <option key={p._id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-buttons">
            <form onSubmit={onClose}>
              <button type="submit" onClick={goal}>
                Confirmar
              </button>
              <button type="submit" onClick={onClose}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ModalGoal.propTypes = {
  id: PropTypes.string,
  team: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

ModalGoal.defaultProps = {
  id: '',
  team: '',
  isOpen: false,
  onClose: '',
};

export default ModalGoal;
