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

    _handleClick(story){
        this.props.onClick(story);
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
            handleClick={this._handleClick.bind(this)} 
            narratives={this.props.narratives}
            selectedStory={this.props.selectedStory}     
        />
        );
    }

}

export default HomeMixer;