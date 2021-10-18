import React, { useEffect, useState } from 'react';

// * You may use the 'beats' rules defined here in your compareHands function
const weapons = {
  Rock: {
    beats: 'Scissors',
  },
  Paper: {
    beats: 'Rock',
  },
  Scissors: {
    beats: 'Paper',
  },
};

const Result = ({ playerWeapon }) => {
  const [houseWeapon, setHouseWeapon] = useState('');

  const generateRandomWeaponForHouse = () => {
    const randomWeapon = Object.keys(weapons)[Math.floor(Math.random() * 3)];
    setHouseWeapon(randomWeapon);
  };

  useEffect(() => {
    generateRandomWeaponForHouse();
  }, []);

  if (!playerWeapon || !houseWeapon) {
    return null;
  }

  return (
    <div className="Result-container">
      <h2>
        {playerWeapon} vs {houseWeapon}
      </h2>
      <p>
        You chose <em>{playerWeapon.toLowerCase()}</em>!
      </p>
      <p>
        The house chose <em>{houseWeapon.toLowerCase()}</em>!
      </p>
      {/* TODO: Compare weapons to calculate who won by creating a compareHands func - setPlayerWinStatus */}
      {/* TODO: Update player score based on who won using setScore */}
    </div>
  );
};

export default Result;
