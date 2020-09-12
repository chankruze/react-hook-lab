/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 06:26:39 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

// local state management with useReducer

// state is a object
const initialState = {
    counterOne: 0,
    counterTwo: 10
}

// state and action both object
const updateCount = (state, action) => {
    // deconstruct the key val
    const { counterOne, counterTwo } = state
    const { type, value } = action

    switch (type) {
        case 'increment':
            return { ...state, counterOne: counterOne + value }

        case 'decrement':
            return { ...state, counterOne: counterOne - value }

        case 'increment2':
            return { ...state, counterTwo: counterTwo + value }

        case 'decrement2':
            return { ...state, counterTwo: counterTwo - value }

        case 'reset':
            return initialState

        default:
            return state
    }
}

function ReducerCounterTwo() {

    const [state, dispatch] = React.useReducer(updateCount, initialState)

    return (
        <div>
            <h2>C1: {state.counterOne} | C2: {state.counterTwo}</h2>
            <div>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>C1 + 1</button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>C1 + 5</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>C1 - 1</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>C1 - 5</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>C2 + 1</button>
                <button onClick={() => dispatch({ type: 'increment2', value: 10 })}>C2 + 10</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>C2 - 1</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 10 })}>C2 - 10</button>
            </div>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerCounterTwo
