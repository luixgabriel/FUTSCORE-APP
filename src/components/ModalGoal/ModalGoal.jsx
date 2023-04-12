/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './ModalGoal.css';
import PropTypes from 'prop-types';
import Goal from '../../assets/imgs/goal.png';
import 'animate.css';
import axios from '../../services/axios';

function ModalGoal({ id, team, isOpen, onClose, players }) {
  const [strikerTeam, setStrikerTeam] = useState('');
  const [assistTeam, setAssistTeam] = useState('');

  const goal = async () => {
    console.log(id);
    const response = await axios.put(`match/current/${id}`, {
      team,
      goals: strikerTeam,
      assists: assistTeam,
    });
    setStrikerTeam('');
    setAssistTeam('');

    console.log(response);
  };

  if (isOpen) {
    return (
      <div className="modal-overlay animate__animated animate__fadeIn animate__fast">
        <div className="modal">
          <div className="modal-header">
            <img src={Goal} alt="gol" />
            <h3>GOLLLLLLLLL 🎉</h3>
          </div>
          <div className="modal-body">
            <h4>AUTOR DO GOL</h4>
            <select onChange={(e) => setStrikerTeam(e.target.value)}>
              <option />
              {players.map((p) => (
                <option key={p._id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
            <h4>AUTOR DA ASSISTÊNCIA</h4>
            <select onChange={(e) => setAssistTeam(e.target.value)}>
              <option />
              <option value={assistTeam}>Sem assistência</option>
              {players.map((p) => (
                <option key={p._id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-buttons">
            <button type="submit" onClick={goal}>
              Confirmar
            </button>
            <button type="submit" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ModalGoal.propTypes = {
  id: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.bool.isRequired,
  players: PropTypes.arrayOf.isRequired,
};

export default ModalGoal;
