import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import CountryHistogram from './CountryHistogram';
import CityHistogram from './CityHistogram';


class KeyFigures extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    valueFromCountryHistogram(value){
        this.props.valueFromCountryHistogram(value);
    }

    render() {
        return(
            <Grid fluid className="keyFigure">
                <Row>
                    <Col md={12}>
                        <h6>Key Figures</h6>
                        <hr/>
                    </Col>
                    <Col md={6} className="countryHistogram-Wrapper">
                        <CountryHistogram 
                            selectedValue={this.props.selectedValue} 
                            countryData={this.props.countryData} 
                            valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
                            />
                    </Col>
                    <Col md={6} className="cityHistogram-Wrapper" >
                       <CityHistogram 
                            selectedValue={this.props.selectedValue} 
                            countryData={this.props.countryData} 
                            valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
                        />
                    </Col>
                </Row>
            </Grid>
            
        );
    }

}

export default KeyFigures;