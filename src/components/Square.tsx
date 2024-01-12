import React from 'react'

type SquareProps = {
  square: string|null
  handleClick: () => void
}

const Square: React.FC<SquareProps> = ({square, handleClick}) => {
  return (
    <div>
      <button className='square' onClick={handleClick}>{square}</button>
    </div>
  )
}

export default Square;