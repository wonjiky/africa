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
            selectedStory: 0
        };
        this._onMixerToggle = this._onMixerToggle.bind(this); 
        this._storyList = this._storyList.bind(this)
        this._onChangeISO_MAP = this._onChangeISO_MAP.bind(this)
    }

    _onMixerToggle() {
        this.setState({
            mapToggle: !this.state.mapToggle,
            mixerToggle: !this.state.mixerToggle,
            collapseNav: !this.state.collapseNav
        });
    }
    
    _storyList(e){
        this.setState({
            selectedStory: e.id
        })
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

    _onChangeISO_MAP(){

    }
    render() {
        const story = this.props.narratives.map((narrative) => {
            return(narrative);
        })
        
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
                        <HomeMixer 
                        narratives={story} 
                        onMixerToggle={this._onMixerToggle} 
                        collapseNav={this.state.collapseNav}
                        onClick={this._storyList}
                        selectedStory={this.state.selectedStory} 
                        />
                    </Col>
                    <Col md className="no-margin">
                        <HomeContent 
                        narratives={story} 
                        collapseNav={this.state.collapseNav}
                        selectedStory={this.state.selectedStory} 
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomeWrapper