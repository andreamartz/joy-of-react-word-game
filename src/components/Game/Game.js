import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessesGrid from '../GuessesGrid/GuessesGrid';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [playerStatus, setPlayerStatus] = useState('');
  
  const updateGame = (currentGuess) => {
    const guessData = checkGuess(currentGuess, answer);
    const isCorrect = guessData.every(letterInfo => letterInfo.status === "correct");

    const currentGuessData = {
      guess: currentGuess,
      guessData,
      isCorrect,
      id: `${currentGuess}-${crypto.randomUUID()}`
    }
    const nextGuesses = [...guesses, currentGuessData];
    setGuesses(nextGuesses);
    updateGameOver(currentGuessData, nextGuesses);
    updatePlayerStatus(currentGuessData, nextGuesses);
  };

  const updateGameOver = (currentGuess, guesses) => {
    const nextGameOver = (currentGuess && currentGuess.isCorrect) || guesses.length >= NUM_OF_GUESSES_ALLOWED;
    setGameOver(nextGameOver);
  };

  const updatePlayerStatus = (currentGuess, guesses) => {
    const nextPlayerStatus = currentGuess.isCorrect 
      ? "win"
      : guesses.length >= NUM_OF_GUESSES_ALLOWED
        ? "lose"
        : "playing"
    ;
    setPlayerStatus(nextPlayerStatus);
  }

  return (
    <>
      <GuessesGrid guesses={guesses} />
      <GuessInput 
        updateGame={updateGame}
        gameOver={gameOver}
      />
      {playerStatus === "win" && <WonBanner numGuesses={guesses.length}></WonBanner>}
      {playerStatus === "lose" && <LostBanner answer={answer}></LostBanner>}
    </>
  );
}

export default Game;
