import React, { Component } from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import MaterialIcon from 'material-icons-react';


class RenderList extends Component {

    _renderStoryList(stories){
        return(
            <div >
                <h6><i className="material-icons" id="icon-size">public</i> Africapolis</h6>
                <ul className="list-unstyled">
                    {stories.map((story, i) => (
                        <li 
                        key={i} 
                        id={this.props.selectedStory === story.id ? 'clicked' : ' '}
                        onClick={() => this.props.handleNarrative(story)}>
                            <MaterialIcon icon="arrow_forward" size={15} color='#FFFFFF' />
                            {story.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    _renderWhatsNew(stories) {
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

    _renderTreemap(treemap) {
            return(
                <div >
                    <h6><MaterialIcon id="icons" icon="filter_none" size={17} color='#FFFFFF' /> Data Driven Stories</h6>
                    <ul className="list-unstyled">
                        {treemap.map((s, index) => (
                            <li key={index} onClick={() => this.props.handleTreemap(s)}>
                                <MaterialIcon icon="arrow_forward" size={15} color='#FFFFFF' />
                                {s.title}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

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
                        {this._renderTreemap(this.props.treemap)}
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