import React from 'react';
import MaterialIcon from 'material-icons-react';
import {  FacebookIcon,  TwitterIcon,  LinkedinIcon} from 'react-share';

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
                                    <MaterialIcon icon="arrow_forward" size={10} color='#585858' />
                                    {story.title_en}
                                </li>
                            ))}
                        <hr />
                        <h6>{props.treemap[0].content_title_en}</h6>
                            {props.treemap.map((treemap, i) => (
                                <li key={i} className="home_mixer_lists" id={props.selectedContent === treemap.ID && 
                                    props.contentFilter === treemap.content ? 'clicked' : ' '}
                                    onClick={() => props.contentSelect(treemap)}>
                                    <MaterialIcon icon="arrow_forward" size={10} color='#585858' />
                                    {treemap.title_en}
                                </li>
                            ))}
                        <hr />
                        <h6>Download</h6>
                        <li className="home_mixer_lists">
                            <MaterialIcon icon="add" size={10} color='#585858' />
                            <a href="http://www.africapolis.org/download/Africapolis_country.xlsx">Country data</a>
                        </li>
                        <li className="home_mixer_lists">
                            <MaterialIcon icon="add" size={10} color='#585858' />
                            <a href="http://www.africapolis.org/download/Africapolis_agglomeration_2015.xlsx">Agglomeration data </a>
                        </li>
                        <li className="home_mixer_lists">
                            <MaterialIcon icon="add" size={10} color='#585858' />
                            <a href="http://www.africapolis.org/download/Africapolis_2015_shp.zip">GIS</a>
                        </li>
                    </ul>
                </div>
                <div className="home_mixer-download">
                        {/* {this._renderDownloadFullData()} */}
                        <div className="social-icons">
                            <a href="https://twitter.com/SWAC_OECD" target="_blank" rel="noopener noreferrer"><TwitterIcon size={32} round={true} /></a>
                            <a href="http://www.facebook.com/OECDSWAC" target="_blank" rel="noopener noreferrer"><FacebookIcon size={32} round={true}/></a>
                            <a href="https://www.linkedin.com/company/sahel-and-west-africa-club-club-du-sahel-et-l-afrique-de-l-ouest/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={32} round={true} /></a>
                        </div>
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
                                    <MaterialIcon icon="arrow_forward" size={10} color='#585858' />
                                    {story.title_fr}
                                </li>
                            ))}
                        <hr />
                        <h6>{props.treemap[0].content_title_fr}</h6>
                            {props.treemap.map((treemap, i) => (
                                <li key={i} className="home_mixer_lists" id={props.selectedContent === treemap.ID && 
                                    props.contentFilter === treemap.content ? 'clicked' : ' '}
                                    onClick={() => props.contentSelect(treemap)}>
                                    <MaterialIcon icon="arrow_forward" size={10} color='#585858' />
                                    {treemap.title_fr}
                                </li>
                            ))}
                        <hr />
                        <h6>Download</h6>
                        <li className="home_mixer_lists">
                                <MaterialIcon icon="add" size={10} color='#585858' />
                                <a href="http://www.africapolis.org/download/Africapolis_country.xlsx">Country data</a>
                            </li>
                            <li className="home_mixer_lists">
                                <MaterialIcon icon="add" size={10} color='#585858' />
                                <a href="http://www.africapolis.org/download/Africapolis_agglomeration_2015.xlsx">Agglomeration data </a>
                            </li>
                            <li className="home_mixer_lists">
                                <MaterialIcon icon="add" size={10} color='#585858' />
                                <a href="http://www.africapolis.org/download/Africapolis_2015_shp.zip">GIS</a>
                            </li>
                    </ul>
                </div>
                <div className="home_mixer-download">
                        {/* {this._renderDownloadFullData()} */}
                        <div className="social-icons">
                            <a href="https://twitter.com/SWAC_OECD" target="_blank" rel="noopener noreferrer"><TwitterIcon size={32} round={true} /></a>
                            <a href="http://www.facebook.com/OECDSWAC" target="_blank" rel="noopener noreferrer"><FacebookIcon size={32} round={true}/></a>
                            <a href="https://www.linkedin.com/company/sahel-and-west-africa-club-club-du-sahel-et-l-afrique-de-l-ouest/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={32} round={true} /></a>
                        </div>
                        <img src="assets/images/oecd_fr.png" width="100%"
                        alt="Africapolis Visualise Urbanisation in Africa"/>
                </div>
            </div>
        )
    }
}

export default HomeMixer;
