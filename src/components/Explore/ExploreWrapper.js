import React, { Component } from 'react';
import ExploreContent from './ExploreContent';
import Map from '../Map';
import '../../css/explore.css';
import { Row, Col } from 'react-flexbox-grid';

class ExploreWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCountry: null,
            selectedCountryValue: '',
            agglosGroup: '',
            origin: '',
            exploreWrapperIsMounted: true,
            
        };
        this.handleCountryValueFromMap = this.handleCountryValueFromMap.bind(this);
        this.handleCountryValueFromSearch = this.handleCountryValueFromSearch.bind(this);
        this.handleAgglosValueFromMap = this.handleAgglosValueFromMap.bind(this);
        this.handleAgglosValueFromSearch = this.handleAgglosValueFromSearch.bind(this)
    }

    handleCountryValueFromSearch(countryValueFromSearch){
        let selected = countryValueFromSearch === null ? '' : countryValueFromSearch.value
        let value = countryValueFromSearch === null ? '' : countryValueFromSearch
        let selectedIsArray = selected === null ? false : value.constructor === Array
      
        if(selectedIsArray === true){
            this.setState({
                origin:'search',
                selectedCountry: '',
                selectedCountryValue: '',
            })
        }else{
            this.setState({
                origin:'search',
                selectedCountry: selected,
                selectedCountryValue: value,
            })
        }
    }

    handleAgglosValueFromSearch(agglosValueFromSearch){
        let selected = agglosValueFromSearch === null ? '' : agglosValueFromSearch.value
        let selectedValue = agglosValueFromSearch === null ? '' : agglosValueFromSearch
        this.setState({
            origin:'search',
            selectedAgglos: selected,
            selectedAgglosValue: selectedValue,
        })
    }

    handleCountryValueFromMap(countryValueFromMap){
        this.setState({
            origin:'map',
            selectedCountry: countryValueFromMap.value,
            selectedCountryValue: countryValueFromMap,
        })
    }
    
    handleAgglosValueFromMap(agglosValueFromMap){
        this.setState({
            origin:'map',
            selectedAgglos: agglosValueFromMap.value,
            selectedAgglosValue: agglosValueFromMap,
        })
    }

    render() {
        return(
            <Row className="full-height">
                <Col md={4} className="no-margin">
                {/* {this._mapExpand(this.state.mapToggle)} */}
                    <Map 
                        //data to Map
                        africaOne={this.props.africaOne}
                        africaContinent={this.props.africaContinent}
                        agglosGeo={this.props.agglosGeo}

                        //values to Map
                        selectedCountry={this.state.selectedCountry}
                        selectedAgglos={this.state.selectedAgglos}
                        exploreWrapperIsMounted={this.state.exploreWrapperIsMounted}

                        //data from Map
                        sendCountryValueToContent={this.handleCountryValueFromMap}
                        sendAgglosValueToContent={this.handleAgglosValueFromMap}
                    />
                </Col>
                <Col md={8} className="no-margin">
                {/* className="exp-content"> */}
                    <ExploreContent 
                        //data to Content
                        countryData={this.props.countryData} 
                        africaContinent={this.props.africaContinent}
                        agglos={this.props.agglosGeo}
                        agglosGroup={this.state.agglosGroup}

                        //values to Content
                        selectedCountryValue={this.state.selectedCountryValue}
                        selectedAgglos={this.state.selectedAgglosValue}
                        selectedAgglosValue={this.state.selectedAgglos}

                        //data from Content
                        handleCountryValueFromMap={this.handleCountryValueFromSearch}
                        handleAgglosValueFromMap={this.handleAgglosValueFromSearch}
                        />
                </Col>
            </Row>
        );

    }

}

export default ExploreWrapper;