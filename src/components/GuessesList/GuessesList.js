import React from 'react';

function GuessesList({guesses}) {
  return (
    <div name="guess-results">
      {guesses.map(({ guess, id }) => {
        return (
          <p key={id} className="guess">{guess}</p>
        );
      })}
    </div>
  );
}

export default GuessesList;
