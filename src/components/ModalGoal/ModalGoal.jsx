/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ModalGoal.css';
import PropTypes from 'prop-types';
import Goal from '../../assets/imgs/goal.png';

function ModalGoal({ isOpen, players }) {
  if (isOpen) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <img src={Goal} alt="gol" />
            <h3>GOLLLLLLLLL 🎉</h3>
          </div>
          <div className="modal-body">
            <h4>AUTOR DO GOL</h4>
            <select>
              <option />
              <option>luis</option>
              <option>messi</option>
              <option>neymar</option>
              <option>modric</option>
            </select>
            <h4>AUTOR DA ASSISTÊNCIA</h4>
            <select>
              <option />
              <option>Sem assistência</option>
              <option>messi</option>
              <option>neymar</option>
              <option>modric</option>
            </select>
          </div>
          <div className="modal-buttons">
            <button type="submit">Confirmar</button>
            <button type="submit">Cancelar</button>
          </div>
        </div>
      </div>
    );
  }
}

ModalGoal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  players: PropTypes.arrayOf.isRequired,
};

export default ModalGoal;
