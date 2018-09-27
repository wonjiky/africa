import React, { Component } from 'react';
import Histogram from './CountryHistogram';

class CoutryHistWrapper extends Component {
    constructor(props){
        super(props);
        
        this.state = ({
            Upop: 'Upop_Scaled',
        })
    }

    valueFromCountryHistogram(value){
        // console.log(value);
        this.props.valueFromCountryHistogram(value);
    }

    render() {
        return(
            <Histogram selectedValue={this.props.selectedValue} countryData={this.props.countryData} valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}/>
        );
    }
    
}

export default CoutryHistWrapper;