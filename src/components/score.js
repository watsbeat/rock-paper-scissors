import React from 'react';

const Score = ({ score }) => {
  return (
    <header>
      <h1>Player Score:</h1>
      <p>{score}</p>
    </header>
  );
};

export default Score;
