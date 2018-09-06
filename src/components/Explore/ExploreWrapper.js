import React, { Component } from 'react';
import ExploreContent from './ExploreContent';
import ExploreMixer from './ExploreMixer';
import Map from '../Map';
import '../../css/explore.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class ExploreWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            mixerToggle: true,
            mapToggle: true,
            collapseNav: true,
            mixerCol: 2,
            mapCol: 4,
            fromMap: "",
            fromContent: ''
        };
        this._onMixerToggle = this._onMixerToggle.bind(this); 
        this._onChangeISO_CONTENT = this._onChangeISO_CONTENT.bind(this)
        this._onChangeISO_MAP = this._onChangeISO_MAP.bind(this)
    }
    componentDidMount(){
    }
    _onMixerToggle() {
        this.setState({
            mixerToggle: !this.state.mixerToggle,
            mapToggle: !this.state.mapToggle,
            collapseNav: !this.state.collapseNav
        });
    }

    _mixerExpand(mixerToggle) {
        return(
            mixerToggle ? this.state.mixerCol : this.state.mixerCol-1
        );
    }
    
    _mapExpand(mapToggle) {
        return(
            mapToggle ? this.state.mapCol : this.state.mapCol+3
        );
    }

    _onChangeISO_CONTENT(e) {
    
        const value = this.props.countries.find(u => u.ISO  === e.target.value);
        this.setState({
            fromContent: value
        });
    }

    _onChangeISO_MAP(e){
         this.setState({
            fromMap:e
        })
    }

    render() {
        return(
            <Grid fluid className="full-height">
                <Row className="full-height">
                    <Col md={this._mapExpand(this.state.mapToggle)} className="no-margin">
                        <Map 
                            africaOne={this.props.africaOne}
                            top50={this.props.top50}
                            africaContinent={this.props.africaContinent}
                            agglosGeo={this.props.agglosGeo}
                            onChange={this._onChangeISO_MAP}
                        />
                    </Col>
                    <Col md={this._mixerExpand(this.state.mixerToggle)} className="no-margin">
                        <ExploreMixer 
                            narratives={this.props.narratives} 
                            collapseNav={this.state.collapseNav}
                            onMixerToggle={this._onMixerToggle} 
                            mixerToggle={this._mixerToggle} 
                            mapToggle={this._mapToggle}
                            />
                    </Col>
                    <Col md className="no-margin">
                        <ExploreContent 
                            onChange={this._onChangeISO_CONTENT}
                            countries={this.props.countries} 
                            narratives={this.props.narratives}
                            africaContinent={this.props.africaContinent}
                            selectedCountry={this.state.fromContent} 
                            />
                    </Col>
                </Row>
            </Grid>
        );

    }

}

export default ExploreWrapper;

							
