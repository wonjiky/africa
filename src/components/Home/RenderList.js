import React, { Component } from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import MaterialIcon from 'material-icons-react';
import { Link, Events, scroller } from 'react-scroll'


class RenderList extends Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', function() {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function() {
            console.log("end", arguments);
        });
    }
    
    scrollTo(e) {
        console.log(e)
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      } 

    list(stories, treemap, selectedContent, filter, overview){
        return(
            <section>
                <ul className="list-unstyled">
                {/* <i className="material-icons" id="icon-size">public</i> */}
                    <h6>What is Africapolis</h6>
                    <li>
                        <Link onClick={() => this.props.contentSelect('overview')} containerId="scroll-container" activeClass="selectedContent" to="overview" spy={true} smooth={true} duration={500}>
                        <MaterialIcon icon="arrow_forward" size={15} color='#585858' />{overview.title}</Link>
                    </li>
                    <hr />    
                    <h6>Engaging Narratives</h6>
                    {stories.map((story, i) => (
                        <li key={'story-'+i}>
                        {/* this.props.contentSelect(story)}> */}
                            <Link onClick={() => this.props.contentSelect(story)} containerId="scroll-container" activeClass="selectedContent" to={'story-'+i}  spy={true} smooth={true} duration={500}>
                                <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                                {story.title}
                            </Link>
                        </li>
                    ))}
                    <hr />    
                    {/* <i className="material-icons" id="icon-size">public</i> */}
                    <h6>Data Driven Stories</h6>
                    {treemap.map((treemap, i) => (
                        <li 
                        key={i} 
                        id={selectedContent === treemap.ID && filter === treemap.content ? 'clicked' : ' '}
                        onClick={() => this.props.contentSelect(treemap)}>
                            <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                            {treemap.title}
                        </li>
                    ))}
                </ul>

            </section>
        );
    }

    renderWhatsNew(stories) {
            return(
                <div >
                    {/* <MaterialIcon id="icons" icon="filter_none" size={17} color='#585858' />  */}
                    <h6>What's New?</h6>
                    <ul className="list-unstyled">
                        {stories.map((hello, index) => (
                            <li key={index}>
                                <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
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
                    <Col className="home-mixer-list" >
                        {this.list(
                            this.props.narratives, 
                            this.props.treemap, 
                            this.props.selectedContent, 
                            this.props.contentFilter,
                            this.props.overview)}
                        <hr/>
                        {this.renderWhatsNew(this.props.narratives)}
                    </Col>
                    <Col md={12} className="mixer-download">
                            <img src="assets/images/swac-oecd.png" width="100%"
                            alt="Africapolis Visualise Urbanisation in Africa"/>
                    </Col>
                </Grid>
        )
    }

}

export default RenderList;