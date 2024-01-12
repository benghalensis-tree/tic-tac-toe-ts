import React from 'react'
import Square from './Square';
import { useState } from 'react';

type BoardProps = {
  squares: (string|null)[];
  player: boolean;
  handlePlay: (newSquares: (string|null)[]) => void;
}
const Board: React.FC<BoardProps>= ({squares, player, handlePlay}) => {
  
  const handleClick = (i: number) => {
    if(squares[i]){
      return;
    }
    const newSquares = [...squares]
    newSquares[i] = player ? 'X' : 'O';
    handlePlay(newSquares);
  }

  // const boardMap = squares.map(
  //   (string, index) => {
  //     return(
  //       <Square square={string} handleClick={() => {handleClick(index)}}/>
  //     )
  //   }
  // )
  return (
    <>
      <div className='board-row'>
        <Square square={squares[0]} handleClick={() => {handleClick(0)}}/>
        <Square square={squares[1]} handleClick={() => {handleClick(1)}}/>
        <Square square={squares[2]} handleClick={() => {handleClick(2)}}/>
      </div>
      <div className='board-row'>
        <Square square={squares[3]} handleClick={() => {handleClick(3)}}/>
        <Square square={squares[4]} handleClick={() => {handleClick(4)}}/>
        <Square square={squares[5]} handleClick={() => {handleClick(5)}}/>
      </div>
      <div className='board-row'>
        <Square square={squares[6]} handleClick={() => {handleClick(6)}}/>
        <Square square={squares[7]} handleClick={() => {handleClick(7)}}/>
        <Square square={squares[8]} handleClick={() => {handleClick(8)}}/>
      </div>
    </>
  )
}

export default Board;