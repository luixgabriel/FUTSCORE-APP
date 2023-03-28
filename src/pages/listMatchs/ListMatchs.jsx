import React, { useState } from 'react';
import { GiSoccerBall } from 'react-icons/gi';
import Header from '../../components/Header/Header';
import './ListMatchs.css';

function ListMatchs() {
  const [matchsInProgress, setMatchsInProgress] = useState([]);

  return (
    <>
      <Header />
      <div className="listMatchs-main">
        <div className="listMatchs-section">
          <div className="match-configs">
            <h2>CONFRONTO</h2>

            <h2>DURAÇÃO</h2>

            <h2>TEMPOS</h2>

            <h2>AÇÕES</h2>
          </div>
          <div className="match-info">
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
            >
              <h4>Vasco</h4>
              <h4>x</h4>
              <h4>Fluminense</h4>
            </div>
            <div>
              <h4>50min</h4>
            </div>
            <div>
              <h4>2</h4>
            </div>
            <div>
              <button type="submit">
                Iniciar partida <GiSoccerBall />{' '}
              </button>
              <button type="submit" style={{ backgroundColor: 'red' }}>
                Excluir partida
              </button>
            </div>
          </div>
          <div className="match-info">
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
            >
              <h4>Vasco</h4>
              <h4>x</h4>
              <h4>Fluminense</h4>
            </div>
            <div>
              <h4>50min</h4>
            </div>
            <div>
              <h4>2</h4>
            </div>
            <div>
              <button type="submit">
                Iniciar partida <GiSoccerBall />
              </button>
              <button type="submit" style={{ backgroundColor: 'red' }}>
                Excluir partida
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListMatchs;
