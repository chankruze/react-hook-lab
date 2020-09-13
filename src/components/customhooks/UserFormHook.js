/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 11:20:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import useInput from './hooks/useInput'

function UserFormHook() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <h2>User Form Hook</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type='text' {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' {...bindLastName} />
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default UserFormHook
