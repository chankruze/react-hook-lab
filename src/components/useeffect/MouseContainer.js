/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 06:49:53 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from 'react'
import HookMouseMove from './HookMouseMove'

function MouseContainer() {
    
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouseMove />}
        </div>
    )
}

export default MouseContainer
