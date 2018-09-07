import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import UrbanRate from './histograms/urbanrate';
import UrbanPop from './histograms/urbanpop';
import UrbanSurf from './histograms/urbansurf';
import UrbanKm from './histograms/urbankm';
import UrbanBig from './histograms/biggestcity';
import UrbanAvg from './histograms/avgdist';
import UrbanPrime from './histograms/primacy';


class CountryGraph extends Component {
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
                        <ul className="list-unstyled histogram">
                            <li className="barss"><span>Urbanization rate</span>
                                <UrbanRate className="hist-margin" /></li><hr/>
                            <li className="barss"><span>Urban population</span>
                                <UrbanPop className="hist-margin" /></li><hr/>
                            <li className="barss"><span>Urban surface %</span>
                            <UrbanSurf className="hist-margin" /></li><hr/>
                            <li className="barss"><span>Urban surface Km</span>
                            <UrbanKm className="hist-margin" /></li><hr/>
                            <li className="barss"><span>Biggest city</span>
                            <UrbanBig className="hist-margin" /></li><hr/>
                            <li className="barss"><span>Avg distance between cities</span>
                            <UrbanAvg className="hist-margin" /></li><hr/>
                            <li className="barss"><span>Primacy index</span>
                            <UrbanPrime className="hist-margin" /></li><hr/>
                                        
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