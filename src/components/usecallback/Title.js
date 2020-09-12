/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 21:59:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function Title() {
    console.log('Rendering Title')
    return <h2>useCallback </h2>
}

export default React.memo(Title)
