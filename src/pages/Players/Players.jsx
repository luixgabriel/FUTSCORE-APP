import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Shirt from '../../assets/imgs/camisatime.png';
import './Players.css';

function Players() {
  return (
    <>
      <Header />
      <div className="players">
        <div className="list-players">
          <div className="titles-players">
            <div />
            <Link to="/registrarJogador">
              <button type="submit">
                <span>Adicionar um jogador</span>
              </button>
            </Link>
          </div>

          <table>
            <tr>
              <th>
                <img src={Shirt} alt="camisatime" />
              </th>
              <th>NOME</th>
              <th>TIME</th>
              <th>GOLS</th>
              <th>ASSISTÊNCIAS</th>
            </tr>
            <tr>
              <td>11</td>
              <td>Luis gabriel</td>
              <td>vasco</td>
              <td>12</td>
              <td>21</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Luis gabriel</td>
              <td>vasco</td>
              <td>12</td>
              <td>21</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Players;
