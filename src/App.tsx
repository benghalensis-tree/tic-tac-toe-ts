import { useState } from "react"
import Board from "./components/Board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (newSquares: (string | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1),newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length -1);
    setXIsNext(!xIsNext);
  }
  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div>
        <Board squares={currentSquares} xIsNext={xIsNext} handlePlay={handlePlay}/>
      </div>
      <div>
        {moves}
      </div>
    </>
  )
}

export default Game;