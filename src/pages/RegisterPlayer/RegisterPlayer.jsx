import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Header from '../../components/Header/Header';
import './RegisterPlayer.css';
import axios from '../../services/axios';

const MySwal = withReactContent(Swal);

function RegisterPlayer() {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [numberTshirt, setNumberTshirt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post('player', {
      name,
      team,
      numberTshirt,
    });

    console.log(data);

    if (data.msg) {
      MySwal.fire({
        title: <p>Ooops..</p>,
        text: data.msg,
        icon: 'error',
        timer: 2000,
        confirmButtonText: 'Tentar novamente',
      });
    } else {
      MySwal.fire({
        title: <p>Tudo certo!</p>,
        text: 'Jogador registrado com sucesso.',
        icon: 'success',
        timer: 2000,
      });
    }

    // MySwal.fire({
    //   title: <p>Hello World</p>,
    //   didOpen: () => {
    //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    //     MySwal.showLoading();
    //   },
    // }).then(() => MySwal.fire(<p>Shorthand works too</p>));
  };

  return (
    <>
      <Header />
      <div className="registerTeam-main">
        <div className="registerTeam">
          <h1>Registre o jogador</h1>
          <form action="/criarJogador" onSubmit={handleSubmit}>
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
              value={team}
              placeholder="Time:"
              name="team"
              id="team"
              onChange={(e) => setTeam(e.target.value)}
              required
            />
            <input
              type="number"
              value={numberTshirt}
              placeholder="Número da camisa:"
              name="numberTshirt"
              id="numberTshirt"
              onChange={(e) => setNumberTshirt(e.target.value)}
              required
            />
            <div className="team-button">
              <button type="submit">
                <span>Registrar jogador</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPlayer;
