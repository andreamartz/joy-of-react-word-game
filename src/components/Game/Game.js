import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessesList from '../GuessesList/GuessesList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const updateGuesses = (currentGuess) => {
    const currentGuessData = {
      guess: currentGuess, 
      id: `${currentGuess}-${crypto.randomUUID()}`
    }
    setGuesses([...guesses, currentGuessData]);
  }

  return (
    <>
      <GuessesList guesses={guesses} />
      <GuessInput updateGuesses={updateGuesses}/>
    </>
  );
}

export default Game;
