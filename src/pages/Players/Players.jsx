import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Shirt from '../../assets/imgs/camisatime.png';
import LoadingTimer from '../../components/LoadingTimer/LoadingTimer';
import './Players.css';
import axios from '../../services/axios';

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const response = await axios.get('/player/showPlayers');
      setPlayers(response.data);
    };

    getPlayers();
  }, []);

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
              <th>AÇÕES</th>
            </tr>
            {players.map((player) => (
              <tr key={player._id}>
                <td>{player.numberTshirt}</td>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>
                  <Link to="/">
                    <FaEdit />
                  </Link>

                  <Link to="/">
                    <FaWindowClose />
                  </Link>
                </td>
              </tr>
            ))}
          </table>
          {players.length <= 0 && <LoadingTimer />}
        </div>
      </div>
    </>
  );
}

export default Players;
