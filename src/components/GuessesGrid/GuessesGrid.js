import React from 'react';
import Guess from '../Guess/Guess';
import {range} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function GuessesGrid({guesses}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(( num ) => {
        return (
          <Guess 
            key={guesses[num] ? guesses[num].id : num} 
            guessValue={guesses[num] ? guesses[num].guess : null}
            guessData={guesses[num] && guesses[num].guessData}
          />
        );
      })}
    </div>
  );
}

export default GuessesGrid;
