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
    // list available weapons
    // pick randomly from weapons
    const randomWeapon = Object.keys(weapons)[Math.floor(Math.random() * 3)];
    console.log('random', randomWeapon);
    // set house weapon
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
      {/* Compare weapons to calculate who won */}
    </>
  );
};

export default Result;
