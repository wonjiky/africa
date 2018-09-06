import React, { Component } from 'react';
import { Treemap } from 'd3plus-react';
import d3plus from 'd3plus';

class CountryGraph extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        new d3plus.Plot()
        .baseline(0)
        .discrete("x")
        .x("x")
        .y("Urate")
        .xSort((a, b) => b.Urate - a.Urate)
        .shape("Bar")
        .color("light")
        .tooltipConfig({
         body: function(d) {
           var table = "<table class='tooltip-table'>";
           table += "<tr><td class='title'>Urbanisation rate:</td><td class='data'>" + Math.round(d.Urate*100) +"%"+ "</td></tr>";
           table += "</table>";
           return table;
         },
         
         title: function(d) {
           var txt = d.Country;
           return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
         }
       })
       .yConfig({
         barConfig: {"stroke-width": 0},
         title: false,
         ticks: [],
         labels: []
       })
       .xConfig({
         barConfig: {"stroke-width": 0},
         title: false,
         ticks: []
       })
       .shapeConfig({
         fill: function(d) {
           if (d.Country===""){return "cornflowerblue";} else {return "lightgrey";}
         }
       })
       .data(this.props.countries)
       .select("#viz")
       .render();
    }

    render() {
        return(
            <div id="viz"/>
        );
    }

}

export default CountryGraph;