/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 09:04:00 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import axios from 'axios'
import Post from '../Post'

// data fetching using useState + useEffect

const API = "https://jsonplaceholder.typicode.com"
const END_POSTS = "/posts"

function DataFetchingOne() {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState('')
    const [post, setPost] = React.useState({})

    React.useEffect(() => {
        axios.get(API + END_POSTS + '/' + Math.round(Math.random() * 100))
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                setError('Something went wrong ;(')
            })
    }, [])
    return (
        <div>
            { loading ? 'Loading...' : <Post id={post.id}
                title={post.title}
                body={post.body} />}

            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
