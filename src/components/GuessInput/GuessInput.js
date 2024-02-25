import React, { useState } from 'react';

const GuessInput = ({ updateGame, gameOver, playerStatus, numGuesses, answer }) => {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleChange = (event) => {
    const nextCurrentGuess = event.target.value.toUpperCase();
    setCurrentGuess(nextCurrentGuess);
  };

  const handleSubmitGuess = (event) => {
    event.preventDefault();
    updateGame(currentGuess);
    setCurrentGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      {<input id="guess-input" 
        type="text"
        required={true}
        disabled={gameOver}
        onChange={handleChange} 
        value={currentGuess}
        minLength={5}
        maxLength={5}
        title="5 letter word"
        pattern="([A-Z]{5})"
        autoComplete="off"
      />}
    </form>
  );
}

export default GuessInput;