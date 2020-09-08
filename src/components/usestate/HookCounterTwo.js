/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 08 2020 18:28:56 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from 'react'

// useState with previous state
function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const changeCount = (val) => {
        setCount(prevCount => prevCount + val)
    }

    return (
        <div>
            count: {count}
            <br></br>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => changeCount(1)}>Increment</button>
            <button onClick={() => changeCount(-1)}>Decrement</button>
        </div>
    )
}

export default HookCounterTwo
