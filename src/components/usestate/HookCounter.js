/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 08 2020 09:27:30 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from 'react'

// basic useState
function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h3>Counter Using Hook</h3>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounter
