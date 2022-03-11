import React from 'react';
import PropTypes from 'prop-types';

export default function PopUp({gameState, userChoice, computerChoice, startAgain}) {
     return (
         <>
            <div className={`game-state ${gameState.name}`} onClick={() => startAgain()}>
                <div className='game-state-content'>
                <p>{userChoice.icon}</p>
                <p>{gameState.message}</p>
                <p>{computerChoice.icon}</p>
                <button>Play Again!</button>
                </div>
            </div>
         </>
     )
}


PopUp.propTypes = {
    gameState: PropTypes.object.isRequired,
    userChoice: PropTypes.object.isRequired,
    computerChoice: PropTypes.object.isRequired,
    startAgain: PropTypes.func.isRequired
}