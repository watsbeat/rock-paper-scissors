import React, { useEffect, useState } from 'react';

// * You may use the 'beats' rules defined here in your compareHands function
const weapons = {
  rock: {
    beats: 'scissors',
  },
  paper: {
    beats: 'rock',
  },
  scissors: {
    beats: 'paper',
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

  return (
    <>
      <h2>Result:</h2>
      <p>You chose {playerWeapon}!</p>
      <p>The house chose {houseWeapon}!</p>
      {/* TODO: Compare weapons to calculate who won by creating a compareHands func - setPlayerWinStatus */}
      {/* TODO: Update player score based on who won using setScore */}
    </>
  );
};

export default Result;
