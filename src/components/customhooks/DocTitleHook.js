/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 10:53:57 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 10:46:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function DocTitleHook() {
    const [count, setCount] = React.useState(0)

    useDocumentTitle(count)

    return (
        <div>
            <h2>DocTitleHook</h2>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleHook
