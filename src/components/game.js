import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Game = ({ setPlayerWeapon }) => {
  const setWeapon = (element) => {
    setPlayerWeapon(element.target.dataset.id);
  };

  return (
    <div>
      <h2>Choose your weapon:</h2>
      <div className="Game-weapons">
        {/* Must be wrapped in separate <Link> tags for styling */}
        <Link to="/result">
          <button data-id="Rock" onClick={setWeapon}>
            Rock 🪨
          </button>
        </Link>
        <Link to="/result">
          <button data-id="Paper" onClick={setWeapon}>
            Paper 📄
          </button>
        </Link>
        <Link to="/result">
          <button data-id="Scissors" onClick={setWeapon}>
            Scissors ✂️
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
