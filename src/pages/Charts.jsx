import React from 'react'

class Charts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            app: window.qlikApp,
            vis: ''
        }
    }

    componentWillMount(){
        this.state.app.visualization.get('MJaMwK').then((vis) => {
            vis.show('charts-vis')
            this.setState({vis: vis})
        })
    }

    componentWillUnmount() {
        this.state.vis.close()
    }

    render(){

        return (
            <div id="charts">
                <h1>Charts!</h1>
                <p>Show some charts here</p>
                <div id="charts-vis" className="qlikCharts">
                </div>
            </div>
        )
    }
}

export default Charts
