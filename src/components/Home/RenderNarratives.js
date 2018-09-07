import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';

class RenderNarratives extends Component{
    
    _renderNarratives(selectedStory){
        
        const _story = this.props.narratives.find(s => s.id === selectedStory);
        if(_story.id === 0){
            return(
                <Col md={6} mdOffset={2} className="overview-wrapper">
                    <ul className="list-unstyled">
                        <li >
                            <h2>{_story.title}</h2>
                            <hr id="overview_hr"/>
                            <p>{_story.overview}</p>
                        </li>
                    </ul>
                </Col>
            )
        } else {
            return(
                <Col md={6} mdOffset={2} className="narrative-wrapper">
                    <ul className="list-unstyled">
                        <li>
                            <h2>{_story.title}</h2>
                            <h4>{_story.subtitle}</h4>
                            <hr id="b_narrative_hr"/>
                        </li>
                        <br/>
                        <li>
                            {this._renderNarrative_Text(_story.story)}
                        </li>
                    </ul>
                </Col>
                )
        }
       
    }
    
    _renderNarrative_Text(stories){
       
        return(
            stories.map((story) => (
            <div key={story.storyId}>
                <h5 id="n_h6">{story.storyTitle}</h5>
                <p>{story.storyText}</p>
                <br/>
                <br/>
            </div>
        )))
    }

    render(){
        return(
            <div>
                {this._renderNarratives(this.props.selectedStory)}
            </div>
        )
    }
}

export default RenderNarratives;

