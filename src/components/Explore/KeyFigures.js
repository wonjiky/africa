import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

import CoutryHistWrapper from './CoutryHistWrapper';
import CityHistWrapper from './CitiyHistWrapper';


class KeyFigures extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {


        return(
            <Grid fluid className="graph-content">
                <Row>
                    <Col md={12} className="keyfigures">
                        <h6>Key Figures</h6>
                        <hr/>
                    </Col>
                    <Col md={6} className="select-country">
                        <CoutryHistWrapper 
                            selectedValue={this.props.selectedValue}
                            countryData={this.props.countryData}
                            />
                    </Col>
                    <Col md={6} className="select-city" >
                       <CityHistWrapper/>
                    </Col>
                </Row>
            </Grid>
            
        );
    }

}

export default KeyFigures;