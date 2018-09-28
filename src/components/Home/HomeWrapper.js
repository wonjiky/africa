import React, { Component } from 'react';
import HomeContent from './HomeContent';
import HomeMixer from './HomeMixer';
import Map from '../Map';
import { Grid, Row, Col } from 'react-flexbox-grid';

class HomeWrapper extends Component {

    constructor(props){
        super(props);
        this.state = {
            mixerToggle: true,
            mapToggle: true,
            collapseNav: true,
            mixerCol: 2,
            mapCol: 4,
            homeWrapperIsMounted: true,
            selectedContent:0,
            contentFilter:'narrative',

        };
        this.handleValueFromMixer = this.handleValueFromMixer.bind(this);
        this.handleValueFromMap = this.handleValueFromMap.bind(this);
        this.handleValueFromSearch = this.handleValueFromSearch.bind(this);
    }

    handleValueFromMixer(e){
  
        this.setState({
            selectedContent: e.ID,
            contentFilter: e.content
        })
    }

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

    render() {
        const story = this.props.narratives.map((narrative) => {
            return(narrative);
        })
        
        return(
            <Grid fluid className="full-height">
                <Row className="full-height">
                    <Col md={4} className="no-margin">
                    {/* {this._mapExpand(this.state.mapToggle)} */}
                        <Map 
                            africaOne={this.props.africaOne}
                            africaContinent={this.props.africaContinent}
                            agglosGeo={this.props.agglosGeo}
                            
                            homeWrapperIsMounted={this.state.homeWrapperIsMounted}
                            sendValueToContent={this.handleValueFromMap}
                        />
                    </Col>
                    <Col md={2} className="no-margin">
                    {/* {this._mixerExpand(this.state.mixerToggle)} */}
                        <HomeMixer 
                        narratives={story} 
                        treemap={this.props.treemap}
                        // onMixerToggle={this._onMixerToggle} 
                        // collapseNav={this.state.collapseNav}
                        contentSelect={this.handleValueFromMixer}
                        selectedContent={this.state.selectedContent}
                        contentFilter={this.state.contentFilter} 
                        />
                    </Col>
                    <Col md className="no-margin">
                        <HomeContent 
                        narratives={story}
                        treemap={this.props.treemap}
                        selectedContent={this.state.selectedContent}
                        contentFilter={this.state.contentFilter} 
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomeWrapper