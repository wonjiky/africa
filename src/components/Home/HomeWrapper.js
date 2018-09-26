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
        // this._onMixerToggle = this._onMixerToggle.bind(this); 
        this._storyList = this._storyList.bind(this);
        this._treemapList = this._treemapList.bind(this);
    }

    //Exapnd and Shrink Map

    // _onMixerToggle() {
    //     this.setState({
    //         mapToggle: !this.state.mapToggle,
    //         mixerToggle: !this.state.mixerToggle,
    //         collapseNav: !this.state.collapseNav
    //     });
    // }
    
    // _mixerExpand(mixerToggle) {return(mixerToggle ? this.state.mixerCol : this.state.mixerCol-1);}
    // _mapExpand(mapToggle) {return(mapToggle ? this.state.mapCol : this.state.mapCol+3);}

    _storyList(e){
        this.setState({
            selectedStory: e.id
        })
    }

    _treemapList(e){
        this.setState({
            selectedTreemap: e.ID
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
                           agglosGeo={this.props.agglosGeo}
                           handleISO={this.handleISO}
                        />
                    </Col>
                    <Col md={2} className="no-margin">
                    {/* {this._mixerExpand(this.state.mixerToggle)} */}
                        <HomeMixer 
                        narratives={story} 
                        treemap={this.props.treemap}
                        // onMixerToggle={this._onMixerToggle} 
                        collapseNav={this.state.collapseNav}
                        narrativeClick={this._storyList}
                        treemapClick={this._treemapList}
                        selectedStory={this.state.selectedStory} 
                        />
                    </Col>
                    <Col md className="no-margin">
                        <HomeContent 
                        narratives={story}
                        // collapseNav={this.state.collapseNav}
                        selectedStory={this.state.selectedStory}
                        selectedTreemap={this.state.selectedTreemap} 
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomeWrapper