
import React, { Component } from 'react'
import { Route } from "react-router-dom"

import Landingpage from './components/landingpage/Landingpage'
import Dashboard from './components/dashboard/Dashboard'
import Page from './components/page/Page'
import Search from './components/search/Search'
import Register from './components/register/Register'

// const Hoc = (props) => props.children

export default class BaseRouter extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Landingpage} />
                <Route exact path="/page/:slug([a-z0-9\-]+)" component={Page} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard/" component={Dashboard} />
            </div>
        )
    }
}

