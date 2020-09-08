/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 08 2020 19:00:03 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from 'react'

// useState with objects
function HookCounterThree() {
    const initialState = { firstName: '', lastName: '' }
    const [name, setName] = useState(initialState)

    const updateFirstName = (e) => {
        setName({ ... name, firstName: e.target.value })
    }

    const updateLastName = (e) => {
        setName({ ... name, lastName: e.target.value })
    }

    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={updateFirstName} />
                <input type="text" value={name.lastName} onChange={updateLastName} />
                <h2>Welcome {name.firstName} {name.lastName}!</h2>
            </form>
        </div>
    )
}

export default HookCounterThree
