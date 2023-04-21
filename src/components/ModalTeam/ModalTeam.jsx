import React from 'react';
import noShield from '../../assets/imgs/no-shield.png';
import './ModalTeam.css';

function ModalTeam() {
  return (
    <div className="modal-overlay-team">
      <div className="modal-team">
        <span className="btn-close">X</span>
        <div className="modal-header-team">
          <img src={noShield} alt="sem time" />
          <h1>inicio</h1>
        </div>
        <div className="modal-body-team">
          <div className="teamInfos">
            <div className="item">
              <span>Bordao:</span>
              <span>VASCAOO ATE MORRER</span>
            </div>
            <div className="item">
              <span>Bordao:</span>
              <span>VASCAOO ATE MORRER</span>
            </div>
            <div className="item">
              <span>Bordao:</span>
              <span>VASCAOO ATE MORRER</span>
            </div>
            <div className="item">
              <span>Bordao:</span>
              <span>VASCAOO ATE MORRER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTeam;
