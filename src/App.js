import React, { useEffect, useState } from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';

const choices = [
  {id: 1, name: 'rock', icon: <Rock />},
  {id: 2, name: 'paper', icon: <Paper />},
  {id: 3, name: 'scissors', icon: <Scissors />}
];

export default function App() {

// Handle wins + losses
// determine the winner
// reset the game

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameState, setGameState] = useState(null);

  function handleUserChoice(choice) {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice);

    // determine game state
    setGameState('win');
  }

  useEffect(() => {
    const randomChoice = choices[Math.floor(Math.random()*choices.length)];
    setComputerChoice(randomChoice);
  }, []);

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">{wins === 1 ? 'Win' : 'Wins'}</span>
          </div>

          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">{losses === 1 ? 'Loss' : 'Losses'}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      <div className="game-state">
        <div className='game-state-content'>
          <p>User's Icon</p>
          <p>You Won!!</p>
          <p>Computer's Icon</p>
        </div>
      </div>

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          {choices.map((choice) => {
            return (
              <button key={choice.id} className={choice.name} onClick={() => handleUserChoice(choice.id)}>
                {choice.icon}
              </button>
            )
          })}
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}
