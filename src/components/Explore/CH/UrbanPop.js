import React, { Component } from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from "d3";

class UrbanPop extends Component {
    constructor(props){
        super(props);
        this.state={
            fillColor:''
        }
    }

    uPop(chart, width, height, selectedValue, countries) {
        // create scales!
        this.uPopyScale(countries);

        const xScale = d3.scaleBand()
            .domain(countries.map(d => d.ID))
            .range([0, width])
            .paddingInner([0.2]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(countries, d => d.Upop_Scaled)])
            .range([height, 0]);

        chart.selectAll('.bar')
            //add data
            .data(countries)
            //creates new data bound elements
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('x', d => xScale(d.ID))
            .attr('y', d => yScale(d.Upop_Scaled))
            .attr('height', d => (height - yScale(d.Upop_Scaled)))
            .attr('width', d => xScale.bandwidth())
            .style('fill', d => selectedValue.value === d.ID ? '#E8AE40' : 'lightgrey') 

        chart.append('g')
            .classed('x axis', true)
            .attr('transform', `translate(0,0)`)

        chart.append('g')
            .classed('y axis', true)
            .attr('transform', 'translate(0,0)')
    }

    uPopyScale(countries){
        countries.sort(function (a, b) {
            return d3.ascending(a.Upop_Scaled, b.Upop_Scaled);
        })
    }

    renderChart(selectedValue, countries) {
        const width = 190;
        const height = 50;
        const margin = {
            top: 0,
            bottom:0,
            left:0,
            right:0
        };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        const el = new Element('div');
        const svg = d3.select(el)
            .append('svg')
            .attr('id', 'chart')
            .attr('width', width)
            .attr('height', height);

        const chart = svg.append('g')
            .classed('display', true)
            // .attr('transform', `translate(${margin.left},${margin.top})`);
        
        this.uPop(
            chart, 
            chartWidth, 
            chartHeight, 
            selectedValue,
            countries     
            );
            
        return el.toReact()
    }
    
    render() {
        return(
            this.renderChart(this.props.selectedValue, this.props.countryData)
        );
    }
}
export default UrbanPop;