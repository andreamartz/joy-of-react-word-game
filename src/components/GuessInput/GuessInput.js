import React, { useState } from 'react';

const GuessInput = () => {
  const [guess, setGuess] = useState('');

  const handleChange = (event) => {
    const nextGuess = event.target.value.toUpperCase();
    console.log({ nextGuess });
    setGuess(nextGuess);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" 
        type="text"
        required={true}
        onChange={handleChange} 
        value={guess}
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