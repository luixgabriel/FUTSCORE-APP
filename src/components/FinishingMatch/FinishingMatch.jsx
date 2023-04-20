import React from 'react';

function FinishingMatch2({ match }) {
  console.log(match);
  const fMatch = async () => {
    const t1 = match.teams.team1;
    const t2 = match.teams.team2;
    console.log(t1);
    console.log(t2);
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        winner: t1,
        defeated: t2,
      }),
    };
    fetch(
      `https://apiintersala-production.up.railway.app/match/result/${match._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <button type="submit" onClick={fMatch}>
        ACABA ESSA PORRA
      </button>
    </div>
  );
}

export default FinishingMatch2;
