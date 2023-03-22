import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './RegisterTeam.css';
import axios from '../../services/axios';

function RegisterTeam() {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState('');
  const [slogan, setSlogan] = useState('');
  const [shield, setShield] = useState('');

  const sendPicture = async (e) => {
    const picture = e.target.files[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('create', { name, players, slogan });
    console.log(data);
  };

  return (
    <>
      <Header />
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
            <input type="file" id="shield" onChange={sendPicture} />
            <div className="team-button">
              <button type="submit">Criar time</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterTeam;
