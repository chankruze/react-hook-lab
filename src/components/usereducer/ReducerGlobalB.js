/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 08:23:21 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { CounterContextGlobal } from '../../App'
import ReducerGlobalC from './ReducerGlobalC'

function ReducerGlobalB() {
    const counterContext = React.useContext(CounterContextGlobal)

    return (
        <div>
            {/* <h2>Coount - {}</h2> */}
            <h2>Component B</h2>
            <h3>{counterContext.countState}</h3>
            <button onClick={() => counterContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
            <ReducerGlobalC />
        </div>
    )
}

export default ReducerGlobalB
