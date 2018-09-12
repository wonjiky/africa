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
                {/* <CountryInfo 
                    selectedCountryInfo={this.props.selectedValue} 
                    countries={this.props.countries} /> */}
            </div>
        );
    }
}

export default ExploreContent;
  

// 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)

// <Col md={4} className="country-search">
// <Form id="exampleSelect">
//     <Input type="select" onChange={this.sendValue} >
//         <option value="d">Select Country</option>
//         {this.props.africaContinent[0].features.map((a,i) => (
//         <option key={i} value={a.properties.ISO3_CODE}> {a.properties.NAME_EN} </option>
//         ))}
//         {options}
//     </Input>
// </Form>
// </Col>


// <Autocomplete
//     items= {options}
//     shouldItemRender={(item, value) => 
//         item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
//     }
//     getItemValue={item => item.label}
//     renderItem={(item, highlighted) =>
//         <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}> 
//         {item.label} </div>
//     }

//     inputProps={inputProps}

//     // onChange={e => this.setState({ hi: e.target.value })}
//     // onSelect={hi => this.setState({ hi })}
//     // value={this.state.hi}
//     //e => this.setState({ hi: e.target.value })}
//     onChange={this.textChange} 
//     // onSelect={typedText => this.setState({ typedText })}
//     onSelect={typedText => this.setState({ typedText })}//this.onSelectCountry(typedText)}
//     value={this.state.typedText}

// />