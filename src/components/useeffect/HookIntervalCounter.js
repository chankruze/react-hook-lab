/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 07:10:21 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from 'react'

function HookIntervalCounter() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)

    //     // cleanup: componentWillUnmount
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [count]) // deps: componentDidMount

    // or

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        // cleanup: componentWillUnmount
        return () => {
            clearInterval(interval)
        }
    }, []) // deps: componentDidMount

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h3>Hook Interval Counter</h3>
            <h2>{count}</h2>
        </div>
    )
}

export default HookIntervalCounter
