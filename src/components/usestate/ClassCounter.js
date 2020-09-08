/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 08 2020 09:22:40 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h3>Counter Using Class</h3>
                <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCounter
