import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import './RegisterTeam.css';
import axios from '../../services/axios';

function RegisterTeam() {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState('');
  const [slogan, setSlogan] = useState('');
  const [shield, setShield] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('players', players);
    formData.append('slogan', slogan);
    formData.append('shield', shield);

    const { data } = await axios.post('create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (data.msg) {
      toast.error(data.msg);
    } else {
      toast.success('Tudo certo!');
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="registerTeam-main">
        <div className="registerTeam">
          <h1>Registre seu time</h1>
          <form action="/criarTime" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Nome:"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              value={slogan}
              placeholder="Bordão:"
              name="slogan"
              id="slogan"
              onChange={(e) => setSlogan(e.target.value)}
              required
            />
            <input
              type="text"
              value={players}
              placeholder="Quantidade de jogadores:"
              name="players"
              id="players"
              onChange={(e) => setPlayers(e.target.value)}
              required
            />
            <input
              type="file"
              id="shield"
              onChange={(e) => setShield(e.target.files[0])}
            />
            <div className="team-button">
              <button type="submit">
                <span>Registrar time</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterTeam;
