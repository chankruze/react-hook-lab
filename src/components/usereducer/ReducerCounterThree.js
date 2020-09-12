/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 07:54:47 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

// local state management with useReducer

const initialState = 0

const updateCount = (count, action) => {
    switch (action) {
        case 'increment':
            return count + 1

        case 'decrement':
            return count - 1

        case 'reset':
            return initialState

        default:
            return count
    }
}

function ReducerCounterThree() {

    const [countOne, dispatchOne] = React.useReducer(updateCount, initialState)
    const [countTwo, dispatchTwo] = React.useReducer(updateCount, initialState)

    return (
        <div>
            <h2>{countOne}</h2>
            <button onClick={() => dispatchOne('increment')}>Increment</button>
            <button onClick={() => dispatchOne('decrement')}>Decrement</button>
            <button onClick={() => dispatchOne('reset')}>Reset</button>

            <h2>{countTwo}</h2>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default ReducerCounterThree
