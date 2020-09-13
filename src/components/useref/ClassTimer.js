/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 13 2020 10:17:11 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        return (
            <div>
                <h2>Class Timer - {this.state.timer}</h2>
                <button onClick={() => clearInterval(this.interval)}>Clear Interval</button>
            </div>
        )
    }
}

export default ClassTimer
