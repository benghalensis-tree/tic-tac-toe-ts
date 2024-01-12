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

export default Square;