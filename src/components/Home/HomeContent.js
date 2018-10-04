import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RenderContent from './RenderContent';
import RenderList from './RenderList';
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
    
    valueFromTreemap(e){
        this.props.valueFromTreemap(e);
    }

    contentSelect(e){
        this.props.contentSelect(e);
    }
    
    render() {
        return(
            <Grid fluid className="content">
                <Row className="content-row">
                    <Col md={3} className="mixers">
                        <RenderList 
                            contentSelect={this.contentSelect.bind(this)} 
                            narratives={this.props.narratives}
                            treemap={this.props.treemap}
                            selectedContent={this.props.selectedContent}   
                            contentFilter={this.props.contentFilter} 
                        />                
                    </Col>
                    <Col md={9} className="homeContent">
                        <RenderContent 
                            narratives={this.props.narratives}
                            treemap={this.props.treemap} 
                            selectedContent={this.props.selectedContent}
                            contentFilter={this.props.contentFilter} 
                            valueFromTreemap={this.valueFromTreemap.bind(this)}
                        />
                    </Col>
                </Row>
            </Grid>
        );

    }
}

export default HomeContent;