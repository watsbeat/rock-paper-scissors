import React, { useEffect, useState } from 'react';

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
      {/* TODO: Compare weapons to calculate who won */}
      {/* TODO: Update player score based on who won */}
    </>
  );
};

export default Result;
