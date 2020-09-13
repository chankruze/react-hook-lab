import React from 'react'
import './App.css'
import ClassTimer from './components/useref/ClassTimer'
import FocusInput from './components/useref/FocusInput'
import HookTimer from './components/useref/HookTimer'

function App() {
  return (
    <div className="App">
      {/* <FocusInput /> */}
      <ClassTimer/>
      <HookTimer/>
    </div>
  )
}

export default App;
