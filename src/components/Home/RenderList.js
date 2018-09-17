import React, { Component } from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MaterialIcon from 'material-icons-react';


class RenderList extends Component {

    constructor(props){
        super(props)
    }

    _renderStoryList(stories){
    // if(this.props.collapseNav === true){
        console.log(this.props.selectedStory);
        return(
            <div >
                <h6><i className="material-icons" id="icon-size">public</i> Africapolis</h6>
                <ul className="list-unstyled">
                    {stories.map((story, i) => (
                        <li 
                        key={i} 
                        id={this.props.selectedStory === story.id ? 'clicked' : ' '}
                        onClick={() => this.props.handleClick(story)}>
                            <MaterialIcon icon="arrow_forward" size={15} color='#FFFFFF' />
                            {story.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    // else{
    //     return(
    //         <Dropdown direction="left" isOpen={this.state.storyList} toggle={() => { this.setState({ storyList: !this.state.storyList }); }}>
    //         <DropdownToggle >
    //         {/* <button className="dropdown-menu" type="button" aria-haspopup="true" aria-expanded="false"> */}
    //         <h6><i className="material-icons" id="icon-size">public</i> Africapolis</h6>
    //         {/* </button> */}
    //         </DropdownToggle>
    //         <DropdownMenu>
    //             {stories.map((story, index) => (
    //                 <DropdownItem key={index}>
    //                         {story.title}
    //                 </DropdownItem>
    //                 ))}
                 
    //         </DropdownMenu>
    //     </Dropdown>
    //     );
    // }
// }

_renderWhatsNew(stories) {
    // if(this.props.collapseNav === true){
        return(
            <div >
                <h6><MaterialIcon id="icons" icon="filter_none" size={17} color='#FFFFFF' /> What's New?</h6>
                <ul className="list-unstyled">
                    {stories.map((hello, index) => (
                        <li key={index}>
                            <MaterialIcon icon="arrow_forward" size={15} color='#FFFFFF' />
                            {hello.whatsnew}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
//     else{
//         return(
//             <Dropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
//             <DropdownToggle >
//             <h6><MaterialIcon id="icons" icon="filter_none" size={17} color='#FFFFFF' /> What's New?</h6>
//             </DropdownToggle>
//             <DropdownMenu>
//                 {stories.map((hello, index) => (
//                     <DropdownItem key={index}>
//                             {hello.whatsnew}
//                     </DropdownItem>
//                     ))}
                 
//             </DropdownMenu>
//         </Dropdown>
//         );
//     }
// }

_renderTreemap(stories) {
    // if(this.props.collapseNav === true){
        return(
            <div >
                <h6><MaterialIcon id="icons" icon="filter_none" size={17} color='#FFFFFF' /> Stories with data</h6>
                <ul className="list-unstyled">
                    {stories.map((hello, index) => (
                        <li key={index}>
                            <MaterialIcon icon="arrow_forward" size={15} color='#FFFFFF' />
                            {hello.whatsnew}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
//     else{
//         return(
//             <Dropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
//             <DropdownToggle >
//             <h6><MaterialIcon id="icons" icon="filter_none" size={17} color='#FFFFFF' /> What's New?</h6>
//             </DropdownToggle>
//             <DropdownMenu>
//                 {stories.map((hello, index) => (
//                     <DropdownItem key={index}>
//                             {hello.whatsnew}
//                     </DropdownItem>
//                     ))}
                 
//             </DropdownMenu>
//         </Dropdown>
//         );
//     }
// }

_renderDownloadFullData(){
    return(
        <ul className="list-unstyled">
            <li>
                <MaterialIcon icon="add_circle_outline" size={25} color='#FFFFFF' />
                <p>Annual Report<br/>2018</p>
            </li>
        </ul>
    )
}

render(){
    return(
        <Grid fluid id="mixer">
                <Col className={this.props.collapseNav ? "home-mixer-list" : "home-mixer-list"} >
                    {this._renderStoryList(this.props.narratives)}
                    <hr/>
                    {this._renderTreemap(this.props.narratives)}
                    <hr/>
                    {this._renderWhatsNew(this.props.narratives)}
                </Col>
                <Col md={12} className="mixer-download">
                    <hr />
                    <Col md={12} className="mixer-download-wrapper">
                        <Col md={6} className="mixer-download-item">
                            {this._renderDownloadFullData()}
                        </Col>
                        <Col md={6} className="mixer-download-item">
                            {this._renderDownloadFullData()}
                        </Col>
                    </Col>
                </Col>
            </Grid>
    )
}

}

export default RenderList;