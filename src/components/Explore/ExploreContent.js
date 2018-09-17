import React, { Component } from 'react';
import  CountryInfo  from './CountryInfo';
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
        // this.populateAgglosList = this.populateAgglosList.bind(this);
        // this.filterAgglos = this.filterAgglos.bind(this);
    }

    handleChange(e){
        this.props.handleISO(e)
    }

    filterAgglos(value){
        const agglosArray = this.props.agglos[0].features.map((u) => (u.properties))
        const agglosValue = agglosArray.filter(u => (u.ID === value.value))
        return (agglosValue.map((a,i) => ({ value: a.Countryin_ID, label: a.NAME})))
    }

    render() {
        const countryList = this.props.africaContinent[0].features.map((c,i) => (
            { value: c.properties.ID, label: c.properties.NAME_EN }
            ))

        const agglosList = this.filterAgglos(this.props.selectedValue);

        return(
            <div>
                <Row className="no-padding">
                    <Col md={4} mdOffset={2}>
                        <Select
                            placeholder="Select Country"
                            isClearable={this.state.isClearable}
                            isSearchable={this.state.isSearchable}
                            value={this.props.selectedValue}
                            onChange={this.handleChange.bind(this)}
                            options={countryList}
                        />
                    </Col>
                    <Col md={4}>
                        <Select
                           placeholder="Select City"
                           isClearable={this.state.isClearable}
                           isSearchable={this.state.isSearchable}
                        //    value={this.props.selectedValue}
                        //    onChange={this.handleChange.bind(this)}
                           options={agglosList}
                           isDisabled={!this.props.selectedValue}
                        />
                    </Col>
                </Row>
                <br/>
                <CountryInfo 
                    selectedValue={this.props.selectedValue} 
                    countryData={this.props.countryData} />
            </div>
        );
    }
}

export default ExploreContent;
