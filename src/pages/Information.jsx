import React from 'react'

class Information extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            app: window.qlikApp,
            vis: ''
        }
    }

    componentWillMount() {
        // need to pass class context into the promise resolution
        // in order to use state and class functions
        this.state.app.visualization.get('pPTsHPm').then((vis) => {
            vis.show('info-chart')
            this.setState({vis: vis})
        })
    }

    componentWillUnmount() {
        this.state.vis.close()
    }

    render(){

        return (
            <div id="information">
                <h1>Information</h1>
                <p>Should have something useful here besides this.</p>
                <div id="info-chart" className="qlikCharts"></div>
            </div>
        )
    }
}

export default Information
