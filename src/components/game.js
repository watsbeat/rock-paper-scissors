import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ setPlayerWeapon }) => {
  const setWeapon = (element) => {
    setPlayerWeapon(element.target.dataset.id);
  };

  return (
    <div
      style={{
        margin: 'auto',
        maxWidth: '500px',
      }}
    >
      <h2>Choose your weapon:</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Must be wrapped in separate <Link> tags for styling */}
        <Link to="/result">
          <button data-id="rock" onClick={setWeapon}>
            Rock 🪨
          </button>
        </Link>
        <Link to="/result">
          <button data-id="paper" onClick={setWeapon}>
            Paper 📄
          </button>
        </Link>
        <Link to="/result">
          <button data-id="scissors" onClick={setWeapon}>
            Scissors ✂️
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
