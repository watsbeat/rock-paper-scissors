import React from 'react';

const Score = ({ score }) => {
  return (
    <header>
      <h2>Player Score: </h2>
      <p>
        You have {score ? score : 'no'} {score === 1 ? 'point' : 'points'}.
      </p>
    </header>
  );
};

export default Score;
