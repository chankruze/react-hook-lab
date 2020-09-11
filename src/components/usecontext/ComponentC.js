/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Sep 11 2020 11:50:36 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import ComponentD from './ComponentD'
import { UserContextOne, UserContextTwo } from '../../App'

function ComponentC() {
    return (
        <div>
            <h1>Using Generic Context Consumer</h1>
            <UserContextOne.Consumer>
                {
                    profile1 => {
                        const { name, age, status } = profile1
                        return (
                            <UserContextTwo.Consumer>
                                {
                                    profile2 => {
                                        return (
                                            <div>
                                                <h2>Name: {name}, Age: {age}, Status: {status}</h2>
                                                <h2>Name: {profile2.name}, Age: {profile2.age}, Status: {profile2.status}</h2>
                                            </div>
                                        )
                                    }
                                }
                            </UserContextTwo.Consumer>
                        )
                    }
                }
            </UserContextOne.Consumer>
            <ComponentD />
        </div>
    )
}

export default ComponentC
