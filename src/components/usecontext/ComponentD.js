/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 11 2020 11:50:44 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { UserContextOne, UserContextTwo } from '../../App'

function ComponentD() {

    // useContext hook simplifies context consumption
    const profile1 = React.useContext(UserContextOne)
    const profile2 = React.useContext(UserContextTwo)

    return (
        <div>
            <h1>Using useContext Hook</h1>
            <h2>Name: {profile1.name}, Age: {profile1.age}, Status: {profile1.status}</h2>
            <h2>Name: {profile2.name}, Age: {profile2.age}, Status: {profile1.status}</h2>
        </div>
    )
}

export default ComponentD
