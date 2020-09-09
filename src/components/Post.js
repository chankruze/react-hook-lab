/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 07:36:06 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function Post(props) {
    const { id, title, body } = props

    return (
        <div>
            <h2><span>#{id}</span> {title}</h2>
            <p>{body}</p>

        </div>
    )
}

export default Post
