import React from 'react';
import './LastMatches.css';

function LastMatches() {
  return (
    <div className="lastMatches">
      <h1>Ultimas Partidas</h1>
      <div className="results">
        <div className="matchCurrent">
          <p>EM ANDAMENTO</p>
          <div className="game">
            <h4 style={{ 'margin-right': '20px' }}>Arsenal</h4>
            <span>3</span>
            <span style={{ color: '#2596be', margin: '0 10px' }}>x</span>
            <span>0</span>
            <h4 style={{ 'margin-left': '20px' }}>Vasco</h4>
          </div>
        </div>

        <div className="matchCurrent">
          <p>EM ANDAMENTO</p>
          <div className="game">
            <h4 style={{ 'margin-right': '20px' }}>Arsenal</h4>
            <span>3</span>
            <span style={{ color: '#2596be', margin: '0 10px' }}>x</span>
            <span>0</span>
            <h4 style={{ 'margin-left': '20px' }}>Vasco</h4>
          </div>
        </div>

        <div className="matchCurrent">
          <p style={{ color: 'green' }}>FINALIZADO</p>
          <div className="game">
            <h4 style={{ 'margin-right': '20px' }}>Arsenal</h4>
            <span>3</span>
            <span style={{ color: '#2596be', margin: '0 10px' }}>x</span>
            <span>0</span>
            <h4 style={{ 'margin-left': '20px' }}>Vasco</h4>
          </div>
        </div>

        <div className="matchCurrent">
          <p>EM ANDAMENTO</p>
          <div className="game">
            <h4 style={{ 'margin-right': '20px' }}>Arsenal</h4>
            <span>3</span>
            <span style={{ color: '#2596be', margin: '0 10px' }}>x</span>
            <span>0</span>
            <h4 style={{ 'margin-left': '20px' }}>Vasco</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastMatches;
