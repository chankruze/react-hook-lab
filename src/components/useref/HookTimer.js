/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 10:23:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function HookTimer() {
    const [timer, setTimer] = React.useState(0)
    // used as a generic contaier similar to class property to store
    // mutable data which can survive re-renders and don't cause
    // re-renders when data is changed
    const intervalRef = React.useRef()

    React.useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000);

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            <h2>Class Timer - {timer}</h2>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}

export default HookTimer
