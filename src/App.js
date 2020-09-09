import React from 'react';
import './App.css';
import HookCounterOne from './components/useeffect/HookCounterOne';
import ClassExample from './components/useeffect/ClassExample';

function App() {
  return (
    <div className="App">
      <ClassExample/>
      <HookCounterOne/>
    </div>
  );
}

export default App;
