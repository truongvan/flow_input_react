import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css';

import BaseRouter from './routes'

import Layout from './components/layout/Layout'
import Navbar from './components/layout/Navbar'




class App extends Component {


    render() {
        return (
            <Router>
                <div className="App" >
                    <Navbar />
                    <Layout >
                        <BaseRouter />
                    </Layout>
                </div>
            </Router>
        );
    }
}

export default App;
