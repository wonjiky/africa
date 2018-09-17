import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';


class CountryGraph extends Component {
    constructor(props){
        super(props);
        this.state = {
        };

    }

    render() {

        return(
            <Col md={6} className="select-city" >
                <span>Select a City</span>
            </Col>
        );
    }

}

export default CountryGraph;