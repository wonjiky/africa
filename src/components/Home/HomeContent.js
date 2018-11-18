import React, { Component } from 'react';
import RenderTreemap from './RenderTreemap';
import { Link, Events, scroller } from 'react-scroll'


class HomeContent extends Component {
    componentDidMount() {
        document.getElementById('home_content-container-wrapper').addEventListener('scroll', this.handleScroll);
        Events.scrollEvent.register('begin', function() {
        });
        Events.scrollEvent.register('end', function() {
        });
    }

    normalize(value, min, max){
        return (value - min) / (max - min);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.selectedContent !== this.props.selectedContent){
            document.getElementById('home_content-container-wrapper').scrollTop = 0;
        }
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
                            <li>
                                <h2>{storyList.title_en}</h2>
                                <hr id="b_narrative_hr"/>
                            </li>
                            {/* <br/> */}
                            <li>
                                {this.renderNarrative_Text(storyList.story_en)}
                            </li>
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
        }else{
            //FRENCH
            if(storyList.ID === 0 && contentFilter === 'narrative'){
                return(
                    <div className="home_content-1">
                         <div className="home_content-1-1">
                                <div>
                                    <h2>{narratives[0].story_fr[0].storytitle}</h2>
                                    <hr id="overview_hr"/>
                                    <p>{narratives[0].story_fr[0].storyText}</p>
                                </div>
                            </div>
                            <div className="home_content-1-2">
                                <div>
                                    <h2>{narratives[0].story_fr[1].storytitle}</h2>
                                    <hr id="overview_hr"/>
                                    <p>{narratives[0].story_fr[1].storyText}</p>
                                </div>
                            </div>
                            <div className="home_content-1-3">
                                <div>
                                    <h2>{narratives[0].story_fr[2].storytitle}</h2>
                                    <hr id="overview_hr"/>
                                    <p>{narratives[0].story_fr[2].storyText}</p>
                                </div>
                            </div>
                    </div>
                )
            } else if (storyList.ID !== 0 && contentFilter === 'narrative'){
                return(
                    <div className="home_content-2">
                        <ul className="list-unstyled">
                            <li>
                                <h2>{storyList.title_fr}</h2>
                                <hr id="b_narrative_hr"/>
                            </li>
                            <br/>
                            <li>
                                {this.renderNarrative_Text(storyList.story_fr)}
                            </li>
                        </ul>
                    </div>
                )
            } else if ((selectedContent === 0 && contentFilter === 'treemap') || (selectedContent && contentFilter === 'treemap')){
                return(
                    <RenderTreemap
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
            stories.map((story,i) => (
            <div key={i}>
                <h5 id="n_h6">{story.storytitle}</h5>
                {/* <p>{story.storyText}</p> */}
                {this.renderNarrative(story.storyText)}
                <br/>
                <br/>
            </div>
        )))
    }

    renderNarrative(story){
        return(
            story.map((text, i) => (
                <div key={i}>
                    <p> {text.text1}</p><br/>
                    <p> {text.text2}</p><br/>
                    <p> {text.text3}</p><br/>
                    <p> {text.text4}</p><br/>
                </div>
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
