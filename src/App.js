import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Score from './components/score';
import Game from './components/game';
import Result from './components/result';

function App() {
  const score = 1; // TODO: make stateful
  const [playerWeapon, setPlayerWeapon] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Score score={score} />
        <Switch>
          <Route exact path="/result">
            <Result playerWeapon={playerWeapon} />
          </Route>
          <Route exact path="/">
            <Game
              playerWeapon={playerWeapon}
              setPlayerWeapon={setPlayerWeapon}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
