/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 10:49:40 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function DocTitleSimple() {
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

    return (
        <div>
            <h2>DocTitleSimple</h2>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleSimple
