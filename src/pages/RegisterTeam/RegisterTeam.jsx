import React from 'react';
import Header from '../../components/Header/Header';
import './RegisterTeam.css';

function RegisterTeam() {
  return (
    <>
      <Header />
      <div className="registerTeam-main">
        <div className="registerTeam">
          <h1>Registre seu time</h1>
          <div className="team-forms">
            <form action="/criarTIme">
              <input
                type="text"
                // value={summoner}
                placeholder="Nome"
                name="name"
                id="name"
                // onChange={getSummoner}
                required
              />
              <input
                type="text"
                // value={summoner}
                placeholder="Bordão"
                name="slogan"
                id="slogan"
                // onChange={getSummoner}
                required
              />
              <input
                type="text"
                // value={summoner}
                placeholder="Quantidade de jogadores"
                name="players"
                id="players"
                // onChange={getSummoner}
                required
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterTeam;
