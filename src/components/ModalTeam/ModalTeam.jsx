/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import noShield from '../../assets/imgs/no-shield.png';
import Winrate from '../Winrate/Winrate';
import LoadingTimer from '../LoadingTimer/LoadingTimer';
import axios from '../../services/axios';
import './ModalTeam.css';

function ModalTeam({ isOpen, isClosed, id }) {
  const [selectedTeam, setSelectedTeam] = useState('');

  useEffect(() => {
    const getTeams = async () => {
      const teamsAPI = await axios.get(`show/${id}`);
      setSelectedTeam(teamsAPI.data);
    };

    getTeams();
  }, [id]);

  const wins = parseInt(selectedTeam.wins, 10);
  const defeats = parseInt(selectedTeam.defeats, 10);
  const draws = +parseInt(selectedTeam.draws, 10);
  const matches = wins + defeats + draws;
  const winrate = (wins / matches) * 100;

  const handleModal = () => {
    isClosed();
  };

  if (isOpen) {
    return (
      <div className="modal-overlay-team">
        <div className="modal-team">
          <div className="icon">
            <AiFillCloseCircle size={40} onClick={handleModal} />
          </div>
          <div className="modal-team-header">
            <img
              src={
                selectedTeam.shield === 'null' ? noShield : selectedTeam.shield
              }
            />
            <h1>{selectedTeam.name}</h1>
          </div>
          <div className="modal-team-body">
            {selectedTeam ? (
              <>
                <div className="modal-team-stats">
                  <div>
                    <h2>PARTIDAS:</h2>
                    <h2>{matches}</h2>
                  </div>
                  <div>
                    <h2>VITÓRIAS:</h2>
                    <h2>{wins}</h2>
                  </div>
                  <div>
                    <h2>DERROTAS:</h2>
                    <h2>{defeats}</h2>
                  </div>
                  <div>
                    <h2>EMPATES:</h2>
                    <h2>{draws}</h2>
                  </div>
                </div>
                <div className="modal-team-winrate">
                  <Winrate
                    winRate={winrate}
                    size="150"
                    strokeWidth="3"
                    color={
                      winrate === 50 ? 'white' : winrate > 50 ? 'green' : 'red'
                    }
                  />
                  <h2
                    style={{
                      color:
                        winrate === 50
                          ? 'white'
                          : winrate > 50
                          ? 'green'
                          : 'red',
                    }}
                  >
                    {isNaN(winrate) ? '0%' : `${Math.round(winrate)}%`}
                  </h2>
                </div>
              </>
            ) : (
              <LoadingTimer />
            )}
          </div>
        </div>
      </div>
    );
  }
}

ModalTeam.propTypes = {
  isOpen: PropTypes.bool,
  isClosed: PropTypes.bool,
  id: PropTypes.string,
};

ModalTeam.defaultProps = {
  isOpen: false,
  isClosed: false,
  id: '',
};

export default ModalTeam;
