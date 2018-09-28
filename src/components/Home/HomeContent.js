import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import RenderContent from './RenderContent';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

class HomeContent extends Component {

    _storyButtons(){
        return(
            <div>
                <Button color="primary" id="story-button-right" onClick={this._goToNextSlide}>
                    <ChevronRight/>
                </Button>
                <Button color="primary" id="story-button-left" onClick={this._goToPrevSlide}>
                    <ChevronLeft/>
                </Button>
            </div>
        )
    }
    
    render() {
        return(
            <Grid fluid className="content">
                <Row className="content-row">
                    {this._storyButtons()}
                    <RenderContent 
                        narratives={this.props.narratives}
                        treemap={this.props.treemap} 
                        selectedContent={this.props.selectedContent}
                        contentFilter={this.props.contentFilter} 
                    />
                </Row>
            </Grid>
        );

    }
}

export default HomeContent;