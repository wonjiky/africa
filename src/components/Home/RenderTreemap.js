import React, { Component } from 'react';
import { Treemap } from 'd3plus-react';
import { Col, Row } from 'react-flexbox-grid';

class RenderTreemap extends Component {
  render() {
    const data = this.props.data;
    const treemapdata = data.data;
		const build = {
			groupBy: [
					"ID","NAME"
					],
			data: treemapdata,
			size: d => d.value,
			on: {},//click:  d => this.props.receiveValue(d.City_ID), mouseover: d => this.props.receiveValue(d.City_ID)},
			tooltip: true,
      tooltipConfig: {body: d=>d.value+" Kilometre Square",anchor:"top center"},
      legend: false,
      fill: d => d.Color,
      shapeConfig: {fill:d => d.Color,
        labelConfig: {
          fontResize:false,
          fontSize:12,
          width:100,
          height:3000,
          padding:3,
          overflow:10
        }}
    };
		return(
      <Row className="explore-content-row">
       <Col md={7} mdOffset={2}  className="treemap-text">
          <ul className="list-unstyled">
            <li>
              <p id='tree-title'> {data.title} </p>
              <p id='tree-text'> {data.description}</p>
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
