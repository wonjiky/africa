import React, { Component } from 'react';
import CountryHistogram from './CountryHistogram';
import CityHistogram from './CityHistogram';
import CountryNotes from './CountryNotes';


class KeyFigure extends Component {
    constructor(props){
		super(props);
		this.state={
			height:0
		}
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
		const { selectedCountry, countryData, selectedAgglos, agglosData, language } = this.props;
		const { height } = this.state;
		if(this.props.language === 0) {
			if((selectedCountry || selectedAgglos) && (selectedCountry !== '')){
				return(
					<div className="histogram_container">
						<div className="explore_country-wrapper">
							<CountryNotes
								handleClick={this.handleClick}
								selectedCountry={selectedCountry}
								countryData={countryData}
								language={language}
								height={height}
							/>
							<CountryHistogram 
								selectedCountry={selectedCountry} 
								countryData={countryData} 
								valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
								timeSliderValue = {this.props.timeSliderValue}
								selectedAgglos={selectedAgglos}
								agglosData={agglosData}
							/>
						</div>
						<div className="explore_agglos-wrapper">
							<CityHistogram 
								selectedAgglos={selectedAgglos}
								selectedCountry={selectedCountry}
								countryData={countryData} 
								agglosData={agglosData}
								valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
							/>
						</div>
					</div>
				);
			}else{
				return <div></div>
			}
		}else{
			if((selectedCountry || selectedAgglos) && (selectedCountry !== '')){
				return(
					<div className="histogram_container">
						<div className="explore_country-wrapper">
							<CountryNotes
								handleClick={this.handleClick}
								selectedCountry={selectedCountry}
								countryData={countryData}
								language={language}
								height={height}
							/>
							<CountryHistogram
								language={language}
								selectedCountry={selectedCountry} 
								countryData={countryData} 
								valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
								timeSliderValue = {this.props.timeSliderValue}
								selectedAgglos={selectedAgglos}
								agglosData={agglosData}
							/>
						</div>
						<div className="explore_agglos-wrapper">
							<CityHistogram 
								selectedAgglos={selectedAgglos}
								selectedCountry={selectedCountry}
								countryData={countryData} 
								agglosData={agglosData}
								valueFromCountryHistogram={this.valueFromCountryHistogram.bind(this)}
							/>
						</div>
					</div>
				);
			}else{
				return <div></div>
			}
		}
    }
}

export default KeyFigure;
