/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 07:28:32 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'

function DataFetching() {
    const API = "https://jsonplaceholder.typicode.com"
    const END_POINT_POSTS = "/posts"

    const [inputPostId, setInputPostId] = useState(1)
    const [fetchPostId, setFetchPostId] = useState(inputPostId)
    const [loadAllPost, setLoadAllPost] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(API + END_POINT_POSTS)
            .then(res => {
                console.log('Posts Fetched');
                setPosts(res.data)
            })
            .catch(err => {
                console.error(err)
            })

        // cleanup
        return () => {
            //
        }
    }, [])

    const [singlePost, setSinglePost] = useState({})

    useEffect(() => {
        axios.get(API + END_POINT_POSTS + "/" + fetchPostId)
            .then(res => {
                console.log('Single Post Fetched')
                setSinglePost(res.data)
            })
            .catch(err => {
                console.error(err)
            })

        // cleanup
        return () => {
            //
        }
    }, [fetchPostId])

    const updateInputPostId = (e) => {
        setInputPostId(e.target.value)
    }

    const updateFetchPostId = () => {
        setFetchPostId(inputPostId)
        setLoadAllPost(false)
    }

    return (
        <div>
            <input type="number" onChange={updateInputPostId} value={inputPostId} />
            <button onClick={updateFetchPostId}>Load Post</button>
            <button onClick={() => setLoadAllPost(true)}>Load All Posts</button>
            {loadAllPost ?
                posts.map(post => <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body} />)
                :
                <Post id={singlePost.id}
                    title={singlePost.title}
                    body={singlePost.body} />}
        </div>
    )
}

export default DataFetching
