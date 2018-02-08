import React, { Component } from 'react';
import './style.scss';

class Charts extends Component {
    constructor (props) {
        super();

        this.renderChart = this.renderChart.bind(this);
    }

    componentDidMount () {
        this.renderChart();
    }

    renderChart () {
        // console.log('hi');
    }

    render () {
        return (
        <div className="chartsOnly">
            <svg width="100" height="100">
                <circle r="25" cx="50" cy="50" />
            </svg>
        </div>
        );
    }
};

export default Charts;
