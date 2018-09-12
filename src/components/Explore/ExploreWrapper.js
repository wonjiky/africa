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
            origin: '',
            
        };
        // this._onMixerToggle = this._onMixerToggle.bind(this); 
        this.fromMap_toSearch = this.fromMap_toSearch.bind(this)
        this.fromSearch_toMap = this.fromSearch_toMap.bind(this)
        this.handleValueFromMap = this.handleValueFromMap.bind(this)
        this.handleValueFromSearch = this.handleValueFromSearch.bind(this)
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

    fromSearch_toMap(value){
        return value
    }
    
    fromMap_toSearch(value){
        return value
    }

    handleValueFromSearch(valueFromSearch){
        this.setState({
            origin:'search',
            selectedCountry: valueFromSearch.value,
            selectedValue: valueFromSearch,
        })
        console.log(this.state.selectedValue);
        // console.log('VALUE FROM SEARCH :', this.state.selectedCountry, this.state.origin)
    }

    handleValueFromMap(valueFromMap){
        this.setState({
            origin:'map',
            selectedCountry: valueFromMap.value,
            selectedValue: valueFromMap,
        })
        console.log(this.state.selectedValue);
        // console.log('VALUE FROM MAP :', this.state.selectedCountry, this.state.origin)
    }

    render() {
        return(
            <Row className="full-height">
                <Col md={4} className="no-margin">
                {/* {this._mapExpand(this.state.mapToggle)} */}
                    <Map 
                        africaOne={this.props.africaOne}
                        top50={this.props.top50}
                        africaContinent={this.props.africaContinent}
                        agglosGeo={this.props.agglosGeo}
                        
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
                        countries={this.props.countries} 
                        narratives={this.props.narratives}
                        africaContinent={this.props.africaContinent}
                        
                        handleISO={this.handleValueFromSearch}
                        selectedValue={this.state.selectedValue}
                        />
                </Col>
            </Row>
        );

    }

}

export default ExploreWrapper;


/////////////////V3333333333//////
// import React, { Component } from 'react';
// import ExploreContent from './ExploreContent';
// import ExploreMixer from './ExploreMixer';
// import Map from '../Map';
// import '../../css/explore.css';
// import { Row, Col } from 'react-flexbox-grid';

// class ExploreWrapper extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             // mixerToggle: true,
//             // mapToggle: true,
//             // collapseNav: true,
//             // mixerCol: 2,
//             // mapCol: 4,
//             selectedCountryFromMap:'',
//             selectedCountryFromSearch: '',
//             origin: 'map',
            
//         };
//         // this._onMixerToggle = this._onMixerToggle.bind(this); 
//         this.fromMap_toSearch = this.fromMap_toSearch.bind(this)
//         this.fromSearch_toMap = this.fromSearch_toMap.bind(this)
//         this.handleValueFromMap = this.handleValueFromMap.bind(this)
//         this.handleValueFromSearch = this.handleValueFromSearch.bind(this)
//         // this.valueConvert = this.valueConvert.bind(this);
//     }
    
//     // _onMixerToggle() {
//     //     this.setState({
//     //         mixerToggle: !this.state.mixerToggle,
//     //         mapToggle: !this.state.mapToggle,
//     //         collapseNav: !this.state.collapseNav
//     //     });
//     // }

//     // _mixerExpand = (mixerToggle) => {
//     //     return(mixerToggle ? this.state.mixerCol : this.state.mixerCol-1);
//     // }
    
//     // _mapExpand(mapToggle) {
//     //     return(mapToggle ? this.state.mapCol : this.state.mapCol+3);
//     // }

//     fromSearch_toMap(value){
//         return value
//     }
    
//     fromMap_toSearch(value){
//         return value
//     }

//     valueConvert(value, convert){
//         const output = convert(value)
//         console.log(output)
//         return output;
        
//     }

//     handleValueFromSearch(selectedCountry){
//         this.setState({
//             origin:'search',
//             selectedCountry
//         })
//     }

//     handleValueFromMap(selectedCountry){
//         console.log(selectedCountry)
//         // this.setState({
//         //     // origin:'map',
//         //     // selectedCountry
//         // })
//     }

//     render() {
//         const origin = this.state.origin;
//         const selectedCountry = this.state.selectedCountry;
//         const valueForSearch = origin === 'map' ? this.valueConvert(selectedCountry, this.fromMap_toSearch) : selectedCountry;
//         const valueForMap = origin === 'search' ? this.valueConvert(selectedCountry, this.fromSearch_toMap) : selectedCountry;

//         return(
//                 <Row className="full-height">
//                     <Col md={4} className="no-margin">
//                     {/* {this._mapExpand(this.state.mapToggle)} */}
//                         <Map 
//                             africaOne={this.props.africaOne}
//                             top50={this.props.top50}
//                             africaContinent={this.props.africaContinent}
//                             agglosGeo={this.props.agglosGeo}
                            
//                             handleISO={this.handleValueFromMap}
//                             selectedCountryForMap={valueForMap}
//                         />
//                     </Col>
//                     <Col md={2} className="no-margin">
//                     {/* {this._mixerExpand(this.state.mixerToggle)} */}
//                         <ExploreMixer 
//                             narratives={this.props.narratives} 
//                             collapseNav={this.state.collapseNav}
//                             onMixerToggle={this._onMixerToggle} 
//                             mixerToggle={this._mixerToggle} 
//                             mapToggle={this._mapToggle}
//                             />
//                     </Col>
//                     <Col md className=" exp-content">
//                         <ExploreContent 
//                             countries={this.props.countries} 
//                             narratives={this.props.narratives}
//                             africaContinent={this.props.africaContinent}
                           
//                             handleISO={this.handleValueFromSearch}
//                             selectedCountry={valueForSearch}
//                             />
//                     </Col>
//                 </Row>
//         );

//     }

// }

// export default ExploreWrapper;
