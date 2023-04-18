import React from 'react';
import './Tables.css';
import Header from '../../components/Header/Header';

function Tables() {
  return (
    <>
      <Header />
      <div className="table-stats">
        <div className="stats">
          <div className="championship">
            <h3>Campeonato</h3>
            <table className="players-team">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Partidas</th>
                  <th>Vitórias</th>
                  <th>Derrotas</th>
                  <th>Empates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>luis</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="players-table">
            <div className="goals">
              <h3>Campeonato</h3>
              <table className="players-team">
                <thead>
                  <tr>
                    <th>nome</th>
                    <th>jogadores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>luis</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="assists">
              <h3>Campeonato</h3>
              <table className="players-team">
                <thead>
                  <tr>
                    <th>nome</th>
                    <th>jogadores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>luis</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tables;
