import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import  CountryInfo  from './CountryInfo';
import Search from './Search';

class ExploreContent extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    sendValue(e){
        this.props.onChange(e)
    }

    render() {
        return(
            <Grid fluid className="exp-content">
                <Search 
                    africaContinent={this.props.africaContinent} 
                    selectedCountry={this.props.selectedCountry}
                    onChange={this.sendValue.bind(this)} />
                <CountryInfo 
                    selectedCountry={this.props.selectedCountry} 
                    countries={this.props.countries} />
            </Grid>        
        );
    }
    

}

export default ExploreContent;
  

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