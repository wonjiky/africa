import React from 'react';
import HamburgerButton from './HamburgerButton';
import { NavLink } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-128268752-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// const DrawerToggleButton = props => (
//     <button className="toggle-button" onClick={props.click}>
//         <div className="toggle-button_line" />
//         <div className="toggle-button_line" />
//         <div className="toggle-button_line" />
//     </button>
// );


export const Header = props => {

    if(props.language === 0){
        return(
            <header className="header">
            <nav className="header_navigation">
                <div className="header_toggle-button">
                    <HamburgerButton click={props.drawerClickHandler}/>
                </div>
                <div className="header_logo">
                    <NavLink to="/">
                        <img src="assets/images/africapolis_en.png" height='100%' className="logo_long"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                        <img src="assets/images/africapolis_logo_short.png" height='110%' className="logo_short"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                    </NavLink>
                </div>
                <div className="header_spacer"></div>
                <div className="header_nav_items">
                    <div className="language-toggle">
                        <ul>
                            <li id={props.language === 0 ? 'selected_language' : ' '} className="language-option" value="0" onClick={props.languageHandler}>EN</li>
                            <li className="language-option" value="1" onClick={props.languageHandler}>FR</li>
                        </ul>
                    </div>
                    <div className="header_main_nav">
                        <ul>
                            <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                            <li><NavLink exact to="/explore" className="nav-link">Explore</NavLink></li>
                            <li><NavLink exact to="/research" className="nav-link">Research</NavLink></li>
                            <li><NavLink exact to="/aboutus" className="nav-link">About Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        )
    }else{
        return (
            <header className="header">
                <nav className="header_navigation">
                    <div className="header_toggle-button">
                        <HamburgerButton click={props.drawerClickHandler}/>
                    </div>
                    <div className="header_logo">
                        <a href="/">
                        <img src="assets/images/africapolis_fr.png" height='100%' className="logo_long"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                        <img src="assets/images/africapolis_logo_short.png" height='100%' className="logo_short"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                        </a>
                    </div>
                    <div className="header_spacer"></div>
                    <div className="header_nav_items">
                        <div className="language-toggle">
                                <ul>
                                    <li className="language-option" value="0" onClick={props.languageHandler}>EN</li>
                                    <li id='selected_language' className="language-option" value="1" onClick={props.languageHandler}>FR</li>
                                </ul>
                            </div>
                            <div className="header_main_nav">
                                <ul>
                                    <li><NavLink className="nav-link" to="/home">Accueil</NavLink></li>
                                    <li><NavLink className="nav-link" to="/explore">Explorer</NavLink></li>
                                    <li><NavLink className="nav-link" to="/research">Analyses</NavLink></li>
                                    <li><NavLink className="nav-link" to="/aboutus">À propos</NavLink></li>
                                </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
};

export const SideDrawer = props => {
    let drawerClass = 'side-drawer';
    if(props.show) {
        drawerClass = 'side-drawer open';
    }
    return(
        <nav className={drawerClass}>
            <ul>
                <li><NavLink className="side-nav-link" to="/home">Home</NavLink></li>
                <li><NavLink className="side-nav-link" to="/explore">Explore</NavLink></li>
                <li><NavLink className="side-nav-link" to="/research">Research</NavLink></li>
                <li><NavLink className="side-nav-link" to="/aboutus">About Us</NavLink></li>
            </ul>
            <div className="side-drawer-download">
                <img src="assets/images/swac-oecd.png" width="100%"
                            alt="Africapolis Visualise Urbanisation in Africa"/>
            </div>
        </nav>
    );
};

export const Backdrop = props => (
    <div className="backdrop" onClick={props.click}/>
);
