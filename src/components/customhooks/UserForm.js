/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 11:20:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function UserForm() {

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }

    return (
        <div>
            <h2>User Form</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default UserForm
