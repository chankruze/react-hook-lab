/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 11:05:14 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 11:00:49 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function CounterTwo() {

    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h2>Simple Counter 2</h2>
            <h3>Count = {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
