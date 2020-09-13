/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 10:51:54 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle
