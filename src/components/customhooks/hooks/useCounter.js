/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 11:06:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState } from 'react'

function useCounter(initialCount = 0, incrementValue = 1, decrementValue = 1) {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + incrementValue)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - decrementValue)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
