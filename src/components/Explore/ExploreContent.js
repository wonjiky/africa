import React, { Component } from 'react';
import { Input, Form } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import  CountryInfo  from './CountryInfo';

class ExploreContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            ho: '',
            // selectedCountr: 0
        };
        this.countryChange = this.countryChange.bind(this)
        this._sendVal = this._sendVal.bind(this)
    }

    componentDidMount(){
    }
    
    countryChange( e ) {
        // // const toInt = parseInt(e.target.value, 10);
        // //Match the id from Map & countries.js
        // const value = this.props.countries.find(u => u.ISO  === e.target.value);
        // console.log(this.props)
        // this.setState({
        //     selectedCountry: value
        // });
    }

    _sendVal(e){
        // const value = this.props.countries.find(u => u.ISO  === e.target.value);
        // console.log(this.props)
        // this.setState({
        //     selectedCountry: value
        // });
        // console.log(this.props)
        this.props.onChange(e)
    }

    render() {
    
        return(
            <Grid fluid className="exp-content">
                <Row id="search-section">
                    <Col md={4} mdOffset={2} className="country-search">
                        <Form id="exampleSelect">
                            <Input type="select" onChange={this._sendVal} >
                                <option value="d">Select Country</option>
                                {this.props.africaContinent[0].features.map((a,i) => (
                                <option key={i} value={a.properties.ISO3_CODE}> {a.properties.NAME_EN} </option>
                                ))}
                            </Input>
                        </Form>
                    </Col>
                    <Col md={4} className="country-search">
                        <Form id="exampleSelect">
                            <Input type="select" onChange={(this.countryChange.bind(this))}>
                                <option value="d">Select City</option>
                                {/* {this.props.countries.map((item) => ( <option type="number" key={item.id} value={item.id}> { item.capital } </option> ))} */}
                            </Input>
                        </Form>
                    </Col>
                </Row>
                <CountryInfo selectedCountry={this.props.selectedCountry} countries={this.props.countries}/>
            </Grid>        
        );
    }

}

export default ExploreContent;
