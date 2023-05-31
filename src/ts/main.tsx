import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from '../styles/global.ts'
import Reset from '../styles/reset.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Reset/>
    <GlobalStyle/>
  </React.StrictMode>,
)
