import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MatrixContextProvider } from './context/MatrixContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MatrixContextProvider>
      <App />
    </MatrixContextProvider>
  </React.StrictMode>,
)
