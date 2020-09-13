/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 10:12:40 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function FocusInput() {
    const inputRef = React.useRef(null)

    React.useEffect(() => {
        // focus the input elem
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type='text'></input>
        </div>
    )
}

export default FocusInput
