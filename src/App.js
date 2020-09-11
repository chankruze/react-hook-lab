import React from 'react';
import './App.css';
import ReducerCounterOne from './components/usereducer/ReducerCounterOne';

const user1 = {
  name: 'Chandan',
  age: '20',
  status: 'single'
}

const user2 = {
  name: 'Nikhil',
  age: '16',
  status: 'taken'
}


export const UserContextOne = React.createContext()
export const UserContextTwo = React.createContext()

function App() {
  return (
    <div className="App">
      <ReducerCounterOne/>
    </div>
  );
}

export default App;
