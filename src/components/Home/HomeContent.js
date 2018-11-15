import React, { Component } from 'react';
import RenderTreemap from './RenderTreemap';
// import { Events } from 'react-scroll'


class HomeContent extends Component {
    componentDidUpdate(prevProps) {
        // console.log(prevProps.selectedContent, this.props.selectedContent)
        if(prevProps.selectedContent !== this.props.selectedContent){
            document.getElementById('home_content-container').scrollTo(0,0)
        }
    }

    content(selectedContent, contentFilter, narratives, treemap, language){
        const storyList = narratives.find(s => s.ID === selectedContent);
        const treemapList = treemap.find(t => t.ID === selectedContent);

        console.log(selectedContent, contentFilter, narratives)

        if(language === 0) {
            //ENGLSISH
            if(storyList.ID === 0 && contentFilter === 'narrative'){
                return(
                    <div className="home_content-1">
                            <div className="home_content-1-1">
                                <h2>{narratives[0].story_en[0].storytitle}</h2>
                                <hr id="overview_hr"/>
                                <p>{narratives[0].story_en[0].storyText}</p>
                            </div>
                            {/* <div className="home_content-1-2">
                                <h2>{narratives[0].story[1].storytitle_en}</h2>
                                <hr id="overview_hr"/>
                                <p>{narratives[0].story[1].storyText_en}</p>
                            </div>
                            <div className="home_content-1-3">
                                <h2>{narratives[0].story[2].storytitle_en}</h2>
                                <hr id="overview_hr"/>
                                <p>{narratives[0].story[2].storyText_en}</p>
                            </div> */}
                    </div>
                )
            } else if (storyList.ID !== 0 && contentFilter === 'narrative'){
                return(
                    <div className="home_content-2">
                        <ul className="list-unstyled">
                            <li>
                                <h2>{storyList.title_en}</h2>
                                <h4>{storyList.subtitle_en}</h4>
                                <hr id="b_narrative_hr"/>
                            </li>
                            <br/>
                            <li>
                                {this.renderNarrative_Text(storyList.story)}
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
                                <h2>{narratives[0].story[0].storytitle_fr}</h2>
                                <hr id="overview_hr"/>
                                <p>{narratives[0].story[0].storyText_fr}</p>
                            </div>
                            <div className="home_content-1-2">
                                <h2>{narratives[0].story[1].storytitle_fr}</h2>
                                <hr id="overview_hr"/>
                                <p>{narratives[0].story[1].storyText_fr}</p>
                            </div>
                            <div className="home_content-1-3">
                                <h2>{narratives[0].story[2].storytitle_fr}</h2>
                                <hr id="overview_hr"/>
                                <p>{narratives[0].story[2].storyText_fr}</p>
                            </div>
                    </div>
                )
            } else if (storyList.ID !== 0 && contentFilter === 'narrative'){
                return(
                    <div className="home_content-2">
                        <ul className="list-unstyled">
                            <li>
                                <h2>{storyList.title_fr}</h2>
                                <h4>{storyList.subtitle_fr}</h4>
                                <hr id="b_narrative_hr"/>
                            </li>
                            <br/>
                            <li>
                                {this.renderNarrative_Text(storyList.story)}
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
                <h5 id="n_h6">{story.storytitle_en}</h5>
                <p>{story.storyText_en}</p>
                <br/>
                <br/>
            </div>
        )))
    }

    render () {
        return(
            <div id="home_content-container">
                {this.content(this.props.selectedContent,
                    this.props.contentFilter,
                    this.props.narratives,
                    this.props.treemap,
                    this.props.language)}
            </div>
        )
    }
}

export default HomeContent;
