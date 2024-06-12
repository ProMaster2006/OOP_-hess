import { useEffect, useState } from 'react'
import './App.scss'
import { Board } from './models/Board';
import BoardComponent from './components/BoardComponent';

function App() {

  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigure()
    setBoard(newBoard);
  }

  return (
    <div className='container'>
     <BoardComponent board={board} setBoard={setBoard}/>
     <div className='feateru_block'>Feature fich</div>
    </div>
  )
}

export default App
