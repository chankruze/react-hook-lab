/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 09:05:54 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function BadCounter() {
    const [counterOne, setCounterOne] = React.useState(0)
    const [counterTwo, setCounterTwo] = React.useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = () => {
        let i = 0
        while (i < 2500000000) i++
        return counterOne % 2 === 0 ? 'Even' : 'Odd'
    }

    return (
        <React.Fragment>
            <h2>Bad Counter</h2>
            <div>
                <button onClick={incrementOne}>Counter One - {counterOne}</button>
                <span>{isEven()}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
            </div>
        </React.Fragment>
    )
}

export default BadCounter
