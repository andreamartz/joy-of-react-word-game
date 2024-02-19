import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessesGrid from '../GuessesGrid/GuessesGrid';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const updateGuesses = (currentGuess) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      alert("Sorry, the maximum number of guesses has been reached.");
      return;
    }
    const currentGuessData = {
      guess: currentGuess, 
      id: `${currentGuess}-${crypto.randomUUID()}`
    }

    setGuesses([...guesses, currentGuessData]);
  }

  return (
    <>
      <GuessesGrid guesses={guesses} />
      <GuessInput updateGuesses={updateGuesses}/>
    </>
  );
}

export default Game;
