type SquareProps = {
  num: number
}

const Square: React.FC<SquareProps> = ({num}) => {
  return(
    <>
      <button>{num}</button>
    </>
  )
}

const Board = () => {
  return(
    <>
      <Square num={0}/>
    </>
  )
}

export default Board;