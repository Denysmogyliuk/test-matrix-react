import './App.css'
import Matrix from './components/matrix/Matrix'
import Toolbar from './components/toolbar/Toolbar'
import { useMatrixContext } from './context/MatrixContext';

const App = () => {
  const { matrix, } = useMatrixContext()

  return (
    <div className="App">
      <Toolbar />
      {matrix.length ?
        <main>
          <Matrix />
        </main>
        :
        null}
    </div>
  )
}

export default App
