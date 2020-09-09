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
        console.log('mousemove event');
        setX(e.clientX)
        setY(e.clientY)
    }

    // componentDidUpdate(), componentDidMount()
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    return (
        <div>
            <h3>Functional Component + Hooks</h3>
            <h2>X: {x}, Y: {y}</h2>
        </div>
    )
}

export default HookMouseMove
