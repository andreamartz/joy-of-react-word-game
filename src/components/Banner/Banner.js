import React from 'react';
import BannerMessage from '../BannerMessage/BannerMessage';

function Banner({ playerStatus, numGuesses, answer }) {
  const className = playerStatus === "win"
    ? "happy banner"
    : playerStatus === "lose"
      ? "sad banner"
      : "banner";
  return (
    <div className={className}>
      <p>
        <BannerMessage
          playerStatus={playerStatus}
          numGuesses={numGuesses}
          answer={answer}
        />
      </p>
    </div>
  );
}

export default Banner;
