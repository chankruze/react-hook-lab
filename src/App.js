import React from 'react'
import './App.css'
import BadCounter from './components/usememo/BadCounter'
import MemoizedCounter from './components/usememo/MemoizedCounter'

function App() {
  return (
    <div className="App">
      <BadCounter/>
      <MemoizedCounter/>
    </div>
  )
}

export default App;
