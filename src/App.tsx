import { useState } from "react"

type SquareProps = {
  value: string | null
  handleClick: () => void
}

const Square: React.FC<SquareProps> = ({value, handleClick}) => {
  return(
    <>
      <button className='square' onClick={handleClick}>{value}</button>
    </>
  )
}

type BoardProps = {
  squares: (string | null)[];
  xIsNext: boolean;
  handlePlay: (newSquares: (string | null)[]) => void
}

const Board: React.FC<BoardProps> = ({ squares, xIsNext, handlePlay }) => {

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = 'X'
    } else {
      newSquares[i] = 'O'
    }
    handlePlay(newSquares);
  }

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return(
    <>
      {status}
      <div className='board-row'>
        <Square value={squares[0]} handleClick={() => handleClick(0)}/>
        <Square value={squares[1]} handleClick={() => handleClick(1)}/>
        <Square value={squares[2]} handleClick={() => handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} handleClick={() => handleClick(3)}/>
        <Square value={squares[4]} handleClick={() => handleClick(4)}/>
        <Square value={squares[5]} handleClick={() => handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} handleClick={() => handleClick(6)}/>
        <Square value={squares[7]} handleClick={() => handleClick(7)}/>
        <Square value={squares[8]} handleClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

const calculateWinner = (squares: (string | null)[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

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