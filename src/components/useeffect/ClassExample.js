/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 09 2020 05:21:10 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { Component } from 'react'

class ClassExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('componentDidUpdate - Updating Document Title')
            document.title = `Clicked ${this.state.count} times`
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    updateName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <input type="text" value={this.state.name} onChange={this.updateName} />
                <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassExample
