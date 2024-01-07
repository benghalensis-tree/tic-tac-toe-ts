import { useState } from "react"

type SquareProps = {
  value: string
  handleClick: () => void
}

const Square: React.FC<SquareProps> = ({value, handleClick}) => {
  return(
    <>
      <button className='square' onClick={handleClick}>{value}</button>
    </>
  )
}

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i: number) => {
    const newSquares = squares.slice();
    newSquares[i] = 'X'
    setSquares(newSquares);
    console.log('clicked')
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

export default Board;