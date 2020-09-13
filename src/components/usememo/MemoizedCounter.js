/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 09:25:01 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function MemoizedCounter() {
    const [counterOne, setcounterOne] = React.useState(0)
    const [counterTwo, setcounterTwo] = React.useState(0)

    const incrementOne = () => {
        setcounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setcounterTwo(counterTwo + 1)
    }

    const isEven = React.useMemo(() => {
        let i = 0
        while (i < 2500000000) i++
        return counterOne % 2 === 0  ? 'Even' : 'Odd'
    }, [counterOne])

    return (
        <React.Fragment>
            <h2>Memoized Counter</h2>
            <div>
                <button onClick={incrementOne}>Counter One - {counterOne}</button>
                <span>{isEven}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
            </div>
        </React.Fragment>
    )
}

export default MemoizedCounter
