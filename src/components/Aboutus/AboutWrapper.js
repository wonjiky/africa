import React, { Component } from 'react';
// import AboutContent from './AboutContent';
import Map from '../Map';
import { Grid, Row, Col } from 'react-flexbox-grid';

class AboutWrapper extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        const story = this.props.narratives.map((narrative) => {
            return(narrative);
        })
        return(
            <Grid fluid className="full-height">
                <Row className="full-height">
                    <Col md={4} className="no-margin">
                        <Map />
                    </Col>
                    <Col md={8} className="no-margin">
                        {/* <AboutContent 
                            whatsnew={this.props.whatsnew}
                            narratives={story} 
                            treemap={this.props.treemap}
                            contentSelect={this.handleValueFromMixer}
                            selectedContent={this.state.selectedContent}
                            valueFromTreemap={this.handleValueFromTreemap}
                            contentFilter={this.state.contentFilter} 
                        /> */}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default AboutWrapper