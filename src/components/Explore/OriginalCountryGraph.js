import React, { Component } from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';
import {Grid, Row, Col} from 'react-flexbox-grid';
import data from './data';

class CountryGraph extends Component {

    plot(chart, width, height) {
        // create scales!
        const xScale = d3.scaleBand()
            .domain(data.map(d => d.country))
            .range([0, width]);
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([height, 0]);
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

        chart.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('x', d => xScale(d.country))
            .attr('y', d => yScale(d.value))
            .attr('height', d => (50 - yScale(d.value)))//(height - yScale(d.value)))
            .attr('width', d => xScale.bandwidth())
            .style('fill', (d, i) => colorScale(i));

        chart.append('g')
            .classed('x axis', true)
            .attr('transform', `translate(0,0)`)

        chart.append('g')
            .classed('y axis', true)
            .attr('transform', 'translate(0,0)')
    }

    drawChart() {
        const width = 250;
        const height = 130;

        const el = new Element('div');
        const svg = d3.select(el)
            .append('svg')
            .attr('id', 'chart')
            .attr('width', width)
            .attr('height', height);

        const margin = {
            top: 60,
            bottom: 100,
            left: 100,
            right: 0
        };

        const chart = svg.append('g')
            .classed('display', true)
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom
        this.plot(chart, chartWidth, chartHeight);

        return el.toReact();
    }
    
    render() {
        return(
            <Grid fluid className="graph-content">
                <Row>
                    <Col md={12} className="keyfigures">
                        <h3>Key Figures</h3>
                        <hr/>
                    </Col>
                    
                    <Col md={6} className="select-country">

                        <ul className="list-unstyled histogram">
                            <li>
                            <span>Urbanization Rate</span>
                            {this.drawChart()}</li>
                            <hr/>
                            <li>
                            <span>Urbanization Population</span>
                            {this.drawChart()}</li>
                            <hr/>
                            <li>
                            <span>Level of Urbanization Surface</span>
                            {this.drawChart()}</li>
                            <hr/>
                            <li>
                            <span>Urban Surface</span>
                            {this.drawChart()}</li>
                            <hr/>
                            <li>
                            <span>Average Distance</span>
                            {this.drawChart()}</li>
                        </ul>
                        </Col>
                        {/* <hr class="vr" /> */}
                    <Col md={6} className="select-city" >
                        <span>Select a City</span>
                    </Col>
                </Row>
            </Grid>
            
        );
    }

}

export default CountryGraph;