/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 11:27:55 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState } from 'react'

function useInput(initialValue) {

    const [value, setValue] = useState(initialValue)

    const reset = () => setValue(initialValue)

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]

}

export default useInput
