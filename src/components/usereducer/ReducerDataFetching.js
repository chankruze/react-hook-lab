/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 09:25:42 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import axios from 'axios'
import Post from '../Post'

// data fetching using useReducer + useEffect
const API = "https://jsonplaceholder.typicode.com"
const END_POSTS = "/posts"
const FETCH_SUCCESS = 0
const FETCH_ERROR = 1

// state properties grouped together
const initialState = {
    loading: true,
    err: '',
    post: ''
}

const reducer = (state, action) => {
    const { type } = action

    switch (type) {
        // state transitions grouped together
        case FETCH_SUCCESS:
            return {
                loading: false,
                post: action.payload,
                err: ''
            }

        case FETCH_ERROR:
            return {
                loading: false,
                post: '',
                err: 'Something went wrong ;('
            }

        default:
            return state

    }
}

function ReducerDataFetching() {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    React.useEffect(() => {
        axios.get(API + END_POSTS + '/' + Math.round(Math.random() * 100))
            .then(res => {
                dispatch({ type: FETCH_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_ERROR, payload: { err: err } })
            })
    }, [])

    const { loading, err, post } = state

    return (
        <div>
            { loading ? 'Loading...' : <Post id={post.id}
                title={post.title}
                body={post.body} />}

            {err ? err : null}
        </div>
    )
}

export default ReducerDataFetching
