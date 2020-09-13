/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 11:06:09 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import useCounter from './hooks/useCounter'

function CounterHook() {
    // with initial value = 69, increment val = 10, decrement val = 5
    const [count, increment, decrement, reset] = useCounter(69, 10, 5)

    return (
        <div>
            <h2>Custom CounterHook (values provided)</h2>
            <h3>Count = {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterHook
