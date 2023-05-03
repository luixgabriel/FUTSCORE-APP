import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import noShield from '../../assets/imgs/no-shield.png';
import Winrate from '../Winrate/Winrate';
import './ModalTeam.css';

function ModalTeam({ isOpen, id }) {
  console.log(`to no modal team ${id}`);
  if (isOpen) {
    return (
      <div className="modal-overlay-team">
        <div className="modal-team">
          <span>
            <AiFillCloseCircle size={40} />
          </span>
          <div className="modal-team-header">
            <img src={noShield} alt="no=shield" />
          </div>
          <div className="modal-team-body">
            <div className="modal-team-stats">
              <div>
                <h2>PARTIDAS:</h2>
                <h2>10</h2>
              </div>
              <div>
                <h2>VITÓRIAS:</h2>
                <h2>10</h2>
              </div>
              <div>
                <h2>DERROTAS:</h2>
                <h2>10</h2>
              </div>
            </div>
            <div className="modal-team-winrate">
              {/* <div className="circle">
                <p>100%</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalTeam;
