/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 05:29:46 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log(`useEffect - Updating Document Title`)
        document.title = `Clicked ${count} times`
    }, [count]) // Only re-run the effect if count changes

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const updateName = (e) => {
        setName(e.target.value)
    }
    
    return (
        <div>
            <h2>Functional Component + Hooks</h2>
            <input type="text" value={name} onChange={updateName}/>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne
