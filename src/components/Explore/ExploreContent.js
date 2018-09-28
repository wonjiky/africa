import React, { Component } from 'react';
import  InfoWrapper  from './InfoWrapper';
import { Row, Col } from 'react-flexbox-grid';
import Select from 'react-select';

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
        const hi = agglosValue.map((a,i) => ({value: a.ID, label: a.cityName}))
        return (hi)
    }

    render() {
        const countryList = this.props.africaContinent[0].features.map((c,i) => (
            { value: c.properties.ID, label: c.properties.NAME_EN }))
        const agglosList = this.filterAgglos(this.props.selectedCountryValue);

        return(
            <div>
                <Row className="no-padding">
                    <Col md={4} mdOffset={2}>
                        <Select
                            placeholder="Select Country"
                            isClearable={this.state.isClearable}
                            isSearchable={this.state.isSearchable}
                            value={this.props.selectedCountryValue}
                            onChange={this.sendCountryValueToMap.bind(this)}
                            options={countryList}
                        />
                    </Col>
                    <Col md={4}>
                        <Select
                           placeholder="Select City"
                           isClearable={this.state.isClearable}
                           isSearchable={this.state.isSearchable}
                           value={this.props.selectedAgglos}
                           onChange={this.sendAgglosValueToMap.bind(this)}
                           options={agglosList}
                           isDisabled={!this.props.selectedCountryValue}
                        />
                    </Col>
                </Row>
                <br/>
                <InfoWrapper 
                    selectedCountryValue={this.props.selectedCountryValue} 
                    selectedAgglosValue={this.props.selectedAgglosValue}
                    countryData={this.props.countryData}
                    valueFromCountryHistogram={this.sendCountryValueToMap.bind(this)}
                    />
            </div>
        );
    }
}

export default ExploreContent;
