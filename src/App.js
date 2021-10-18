import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Score from './components/score';
import Game from './components/game';
import Result from './components/result';

function App() {
  const [score, setScore] = useState('');
  const [playerWeapon, setPlayerWeapon] = useState('');

  return (
    <div className="App">
      <Score score={score} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/result">
            <Result
              playerWeapon={playerWeapon}
              score={score}
              setScore={setScore}
            />
          </Route>
          <Route exact path="/">
            <Game setPlayerWeapon={setPlayerWeapon} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
