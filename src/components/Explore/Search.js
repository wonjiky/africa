import React, { Component } from 'react';
import { Input, Form } from 'reactstrap';
import { Row, Col } from 'react-flexbox-grid';
import Select from 'react-select';


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            isClearable: true,
            isSearchable: true,
        };
    }
    
    // countryChange( e ) {
    //     const toInt = parseInt(e.target.value, 10);
    //     //Match the id from Map & countries.js
    //     const value = this.props.countries.find(u => u.ISO  === e.target.value);
    //     console.log(this.props)
    //     this.setState({
    //         selectedCountry: value
    //     });
    // }

    list(continentList){
        return (
            <Form id="exampleSelect">
                <Input type="select" onChange={(this.sendValue.bind(this))}>
                <option value="d">Select Country</option>
                {continentList.features.map((a,i) => (
                <option key={i} value={a.properties.ISO3_CODE}> {a.properties.NAME_EN} </option> ))}
                </Input>
            </Form>
        )
    }

    onChange = d => {
        if(d === null){
            this.setState({d:''})    
        }else{
        this.props.onChange(d.value)     
        }
    }


    render() {
        
        const list = this.props.africaContinent[0].features.map((a,i) => (
            { value: a.properties.ISO3_CODE, label: a.properties.NAME_EN }
            ))

        return(
                <Row bottom='md' id="search-section">
                    {/* <Col md={4} mdOffset={2} className="country-search">
                        {this.list(this.props.africaContinent[0])}
                    </Col> */}
                    <Col md={4} mdOffset={2}>
                        <Select
                            placeholder="Select Country"
                            isClearable={this.state.isClearable}
                            isSearchable={this.state.isSearchable}
                            onChange={this.onChange}
                            options={list}
                        />
                    </Col>
                    <Col md={4}>
                        <Select
                            // placeholder="Select Country"
                            // isClearable={this.state.isClearable}
                            // isSearchable={this.state.isSearchable}
                            // onChange={this.Change}
                            // options={list}
                        />
                    </Col>
                </Row>
        );
    }
}

export default Search;
  