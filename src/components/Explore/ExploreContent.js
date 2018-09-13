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
        };
    }

    handleChange(e){
        this.props.handleISO(e)
    }

    render() {
        const list = this.props.africaContinent[0].features.map((a,i) => (
            { value: a.properties.ID, label: a.properties.NAME_EN }
            ))
        
        
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
                            options={list}
                        />
                    </Col>
                    <Col md={4}>
                        <Select
                        />
                    </Col>
                </Row>
                <br/>
                <CountryInfo 
                    selectedCountryInfo={this.props.selectedValue} 
                    countries={this.props.countries} />
            </div>
        );
    }
}

export default ExploreContent;
