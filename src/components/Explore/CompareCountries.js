import React, { Component } from 'react';
import CompareHistogram from './CompareHistogram';

class CompareCountries extends Component {
    constructor(props){
		super(props);
		this.state={
			height:0
		}
        // this.renderInfo = this.renderInfo.bind(this);
    }
	
	handleClick = () => {
		this.setState({
			height: this.state.height === 0 ? "auto" : 0
		});
	};

	valueFromCountryHistogram(value){
		this.props.valueFromCountryHistogram(value);
	}

    render() {
        const { firstCountry, secondCountry, countryData } = this.props;
        // console.log(firstCountry, secondCountry);
        if((firstCountry || secondCountry)){
			return(
				<div className="histogram_container">
                    <CompareHistogram 
                        timeSliderValue = {this.props.timeSliderValue}
                        firstCountry={firstCountry}
                        secondCountry={secondCountry}
                        countryData={countryData}
                    />
				</div>
			);
		}else{
			return <div></div>
		}
    }
}

export default CompareCountries;
