import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ playerWeapon, setPlayerWeapon }) => {
  // Track player's chosen weapon
  const setWeapon = (element) => {
    // update player weapon state with clicked weapon
    setPlayerWeapon(element.target.dataset.id);
  };

  return (
    <div>
      <Link to="/result">
        <button data-id="rock" onClick={setWeapon}>
          Rock 🪨
        </button>
        <button data-id="paper" onClick={setWeapon}>
          Paper 📄
        </button>
        <button data-id="scissors" onClick={setWeapon}>
          Scissors ✂️
        </button>
      </Link>
    </div>
  );
};

export default Game;
