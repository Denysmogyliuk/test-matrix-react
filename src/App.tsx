import { useState } from 'react'
import './App.css'
import Matrix from './components/matrix/Matrix'
import Toolbar from './components/toolbar/Toolbar'

const App = () => {
  return (
    <div className="App">
      <Toolbar />
      <Matrix />
    </div>
  )
}

export default App
