import React, { Component } from 'react';
import RenderList from './RenderList';
// import Button from '@material-ui/core/Button';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';

class HomeMixer extends Component {

    constructor(props){
        super(props)
        this.state = {
            storyList: false,
            btnDropleft: false,
            overviewList: false
        };
    }

    _narrativeSelect(story){
        this.props.narrativeClick(story);
    }

    _treemapSelect(treemap){
        console.log(treemap);
        this.props.treemapClick(treemap);
    }
    
    // _mixerButton(yes){
    //     if(yes === true){
    //         return(
    //             <ChevronRight/>
    //         )
    //     }else{
    //         return(
    //             <ChevronLeft/>
    //         )
    //     }
    // }

    render() {
        return(
          <RenderList 
            handleNarrative={this._narrativeSelect.bind(this)} 
            handleTreemap={this._treemapSelect.bind(this)} 
            narratives={this.props.narratives}
            
            treemap={this.props.treemap}
            selectedStory={this.props.selectedStory}     
        />
        );
    }

}

export default HomeMixer;