import React from 'react';

const Score = ({ score }) => {
  return (
    <div>
      <h2>Player Score: </h2>
      <p>
        You have {score ? score : 'no'} {score === 1 ? 'point' : 'points'}.
      </p>
    </div>
  );
};

export default Score;
