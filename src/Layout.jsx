import React from 'react'

import { loggerHelper } from './helpers/helpers'

import ErrorBoundary from './ErrorBoundary'
import PageRouter from './PageRouter'

class Layout extends React.Component {
    render() {
        loggerHelper('testing')
        return (
            <div id="layout-wrapper">
                <ErrorBoundary>
                    <PageRouter />
                </ErrorBoundary>
            </div>
        )
    }
}


export default Layout
