/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 11:06:09 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import useCounter from './hooks/useCounter'

function CounterHookTwo() {
    // with default initial value
    const [count, increment, decrement, reset] = useCounter()

    return (
        <div>
            <h2>Custom CounterHook 2 (default)</h2>
            <h3>Count = {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterHookTwo
