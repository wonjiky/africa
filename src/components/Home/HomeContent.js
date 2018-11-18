import React, { Component } from 'react';
import RenderTreemap from './RenderTreemap';
import { Link, Events } from 'react-scroll'


class HomeContent extends Component {
    componentDidMount() {
        document.getElementById('home_content-container-wrapper').addEventListener('scroll', this.handleScroll);
        Events.scrollEvent.register('begin', function() {
        });
        Events.scrollEvent.register('end', function() {
        });
    }

    componentWillUnmount(){
        document.getElementById('home_content-container-wrapper').removeEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.selectedContent !== this.props.selectedContent){
            document.getElementById('home_content-container-wrapper').scrollTop = 0;
        }
    }

    handleScroll = (event) => {
        let top = Math.round(event.srcElement.scrollTop);
        let bottom = Math.round(top + window.innerHeight);
        let triggerPoint = window.innerHeight/2;
        this.props.pageOffset(top, bottom, triggerPoint);
    }

    content(selectedContent, contentFilter, narratives, treemap, language){
        const storyList = narratives.find(s => s.ID === selectedContent);
        const treemapList = treemap.find(t => t.ID === selectedContent);

        if(language === 0) {
            //ENGLSISH
            if(storyList.ID === 0 && contentFilter === 'narrative'){
                return(
                    <div className="home_content-1" >
                        <div className="home_content-1-1">
                            <div>
                                <h2>{narratives[0].story_en[0].storytitle}</h2>
                                <hr id="overview_hr"/>
                                <p>{narratives[0].story_en[0].storyText}</p>
                                <div className="button-wrapper">
                                <Link containerId="home_content-container-wrapper" activeClass="selectedContent" to="second" spy={true} smooth={true} duration={500}>
                                    <i className="material-icons scrollTo_next">keyboard_arrow_down</i>
                                </Link> 
                                </div>
                            </div>
                        </div>
                        <div id="home_content-container-wrapper" name={'second'} className="home_content-1-2">
                            <div>
                                <h2>{narratives[0].story_en[1].storytitle}</h2>
                                <hr id="overview_hr"/>
                                <p>{narratives[0].story_en[1].storyText}</p>
                            </div>
                        </div>
                    </div>
                )
            } else if (storyList.ID !== 0 && contentFilter === 'narrative'){
                return(
                    <div className="home_content-2">
                        <ul className="list-unstyled">
                            <li className="story_main-title">
                                <h2>{storyList.title_en}</h2>
                                <hr id="b_narrative_hr"/>
                            </li>
                            {/* <br/> */}
                            {this.renderNarrative_Text(storyList.story_en)}
                        </ul>
                    </div>
                )
            } else if ((selectedContent === 0 && contentFilter === 'treemap') || (selectedContent && contentFilter === 'treemap')){
                return(
                    <RenderTreemap
                        language={language}
                        data={treemapList}
                        receiveValue={this.receiveValue.bind(this)}
                        receiveValue_click={this.receiveValue_click.bind(this)}
                    />
                )
            }
        }
    }

    // componentWillUnmount() {
    //     Events.scrollEvent.remove('begin');
    //     Events.scrollEvent.remove('end');
    //   }

    receiveValue(e) {
        this.props.valueFromTreemap(e);
    }

    receiveValue_click = (e) => {
        this.props.valueFromTreemap_click(e);
    }

    renderNarrative_Text(stories){
        return(
            stories.map((story, subtitleIndex) => (
                <li key={subtitleIndex} className={'story-'+subtitleIndex}>
                    <h5 id="n_h6">{story.storytitle}</h5>
                    {story.storyText.map((text, textIndex) => (
                        <p key={textIndex}>{text.text}</p>
                    ))}
                </li>
            ))
        )
    }

    navigateArrows() {
        return(
            <div>
                <button className='accordion' onClick={this.handleClick}>
                    <i className="material-icons">keyboard_arrow_down</i>
                </button>
                <button className='accordion' onClick={this.handleClick}>
                    <i className="material-icons">keyboard_arrow_down</i>
                </button>
            </div>
        )
    }

    render () {
        return(
            <div id="home_content-container-wrapper">
                <div id="home_content-container">
                    {this.content(this.props.selectedContent,
                        this.props.contentFilter,
                        this.props.narratives,
                        this.props.treemap,
                        this.props.language)}
                </div>
            </div>
        )
    }
}

export default HomeContent;
