import React from 'react';
import './App.css';
import DataFetching from './components/DataFetching';
import ComponentA from './components/usecontext/ComponentA';

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
      {/* <DataFetching /> */}
      <UserContextOne.Provider value={user1}>
        <UserContextTwo.Provider value={user2}>
          <ComponentA />
        </UserContextTwo.Provider>
      </UserContextOne.Provider>
    </div>
  );
}

export default App;
