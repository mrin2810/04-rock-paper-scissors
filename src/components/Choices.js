import React from 'react';
import PropTypes from 'prop-types';

export default function Choices({choices, handleUserChoice}) {
     return (
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
     )
}

Choices.propTypes = {
    choices: PropTypes.array.isRequired,
    handleUserChoice: PropTypes.func.isRequired
}