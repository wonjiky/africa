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
            selectedCountry: '',
            selectedAgglos: '',
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
                })
            }
        }

    handleCountryValueFromSearch(a){
        let selected = a === null ? '' : a.value
        let value = a === null ? '' : a
        let selectedIsArray = selected === null ? false : value.constructor === Array;

        if(selectedIsArray === true){
            this.setState({
                origin:'search',
                selectedCountry: '',
            })
        }else{
            this.setState({
                origin:'search',
                selectedCountry: selected,
            })
        }
    }

    handleAgglosValueFromSearch(c){
        let selectedCountry = c === null ? '' : c.countryID

        let selected = c === null ? '' : c.value
        let value = c === null ? '' : c
        let selectedIsArray = selected === null ? false : value.constructor === Array;
        if(selectedIsArray){
            this.setState({
                origin:'search',
                selectedAgglos: '',
            })
        }else{
            this.setState({
                origin:'search',
                selectedCountry: selectedCountry,
                selectedAgglos: selected,
            })
        }
    }

    filterAgglos(data, selectedCountry){
        const sortedAgglosList = data.sort((a, b) => a.cityName.localeCompare(b.cityName))
        if(selectedCountry){
            const agglosValue = sortedAgglosList.filter(u => (u.ID === selectedCountry))
            const filteredAgglosList = agglosValue.map((a,i) => ({value: a.City_ID, label: a.cityName, countryID: a.ID}))
            return(
                filteredAgglosList
            )
        }else{
            return(
                sortedAgglosList.map((a,i) => ({
                    value: a.City_ID, label: a.cityName, countryID: a.ID
            })))
        }
    }

    handleCountryValueFromMap(e){
        this.setState({
            origin:'map',
            selectedCountry: e.value,
        })
    }

    handleAgglosValueFromMap(d){
        this.setState({
            origin:'map',
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

            this.setState({
                origin:'map',
                firstCompareValue:d
            })
            console.log(this.state.firstCompareValue)
        }


        secondCompareValue(d){

                this.setState({
                    origin:'map',
                    secondCompareValue:d
                })
                console.log(this.state.secondCompareValue)
            }


    handleValues = e => {
        console.log(e.first)
        this.setState({hi:e})
        console.log(this.state.hi);
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
                        handleValues={e => this.handleValues(e)}
                    />
                </div>
                <div className="explore_content-wrapper">
                    <ExploreMixer
                        sizeArray={this.state.sizeArray}
                        timeSliderRange={this.state.timeSliderRange}
                        timeSliderValue={this.state.timeSliderValue}
                        handleSliderValue={this.handleSliderValue.bind(this)}
                    />
                    <ExploreContent
                        //data to Content
                        countryData={this.props.countryData}
                        agglosData={this.props.agglosData}

                        //values to Content
                        firstCompareValue={this.state.firstCompareValue}
                        secondCompareValue={this.state.secondCompareValue}
                        reveal={this.state.accordionOpen}
                        timeSliderValue={this.state.timeSliderValue}
                        selectedCountry={this.state.selectedCountry}
                        selectedAgglos={this.state.selectedAgglos}
                        sizeArray={this.state.sizeArray}

                        //data from Content
                        tabIndex={this.handleTabIndex}
                        accordionToggle={this.accordionToggle}
                        handleCountryValueFromSearch={this.handleCountryValueFromSearch}
                        handleAgglosValueFromSearch={this.handleAgglosValueFromSearch}
                        />
                </div>
            </main>
        );

    }

}

export default ExploreWrapper;
