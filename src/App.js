import React from 'react';
import './App.css';
import HookCounterFour from './components/usestate/HookCounterFour';
// import ClassCounter from './components/usestate/ClassCounter';
// import HookCounter from './components/usestate/HookCounter';
// import HookCounterTwo from './components/usestate/HookCounterTwo';
// import HookCounterThree from './components/usestate/HookCounterThree';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/> 
      <HookCounterTwo/>
      <HookCounterThree />*/}
      <HookCounterFour/>
    </div>
  );
}

export default App;
