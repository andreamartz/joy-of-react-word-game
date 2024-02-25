import React from 'react';
import { range } from '../../utils';
import { NUM_OF_LETTERS_PER_WORD } from '../../constants';

function Guess({ guessValue, guessData }) {
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_PER_WORD).map((num) => {
        return (
          <span key={num} className={guessValue ? `cell ${guessData[num].status}` : "cell"}>
            {guessValue ? guessValue.split('')[num] : null}
          </span>
        );
      })}
    </p>
  ); 
}

export default Guess;
