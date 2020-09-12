import React from 'react';
import './App.css';
import ReducerGlobalA from './components/usereducer/ReducerGlobalA';

export const CounterContextGlobal = React.createContext()

const initialCount = 0
const reducer = (count, action) => {
  switch (action) {
    case 'increment':
      return count + 1

    case 'decrement':
      return count - 1

    case 'reset':
      return initialCount

    default:
      return count
  }
}

function App() {

  const [count, dispatch] = React.useReducer(reducer, initialCount)

  return (
    <CounterContextGlobal.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h1>{count}</h1>
        <ReducerGlobalA />
      </div>
    </CounterContextGlobal.Provider>
  );
}

export default App;
