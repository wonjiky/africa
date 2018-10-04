import React, { Component } from 'react';
import  InfoWrapper  from './InfoWrapper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Select from "react-select";
import RenderFilter from './RenderFilter';


class ExploreContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClearable: true,
            isSearchable: true,
            agglosList: ''
        };
    }

    sendCountryValueToMap(e){
        this.props.handleCountryValueFromMap(e);
    }

    sendAgglosValueToMap(e){
        this.props.handleAgglosValueFromMap(e);
    }

    filterAgglos(value){
        const agglosArray = this.props.agglos[0].features.map((u) => (u.properties))
        const agglosValue = agglosArray.filter(u => (u.ID === value.value))
        const hi = agglosValue.map((a,i) => ({value: a.cityID, label: a.cityName}))
        return (hi)
    }

    render() {
        const countryList = this.props.africaContinent[0].features.map((c,i) => (
            { value: c.properties.ID, label: c.properties.NAME_EN }))

        // const agglosList = this.filterAgglos(this.props.agglos);
        const agglosList = this.filterAgglos(this.props.selectedCountryValue);
        
        return(
            <Grid fluid className="content">
                <Row className="explore-row">
                    <Col md={3} className="mixers">
                        <RenderFilter/>   
                    </Col>
                    <Col md={9} className="exp-content">ff
                        <Col md={9} mdOffset={1} className="searchPadding">
                            <Select
                                placeholder="Select Country"
                                isClearable={this.state.isClearable}
                                isSearchable={this.state.isSearchable}
                                value={this.props.selectedCountryValue}
                                onChange={this.sendCountryValueToMap.bind(this)}
                                options={countryList}
                                // isMulti={true}
                            />
                        </Col>

                        <Col md={9} mdOffset={1}>
                            <Select
                                placeholder="Select City"
                                isClearable={this.state.isClearable}
                                isSearchable={this.state.isSearchable}
                                value={this.props.selectedAgglos}
                                onChange={this.sendAgglosValueToMap.bind(this)}
                                options={agglosList}
                                // isDisabled={!this.props.selectedCountryValue}
                            />
                        </Col>
                        <br/>
                        <InfoWrapper 
                            selectedCountryValue={this.props.selectedCountryValue} 
                            selectedAgglosValue={this.props.selectedAgglosValue}
                            countryData={this.props.countryData}
                            valueFromCountryHistogram={this.sendCountryValueToMap.bind(this)}
                            />
                    </Col>
                </Row>
                    
            </Grid>
        );
    }
}

export default ExploreContent;
