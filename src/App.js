import React from 'react';
import './App.css';
import ClassIntervalCounter from './components/useeffect/ClassIntervalCounter';
import HookIntervalCounter from './components/useeffect/HookIntervalCounter';
// import HookCounterOne from './components/useeffect/HookCounterOne';
// import ClassExample from './components/useeffect/ClassExample';
// import ClassMouseMove from './components/useeffect/ClassMouseMove';
// import HookMouseMove from './components/useeffect/HookMouseMove';
// import MouseContainer from './components/useeffect/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* <ClassExample/>
      <HookCounterOne/> */}
      {/* <ClassMouseMove /> */}
      {/* <HookMouseMove/> */}
      {/* <MouseContainer/> */}
      <ClassIntervalCounter/>
      <HookIntervalCounter/>
    </div>
  );
}

export default App;
