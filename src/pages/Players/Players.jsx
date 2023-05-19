import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import Shirt from '../../assets/imgs/camisatime.png';
import LoadingTimer from '../../components/LoadingTimer/LoadingTimer';
import Loading from '../../components/Loading/Loading';
import './Players.css';
import axios from '../../services/axios';

function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPlayers = async () => {
      const response = await axios.get('/player/showPlayers');
      setPlayers(response.data);
    };

    getPlayers();
  }, []);

  const handleDelete = async (e, id, index) => {
    e.persist();
    if (window.confirm('Tem certeza que deseja deletar esse jogador?')) {
      setLoading(true);
      await axios.delete(`player/deletePlayer/${id}`);
      const newPlayers = [...players];
      newPlayers.splice(index, 1);
      setPlayers(newPlayers);
      setLoading(false);
      toast.success('Jogador deletado com sucesso!');
      console.log();
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      {loading && <Loading />}
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
            <thead>
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
            </thead>

            <tbody>
              {players.map((player, index) => (
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

                    <Link
                      to="/jogadores"
                      onClick={(e) => {
                        handleDelete(e, player._id, index);
                      }}
                    >
                      <FaWindowClose />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {players.length <= 0 && <LoadingTimer />}
        </div>
      </div>
    </>
  );
}

export default Players;
