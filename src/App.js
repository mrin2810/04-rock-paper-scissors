import React, { useEffect, useState } from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';
import WinsAndLosses from './components/WinsAndLosses';
import PopUp from './components/PopUp';
import Choices from './components/Choices';

const choices = [
  { id: 1, name: 'rock', icon: <Rock />, lossesTo: 2 },
  { id: 2, name: 'paper', icon: <Paper />, lossesTo: 3 },
  { id: 3, name: 'scissors', icon: <Scissors />, lossesTo: 1 }
];

const gameStates = [
  {id: 1, name: 'win', message: 'You Win!!'},
  {id: 2, name: 'lose', message: 'You Lose.'},
  {id: 3, name: 'draw', message: 'You Drew!!'}
];

export default function App() {
  
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameState, setGameState] = useState(null); // win/lose/draw

  function handleUserChoice(choice) {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice);
    console.log(chosenChoice.lossesTo, computerChoice.id);
    let stateId;
    if(chosenChoice.lossesTo === computerChoice.id) {
      setLosses((losses) => losses + 1);
      stateId = 2;
    } else if (chosenChoice.id === computerChoice.id) {
      stateId = 3;
    } else {
      setWins((wins) => wins + 1);
      stateId = 1;
    }

    // determine game state
    const currGameState = gameStates.find(gs => gs.id === stateId);
    setGameState(currGameState);
  }

  function startAgain() {
    setComputerChoice(choices[Math.floor(Math.random()*choices.length)]);
    setGameState(null);
    setUserChoice(null);
  }

  useEffect(() => {
    startAgain();
  }, []);

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <WinsAndLosses wins={wins} losses={losses} />
      </div>

      {/* the popup to show win/loss/draw */}
      {gameState && (
        <PopUp 
          gameState={gameState} 
          userChoice={userChoice} 
          computerChoice={computerChoice} 
          startAgain={startAgain} 
        />
      )}

      <Choices choices={choices} handleUserChoice={handleUserChoice} />
    </div>
  );
}
