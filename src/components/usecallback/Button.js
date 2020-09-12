/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 22:00:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function Button({ handleClick, children }) {
    console.log(`Rendering button - ${children}`)
    return <button onClick={handleClick}>{children}</button>
}

export default React.memo(Button)

