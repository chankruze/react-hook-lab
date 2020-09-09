/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 05:29:46 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count} times`
    })

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    
    return (
        <div>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne
