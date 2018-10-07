import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import RenderTreemap from './RenderTreemap';

class RenderContent extends Component{

    renderContent(contentID, filter, narratives, treemaps, overview){

        if(filter === 'overview'){
            return(
                <Col md={6} mdOffset={2} id="scroll-container" className="content-wrapper">
                    <div className="content-overview" name="overview">
                        <h2>{overview.title}</h2>
                        <hr id="overview_hr"/>
                        <p>{overview.text}</p>
                    </div>
                </Col>
            )
        }else if(filter === 'narrative' && filter !== 'treemap' || 'overview'){
            return(
                <Col md={6} mdOffset={2} id="scroll-container" className="content-wrapper">
                    <ul>
                        {narratives.map((u,i) =>(
                            <li className='list-unstyled content-narratives' key={i} name={'story-'+i}>
                                <h2>{u.title}</h2>
                                <h4>{u.subtitle}</h4>
                                <hr id="b_narrative_hr"/>
                                {this.renderNarrative_Text(u.story)}
                            </li>
                        ))}
                    </ul>
                    {/* <RenderTreemap data={data} receiveValue={this.receiveValue.bind(this)}/> */}
                </Col>
            )
        }else if(filter === 'treemap' && filter !== 'narrative' || 'overview'){
            const treemapList = treemaps.find(t => t.ID === contentID);
            const data = treemapList.data;
            return(
                <RenderTreemap
                    data={data}
                    receiveValue={this.receiveValue.bind(this)}
                />
            )
        }

        // if(storyList.ID === 0 && filter === 'narrative'){
        //     return(
        //         <Col md={6} mdOffset={2} className="overview-wrapper">
        //             <ul className="list-unstyled">
        //                 <li >
        //                     <h2>{narratives[0].title}</h2>
        //                     <hr id="overview_hr"/>
        //                     <p>{narratives[0].overview}</p>
        //                 </li>
        //             </ul>
        //         </Col>
        //     )
        // } else if (storyList.ID !== 0 && filter === 'narrative'){
        //     return(
        //         <Col md={6} mdOffset={2} className="narrative-wrapper">
        //         <ul className="list-unstyled">
        //             <li>
        //                 <h2>{storyList.title}</h2>
        //                 <h4>{storyList.subtitle}</h4>
        //                 <hr id="b_narrative_hr"/>
        //             </li>
        //             <br/>
        //             <li>
        //                 {this.renderNarrative_Text(storyList.story)}
        //             </li>
        //         </ul>
        //     </Col>
        //     )
        // } else if ((contentID === 0 && filter === 'treemap') || (contentID && filter === 'treemap')){
        //     const treemapList = treemaps.find(t => t.ID === contentID);
        //     const data = treemapList.data;
        //     return(
        //         <RenderTreemap
        //             data={data}
        //             receiveValue={this.receiveValue.bind(this)}
        //         />
        //     )
        // }
    }

    receiveValue(e){
        this.props.valueFromTreemap(e);
    }

    renderNarrative_Text(stories){
        return(
            stories.map((story,i) => (
            <div key={i}>
                <h5 id="n_h6">{story.storyTitle}</h5>
                <p>{story.storyText}</p>
                <br/>
                <br/>
            </div>
        )))
    }

    render(){
        return(
            <div className="renderContentWrapper">
                {this.renderContent(
                    this.props.selectedContent, 
                    this.props.contentFilter, 
                    this.props.narratives, 
                    this.props.treemap,
                    this.props.overview
                    )}
            </div>
        )
    }
}

export default RenderContent;

