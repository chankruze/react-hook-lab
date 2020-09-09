/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 07:05:50 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class ClassIntervalCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    // unregister to avoid memory leak
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h3>Class Interval Counter</h3>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default ClassIntervalCounter
