import React, { Component } from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import MaterialIcon from 'material-icons-react';


class RenderList extends Component {

    list(stories, treemap, selectedContent, filter){
        return(
            <section>
                <ul className="list-unstyled">
                    <h6><i className="material-icons" id="icon-size">public</i> Africapolis</h6>
                        {stories.map((story, i) => (
                            <li 
                            key={i} 
                            id={selectedContent === story.ID && filter === story.content ? 'clicked' : ' '}
                            onClick={() => this.props.contentSelect(story)}>
                                <MaterialIcon icon="arrow_forward" size={15} color='#FFFFFF' />
                                {story.title}
                            </li>
                        ))}
                    <hr />    
                    
                    <h6><i className="material-icons" id="icon-size">public</i>Data Driven Stories</h6>
                    {treemap.map((treemap, i) => (
                        <li 
                        key={i} 
                        id={selectedContent === treemap.ID && filter === treemap.content ? 'clicked' : ' '}
                        onClick={() => this.props.contentSelect(treemap)}>
                            <MaterialIcon icon="arrow_forward" size={15} color='#FFFFFF' />
                            {treemap.title}
                        </li>
                    ))}
                </ul>

            </section>
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
                        {this.list(this.props.narratives, this.props.treemap, this.props.selectedContent, this.props.contentFilter)}
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