/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 06:03:20 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class ClassMouseMove extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>
                <h2>X: {this.state.x}, Y: {this.state.y}</h2>
            </div>
        )
    }
}

export default ClassMouseMove
