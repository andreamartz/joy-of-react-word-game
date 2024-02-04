import React, { useState } from 'react';

const GuessInput = ({updateGuesses}) => {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleChange = (event) => {
    const nextCurrentGuess = event.target.value.toUpperCase();
    setCurrentGuess(nextCurrentGuess);
  };

  const handleSubmitGuess = (event) => {
    event.preventDefault();
    console.log({ currentGuess });

    updateGuesses(currentGuess);
    setCurrentGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" 
        type="text"
        required={true}
        onChange={handleChange} 
        value={currentGuess}
        minLength={5}
        maxLength={5}
        title="5 letter word"
        pattern="([A-Z]{5})"
        autoComplete="off"
      />
    </form>
  );
}

export default GuessInput;