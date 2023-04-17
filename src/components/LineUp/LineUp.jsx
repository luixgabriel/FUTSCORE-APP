import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Shirt from '../../assets/imgs/camisatime.png';
import axios from '../../services/axios';

function LineUp({ team }) {
  const [players, setPlayers] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const response = await axios.get('/player/showPlayers');
      setPlayers(response.data);
    };

    getPlayers();
  }, []);

  useEffect(() => {
    setTeamPlayers(players.filter((p) => p.team === team));
  }, [players]);

  return (
    <table className="players-team">
      <thead>
        <tr>
          <th>
            <img src={Shirt} alt="CamisaTime" />
          </th>
          <th>jogadores</th>
        </tr>
      </thead>
      <tbody>
        {teamPlayers.map((Player) => (
          <tr key={Player._id}>
            <td>{Player.numberTshirt}</td>
            <td>{Player.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

LineUp.propTypes = {
  team: PropTypes.string,
};

LineUp.defaultProps = {
  team: '',
};

export default LineUp;
