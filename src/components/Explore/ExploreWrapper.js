import React, { Component } from 'react';
import ExploreContent from './ExploreContent';
import ExploreMixer from './ExploreMixer';
import Map from '../Map';
import '../../css/explore.css';
import { Row, Col } from 'react-flexbox-grid';

class ExploreWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            // mixerToggle: true,
            // mapToggle: true,
            // collapseNav: true,
            // mixerCol: 2,
            // mapCol: 4,
            // selectedCountryFromMap:'',
            selectedCountry: null,
            selectedValue: '',
            agglosGroup: '',
            origin: '',
            
        };
        // this._onMixerToggle = this._onMixerToggle.bind(this); 
        this.handleValueFromMap = this.handleValueFromMap.bind(this);
        this.handleValueFromSearch = this.handleValueFromSearch.bind(this);
        this.handleAgglosFromMap = this.handleAgglosFromMap.bind(this);
    }
    
    // _onMixerToggle() {
    //     this.setState({
    //         mixerToggle: !this.state.mixerToggle,
    //         mapToggle: !this.state.mapToggle,
    //         collapseNav: !this.state.collapseNav
    //     });
    // }

    // _mixerExpand = (mixerToggle) => {
    //     return(mixerToggle ? this.state.mixerCol : this.state.mixerCol-1);
    // }
    
    // _mapExpand(mapToggle) {
    //     return(mapToggle ? this.state.mapCol : this.state.mapCol+3);
    // }
    handleValueFromSearch(valueFromSearch){
        this.setState({
            origin:'search',
            selectedCountry: valueFromSearch.value,
            selectedValue: valueFromSearch,
        })
    }

    handleValueFromMap(valueFromMap){
        this.setState({
            origin:'map',
            selectedCountry: valueFromMap.value,
            selectedValue: valueFromMap,
        })
    }
    componentDidMount(){
    }

    filterCity(selectedCountry){
        this.props.agglosGeo[0].features.map((a,i) => {
            // console.log(a.properties, selectedCountry.value);
        })

        this.props.africaContinent[0].features.map((t,i) => {
            // console.log(t.properties)
        })
    }

    handleAgglosFromMap(e){
        // console.log(e)
        // this.setState({
        //     agglosGroup:e
        // })
        // console.log('AGGLOS :', this.state.agglosGroup);
    }
    
    render() {
        // const agglosGroup = this.state.selectedCountry ? this.filterCity(this.state.selectedValue) : '';

        return(
            <Row className="full-height">
                <Col md={4} className="no-margin">
                {/* {this._mapExpand(this.state.mapToggle)} */}
                    <Map 
                        africaOne={this.props.africaOne}
                        top50={this.props.top50}
                        africaContinent={this.props.africaContinent}
                        agglosGeo={this.props.agglosGeo}

                        handleAgglos={this.handleAgglosFromMap}
                        handleISO={this.handleValueFromMap}
                        selectedCountry={this.state.selectedCountry}
                    />
                </Col>
                <Col md={2} className="no-margin">
                {/* {this._mixerExpand(this.state.mixerToggle)} */}
                    <ExploreMixer 
                        narratives={this.props.narratives} 
                        collapseNav={this.state.collapseNav}
                        onMixerToggle={this._onMixerToggle} 
                        mixerToggle={this._mixerToggle} 
                        mapToggle={this._mapToggle}
                        />
                </Col>

                <Col md className=" exp-content">
                    <ExploreContent 
                        countryData={this.props.countryData} 
                        africaContinent={this.props.africaContinent}
                        agglos={this.props.agglosGeo}

                        handleISO={this.handleValueFromSearch}
                        selectedValue={this.state.selectedValue}
                        agglosGroup={this.state.agglosGroup}
                        />
                </Col>
            </Row>
        );

    }

}

export default ExploreWrapper;