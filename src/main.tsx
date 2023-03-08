import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { getMatrix } from './app/utils/getMatrix'
import { Context } from './components/context'
import './index.css'

const array = getMatrix({ width: 8, height: 12 })
console.log(array)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Context.Provider value={array}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
)
