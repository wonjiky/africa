import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import CountryHistogram from './CountryHistogram';


class KeyFigures extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    valueFromCountryHistogram(value){
        this.props.valueFromCountryHistogram(value);
    }

    componentDidUpdate(){
    }
    render() {
        return(
            <Grid fluid className="keyFigure">
                <Row>
                    {/* <Col md={12}>
                        <h6>Key Figures</h6>
                        <br/>
                    </Col> */}
                    <Col md={12} className="countryHistogram-Wrapper">
                        <CountryHistogram 
                            selectedCountryValue={this.props.selectedCountryValue} 
                            countryData={this.props.countryData} 
                            valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
                            />
                    </Col>
                    {/* <Col md={6} className="cityHistogram-Wrapper" >
                       <CityHistogram 
                            selectedCountryValue={this.props.selectedCountryValue}
                            selectedAgglosValue={this.props.selectedAgglosValue} 
                            countryData={this.props.countryData} 
                            valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
                        />
                    </Col> */}
                </Row>
            </Grid>
            
        );
    }

}

export default KeyFigures;