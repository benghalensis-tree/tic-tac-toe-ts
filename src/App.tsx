import React from 'react'
import Board from './components/Board';
import { useState } from 'react';

const App = () => {
  const [ history, setHistory ] = useState([Array(9).fill(null)]);
  const [ player, setPlayer ] = useState(true);
  const [ currentTurn, setCurrentTurn ] = useState(0);
  const squares = history[currentTurn];

  const handlePlay = (newSquares: (string|null)[]) => {
    const newHistory = [...history.slice(0, currentTurn + 1), newSquares]
    setHistory(newHistory);
    setPlayer(!player);
    setCurrentTurn(newHistory.length - 1);
    // setCurrentTurn(history.length);
    // 上記コードではエラーが発生する。なぜ？
  }

  const handleHistory = (historyIndex: number) => {
    setCurrentTurn(historyIndex)
    setPlayer(historyIndex % 2 === 0);
  }

  const historyButton = history.map((squares, index)=>{
    return(
      <li>
        <button onClick={() => {handleHistory(index)}}>ターン{index}に戻る</button>
      </li>
    )
  })

  return (
    <div>
      <Board squares={squares} player={player} handlePlay={handlePlay}/>
      {historyButton}
    </div>
  )
}

export default App;