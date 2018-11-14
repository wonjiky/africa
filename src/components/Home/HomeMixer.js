import React from 'react';
import MaterialIcon from 'material-icons-react';
// import { Link, Events, scroller } from 'react-scroll'
    
const HomeMixer = props => {
    if(props.language === 0 ) {
        return(
            <div className="home_mixer-wrapper">
                <div className="home_mixer-list">
                    <ul className="list-unstyled">
                        <h6>{props.narratives[0].content_title_en}</h6>
                            {props.narratives.map((story, i) => (
                                <li key={i} className="home_mixer_lists" id={props.selectedContent === story.ID && 
                                        props.contentFilter === story.content ? 'clicked' : ' '}
                                        onClick={() => props.contentSelect(story)}>
                                    <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                                    {story.title_en}
                                </li>
                            ))}
                        <hr />
                        <h6>{props.treemap[0].content_title_en}</h6>
                            {props.treemap.map((treemap, i) => (
                                <li key={i} className="home_mixer_lists" id={props.selectedContent === treemap.ID && 
                                    props.contentFilter === treemap.content ? 'clicked' : ' '}
                                    onClick={() => props.contentSelect(treemap)}>
                                    <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                                    {treemap.title_en}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="home_mixer-download">
                        {/* {this._renderDownloadFullData()} */}
                        <img src="assets/images/oecd_en.png" width="100%"
                        alt="Africapolis Visualise Urbanisation in Africa"/>
                </div>
            </div>
        );
    }else{
        return(
            <div className="home_mixer-wrapper">
                <div className="home_mixer-list">
                    <ul className="list-unstyled">
                        <h6>{props.narratives[0].content_title_fr}</h6>
                            {props.narratives.map((story, i) => (
                                <li key={i} className="home_mixer_lists" id={props.selectedContent === story.ID && 
                                        props.contentFilter === story.content ? 'clicked' : ' '}
                                        onClick={() => props.contentSelect(story)}>
                                    <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                                    {story.title_fr}
                                </li>
                            ))}
                        <hr />
                        <h6>{props.treemap[0].content_title_fr}</h6>
                            {props.treemap.map((treemap, i) => (
                                <li key={i} className="home_mixer_lists" id={props.selectedContent === treemap.ID && 
                                    props.contentFilter === treemap.content ? 'clicked' : ' '}
                                    onClick={() => props.contentSelect(treemap)}>
                                    <MaterialIcon icon="arrow_forward" size={15} color='#585858' />
                                    {treemap.title_fr}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="home_mixer-download">
                        {/* {this._renderDownloadFullData()} */}
                        <img src="assets/images/oecd_fr.png" width="100%"
                        alt="Africapolis Visualise Urbanisation in Africa"/>
                </div>
            </div>
        )
    }
}

export default HomeMixer;
