/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 22:00:46 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = React.useCallback(() => {
        setAge(prevAge => prevAge + 1)
    }, [setAge])

    const incrementSalary = React.useCallback(() => {
        setSalary(prevSalary => prevSalary + 1000)
    }, [setSalary])

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>increment Salary</Button>
        </div>
    )
}

export default ParentComponent
