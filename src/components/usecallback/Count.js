/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 22:00:54 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function Count({ text, count }) {
    console.log(`Rendering ${text}`);
    return <div>{text} - {count}</div>
}

export default React.memo(Count)
