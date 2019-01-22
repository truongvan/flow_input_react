
import React, { Component } from 'react'
import { Route } from "react-router-dom"

import Register from './components/register/Register'

// const Hoc = (props) => props.children

export default class BaseRouter extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Register} />
            </div>
        )
    }
}

