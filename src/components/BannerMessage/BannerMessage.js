import React from 'react';

function BannerMessage({ playerStatus, numGuesses, answer }) {
  return (
    <>
      {playerStatus === "win" &&
        <>
          <strong>Congratulations!</strong> Got it in {' '}
          <strong>{numGuesses} {numGuesses === 1 ? "guess" : "guesses"}</strong>.
        </>
      }
      {playerStatus === "lose" &&
        <>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </>
      }
    </>
  );
}

export default BannerMessage;
