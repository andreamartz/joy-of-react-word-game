import React, { useState } from 'react';

const GuessInput = () => {
  const [guess, setGuess] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    const nextGuessValue = event.target.value.toUpperCase();
    setGuess(nextGuessValue);

    if(nextGuessValue.length === 5) {
      // submit the guess
      handleSubmit(nextGuessValue);
    }
  }
  
  const handleSubmit = (guess) => {
    console.log({ guess });
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" action="">
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" 
        type="text"
        required={true}
        onChange={handleChange} 
        value={guess} 
        title="Your guess must contain exactly five letters"
        pattern="([A-Z]{5})"
      />
    </form>
  );
}

export default GuessInput;