/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 11 2020 20:39:17 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

// local state management with useReducer

const initialCount = 0
const updateCount = (count, action) => {
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

function ReducerCounterOne() {

    const [count, dispatch] = React.useReducer(updateCount, initialCount)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerCounterOne
