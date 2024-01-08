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
    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = 'X'
    } else {
      newSquares[i] = 'O'
    }
    handlePlay(newSquares);
  }

  return(
    <>
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

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (newSquares: (string | null)[]) => {
    setHistory([...history, newSquares])
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <Board squares={currentSquares} xIsNext={xIsNext} handlePlay={handlePlay}/>
    </>
  )
}

export default Game;