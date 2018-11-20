import React from 'react';
import Fade from 'react-reveal/Fade';
import '../../css/aboutus.css'



const AboutWrapper = props => {
    const english = props.aboutSwac_EN[0];
    const french = props.aboutSwac_FR[0];
    if(props.language === 0){
        return (
            <div className="about_main-container-wrapper">
                <div className="about_main-container">
                    <Fade bottom>
                        <div className="about_africapolis">
                            {english.intro_1}<br/>
                            {english.intro_2}
                        </div>
                        <div className="about_africapolis-logos">
                            <div className="africapolis_logos">
                                <img src="assets/images/swac-oecd.png" width="100%"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                            </div>
                            <div className="africapolis_logos">
                                <img src="assets/images/e-geopolis.png" width="80%"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="about_africapolis">
                            {english.intro_3}
                        </div>
                        <div className="about_africapolis-logos">
                            <div className="africapolis_logos">
                                <img src="assets/images/SDG-11.png" width="60%"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="about_africapolis">
                            <span>{english.swac_title}</span><br/>
                            {english.swac_text_1}
                            {english.swac_text_2}
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="about_africapolis">
                            <span>{english.member_title}</span><br/>
                            {english.members}
                        </div>
                    </Fade>
                    <Logos />
                </div>
            </div>
        )
    }else{
        return(
            <div className="about_main-container-wrapper">
                <div className="about_main-container">
                    <Fade bottom>
                        <div className="about_africapolis">
                            {french.intro_1}<br/>
                            {french.intro_2}
                        </div>
                        <div className="about_africapolis-logos">
                            <div className="africapolis_logos">
                                <img src="assets/images/oecd_fr.png" width="100%"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                            </div>
                            <div className="africapolis_logos">
                                <img src="assets/images/e-geopolis.png" width="80%"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="about_africapolis">
                            {french.intro_3}
                        </div>
                        <div className="about_africapolis-logos">
                            <div className="africapolis_logos">
                                <img src="assets/images/SDG-11.png" width="60%"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="about_africapolis">
                            <span>{english.swac_title}</span><br/>
                            {french.swac_text_1}
                            {french.swac_text_2}
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="about_africapolis">
                            <span>{french.member_title}</span><br/>
                            {french.members}
                        </div>
                    </Fade>
                    <Logos />
                </div>
            </div>
        )
    }
}

const Logos = () => {
    return (
        <Fade bottom>
            <div className="about_africapolis-logos-container">
                <div className="logo-container">
                    <img src="assets/images/austria.jpg" width="70%"
                        alt="Austria"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/belgium.png" width="70%"
                        alt="Belgium"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/canada.png" width="50%"
                        alt="Canada"/>    
                </div>
                <div className="logo-container">
                    <img src="assets/images/cliss.jpg" width="35%"
                        alt="Cliss"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/ECOWAS.jpg" width="35%"
                        alt="ECOWAS"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/EU.jpg" width="35%"
                        alt="EU"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/france.jpg" width="40%"
                        alt="France"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/lux.png" width="30%"
                        alt="Lux"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/netherlands.jpg" width="70%"
                        alt="Netherlands"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/switzerland.png" width="70%"
                        alt="Switzerland"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/UEMOA.jpg" width="50%"
                        alt="UEMOA"/>
                </div>
                <div className="logo-container">
                    <img src="assets/images/US.png" width="70%"
                        alt="US"/>
                </div>
            </div>
        </Fade>
    )   
}


export default AboutWrapper;
