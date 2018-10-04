import React, { Component } from 'react';
import { Treemap } from 'd3plus-react';
import { Col, Row } from 'react-flexbox-grid';

class RenderTreemap extends Component {
  render() {
    const data = this.props.data;
		const build = {
			groupBy: [
					"ID","NAME"
					],
			data: data,
			size: d => d.value,
			on: {click:  d => this.props.receiveValue(d.City_ID), mouseover: d => this.props.receiveValue(d.City_ID)},
			tooltip: true,
      tooltipConfig: {body: d=>d.value+" Kilometre Square"},
      legend: false,
      shapeConfig: {fill:d => d.Color},
			label: d => d.NAME
		};
		return(
      <Row className="explore-content-row">
       <Col md={7} mdOffset={2}  className="treemap-text">
          <ul className="list-unstyled">
            <li id="tree-title">
              Top 50 Cities by Population
              <hr/> 
            </li>
            <li id="tree-text">
              Stick to 50 sinceit can give a coherent impression how the histogram look like. And already with 50 it’s well distributed like following. Stick to 50 sinceit can give a coherent impression how the histogram look like. And already with 50 it’s well distributed like following.
            </li>
          </ul>
        </Col>
        <Col md={7} mdOffset={2} className="treemap">
          <div id="viz" className="treemap">
            <Treemap config={build} className="treemap"/>
          </div>                       
        </Col>
      </Row>  
		);
	}
}

export default RenderTreemap;
