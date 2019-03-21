import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Charts from './pages/Charts'
import Information from './pages/Information'

class PageRouter extends React.Component {
    render() {
        return (
            <Router>
                <div id="route-wrapper">
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/charts" component={Charts} />
                    <Route exact path="/information" component={Information} />
                </div>
            </Router>
        )
    }
}


export default PageRouter
