/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 06:16:11 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from 'react'

function HookMouseMove() {
    const [y, setY] = useState(0)
    const [x, setX] = useState(0)

    const logMousePosition = e => {
        console.log('logMousePosition - mousemove event');
        setX(e.clientX)
        setY(e.clientY)
    }

    // componentDidMount()
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // cleanup function = componentWillUnmount()
        return () => {
            console.log('useEffect - Unmount Component ')
            // unregister event listener
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) // no dependency array (render only once) = componentDidUpdate()

    return (
        <div>
            <h3>Functional Component + Hooks</h3>
            <h2>X: {x}, Y: {y}</h2>
        </div>
    )
}

export default HookMouseMove
