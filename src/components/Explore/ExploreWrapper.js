import React, { Component } from 'react';
import MapExplore from './MapExplore';
import ExploreMixer from './ExploreMixer';
import ExploreContent from './ExploreContent';
import '../../css/explore.css';
import'../../css/explorer.css';

class ExploreWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            // selectedCountry: null,
            selectedCountry: null,
            selectedAgglos: null,
            origin: '',
            mapForSingleSelectIsMounted: false,
            timeSliderRange : [
                { value: 1950, step: 10 },
                { value: 1960, step: 10 },
                { value: 1970, step: 10 },
                { value: 1980, step: 10 },
                { value: 1990, step: 10 },
                { value: 2000, step: 10 },
                { value: 2010, step: 5 },
                { value: 2015 }
            ],
            timeSliderValue: 2015,
            searchOption: 0,
            firstCompareValue: null,
            secondCompareValue: null,

        };
        this.handleCountryValueFromMap = this.handleCountryValueFromMap.bind(this);
        this.handleCountryValueFromSearch = this.handleCountryValueFromSearch.bind(this);
        this.handleAgglosValueFromMap = this.handleAgglosValueFromMap.bind(this);
        this.handleAgglosValueFromSearch = this.handleAgglosValueFromSearch.bind(this);
        this.handleSizeArray=this.handleSizeArray.bind(this);
        this.handleTabIndex = this.handleTabIndex.bind(this);
        this.firstCompareValue = this.firstCompareValue.bind(this);
        this.secondCompareValue = this.secondCompareValue.bind(this);
        this.handlefirstValueFromSearch = this.handlefirstValueFromSearch.bind(this);
        this.handlesecondValueFromSearch = this.handlesecondValueFromSearch.bind(this);
    }

    componentDidUpdate(preProps, prevState) {
        if(prevState.searchOption !== this.state.searchOption){
                this.setState({
                    origin: '',
                    selectedAgglos: '',
                    selectedCountry: '',
                    timeSliderValue: 2015,
                    sizeArray: '',
                    timeSliderRange: [
                        { value: 1950, step: 10 },
                        { value: 1960, step: 10 },
                        { value: 1970, step: 10 },
                        { value: 1980, step: 10 },
                        { value: 1990, step: 10 },
                        { value: 2000, step: 10 },
                        { value: 2010, step: 5 },
                        { value: 2015 }
                    ],
                    firstCompareValue: null,
                    secondCompareValue: null,
                })
            }
        }

    handleCountryValueFromSearch(a){
        if(a !== null){
            if(a.value !== this.state.selectedCountry){
                this.setState({selectedAgglos: ''})
            }
        }
        let selectedValue = a === null ? '' : a.value;
        this.setState({ selectedCountry: selectedValue})
    }

    handleAgglosValueFromSearch(c){
        let country = c === null ? this.state.selectedCountry : c.countryID
        let selectedValue = c === null ? '' : c.value
        this.setState({selectedAgglos:selectedValue, selectedCountry: country})
    }

    handlefirstValueFromSearch(a){
        console.log(a);
        let selectedValue = a.value;
        this.setState({ firstCompareValue: selectedValue})
    }

    handlesecondValueFromSearch(a){
        console.log(a);
        let selectedValue = a.value;
        this.setState({ secondCompareValue: selectedValue})
    }

    handleCountryValueFromMap(e){
        this.setState({
            // origin:'map',
            selectedCountry: e.value,
        })
    }

    handleAgglosValueFromMap(d){
        this.setState({
            // origin:'map',
            selectedAgglos: d.value,
        })
    }

    handleSizeArray(e){
      this.setState({
        sizeArray: e
      })
    }

    accordionToggle = () => {
		this.setState((prevState) => {
			return {accordionOpen: !prevState.accordionOpen}
        });
    };

    handleSliderValue(e) {
        this.setState({
            timeSliderValue: e
        })
    }

    handleTabIndex(e){
        this.setState({
            searchOption: e
        })
    }

    firstCompareValue(d){
        console.log(d);
        this.setState({
            origin:'map',
            firstCompareValue:d
        })
    }

    secondCompareValue(d){
        console.log(d);
        this.setState({
            origin:'map',
            secondCompareValue:d
        })
    }

    render() {
        return(
            <main className="explore_main-wrapper">
                <div className="explore_map-wrapper">
                    <MapExplore
                        //data to map
                        africaOne={this.propsafricaOne}
                        africaContinent={this.props.africaContinent}
                        agglosGeo={this.props.agglosGeo}

                        //values to Map
                        timeSliderValue={this.state.timeSliderValue}
                        selectedCountry={this.state.selectedCountry}
                        selectedAgglos={this.state.selectedAgglos}
                        searchOption={this.state.searchOption}
                        compareValue={this.state.compareValue}
                        firstCompareValue={this.state.firstCompareValue}
                        secondCompareValue={this.state.secondCompareValue}

                        //data from Map
                        sendCountryValueToContent={this.handleCountryValueFromMap}
                        agglosValueToMap={this.handleAgglosValueFromMap}
                        sizeArray={this.handleSizeArray}
                        firstValueToMap={this.firstCompareValue}
                        secondValueToMap={this.secondCompareValue}
                    />
                </div>
                <div className="explore_content-wrapper">
                    <ExploreMixer
                        sizeArray={this.state.sizeArray}
                        timeSliderRange={this.state.timeSliderRange}
                        timeSliderValue={this.state.timeSliderValue}
                        handleSliderValue={this.handleSliderValue.bind(this)}
                        language={this.props.language}
                    />
                    <ExploreContent
                        //data to Content
                        countryData={this.props.countryData}
                        agglosData={this.props.agglosData}

                        //values to Content
                        reveal={this.state.accordionOpen}
                        timeSliderValue={this.state.timeSliderValue}
                        selectedCountry={this.state.selectedCountry}
                        selectedAgglos={this.state.selectedAgglos}
                        sizeArray={this.state.sizeArray}
                        language={this.props.language}
                        firstCompareValue={this.state.firstCompareValue}
                        secondCompareValue={this.state.secondCompareValue}

                        //values from Content

                        //data from Content
                        tabIndex={this.handleTabIndex}
                        accordionToggle={this.accordionToggle}
                        handleCountryValueFromSearch={this.handleCountryValueFromSearch}
                        handleAgglosValueFromSearch={this.handleAgglosValueFromSearch}
                        handlefirstValueFromSearch={this.handlefirstValueFromSearch}
                        handlesecondValueFromSearch={this.handlesecondValueFromSearch}
                        />
                        
                </div>
            </main>
        );

    }

}

export default ExploreWrapper;
