import React from 'react'
import './App.css'

import UserForm from './components/customhooks/UserForm'
import UserFormHook from './components/customhooks/UserFormHook'

import CounterHook from './components/customhooks/CounterHook'
import CounterHookTwo from './components/customhooks/CounterHookTwo'
import CounterOne from './components/customhooks/CounterOne'
import CounterTwo from './components/customhooks/CounterTwo'

import DocTitleHook from './components/customhooks/DocTitleHook'
import DocTitleSimple from './components/customhooks/DocTitleSimple';

function App() {
  return (
    <div className="App" style={{marginBottom: "10rem"}}>
      <DocTitleSimple />
      <DocTitleHook />
      <hr />
      <CounterOne />
      <CounterTwo />
      <CounterHook />
      <CounterHookTwo />
      <hr />
      <UserForm />
      <UserFormHook />
    </div>
  )
}

export default App;
