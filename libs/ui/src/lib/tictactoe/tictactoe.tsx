import React, { useState } from "react";
import Sound from 'react-sound';



/* eslint-disable-next-line */
export interface TicTacToeProps {}

const Square = ({ value, onClick }) => {
  return (
    <div role="button" tabIndex={0} className='square' onClick={onClick}>{value}</div>
  );
}

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const userSymbol = "X";
const computerSymbol = "O";

export const TicTacToe = (props: TicTacToeProps) => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playStatus, setPlayStatus] = useState(Sound.status.PLAYING);
  const winner = calculateWinner(squares);

  function getStatus() {
    if (winner) {
      document.querySelector('.result').scrollIntoView({ behavior: 'smooth' });
      return winner === "X" ? "Du hast gewonnen!" : "Es ist ja nur ein Spiel!";
    } else if (isBoardFull(squares)) {
      document.querySelector('.result').scrollIntoView({ behavior: 'smooth' });
      return "Ein solidarisches Remis!";
    } else {
      return '';
    }
  }

  function renderSquare(i:number) {
    return (
      <Square
        value={squares[i]}
        key={i}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = userSymbol;
          setSquares(nextSquares);

          if (!calculateWinner(nextSquares)) {
            setTimeout(() => {
              const generatedSquares = nextSquares.slice();
              const generatedSquare = setGeneratedSquare(generatedSquares);
              if (generatedSquare != null) {
                generatedSquares[generatedSquare] = computerSymbol;
                setSquares(generatedSquares);
              }
            }, 300);
          }
        }}
      />
    );
  }

  return (
    <div className='game'>
      <div className='board'>
      {squares.map((value, index) => (
          renderSquare(index)
      ))}
      </div>
      <div className='result'>{getStatus()}</div>
      {winner === "X" && <Sound url={`./assets/sounds/game_won.mp3`} playStatus={playStatus}
        onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)} />}
      {winner === "O" && <Sound url={`./assets/sounds/game_lost.mp3`} playStatus={playStatus}
        onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)} />}
    </div>
  );
}

function setGeneratedSquare(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return i;
    }
  }
  return null;
}

function calculateWinner(squares) {
  // go over all possibly winning lines and check if they consist of only X's/only O's
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}

export default TicTacToe;
