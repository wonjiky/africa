// import React, { Component } from 'react';
// import MainWrapper from './components/MainWrapper';
// import { BrowserRouter } from 'react-router-dom';

// class App extends Component {

// 	render() {
// 		return (
// 			<BrowserRouter>
// 					<MainWrapper/>
// 			</BrowserRouter>
// 		);
// 	}
// }

// export default App;


import React, { Component } from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import HomeWrapper from './components/Home/HomeWrapper';
import ExploreWrapper from './components/Explore/ExploreWrapper';
import AboutWrapper from './components/Aboutus/AboutWrapper';
import * as Headers from './components/Header';
import { NARRATIVES, WHATSNEW } from './shared/narratives';
import { TREEMAP } from './shared/treemap';
import { COUNTRYINFO } from './shared/info_country';
import { TREEMAP_BUILDUP } from './shared/treemap_buildup'
import { AFRICA_ONE } from './shared/geo_shades';
import { AGGLOMERATIONINFO } from './shared/info_agglomeration';
import { AFRICA_CONTINENT } from './shared/geo_country';
import { AGGLOS } from './shared/geo_agglomeration';
import { } from 'react-fontawesome';


class App extends Component {
	state = {
		narratives: NARRATIVES,
		whatsnew: WHATSNEW,
		countryData: COUNTRYINFO,
		geo_shades: AFRICA_ONE,
		geo_country: AFRICA_CONTINENT,
		geo_agglomeration: AGGLOS,
		info_agglomeration: AGGLOMERATIONINFO,
		treemap: TREEMAP,
		treemap_buildup: TREEMAP_BUILDUP,
		language: 0
	};
	// window.countrydata = africa_continent;

	drawerToggleClick = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen}
		});

		console.log(this.state.sideDrawerOpen);
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	};

	langHandler = (e) => {
		this.setState({language:e.target.value})
}

	render() {
		let backdrop;
		if (this.state.sideDrawerOpen){
			backdrop = <Headers.Backdrop click={this.backdropClickHandler} />;
		}
		return (
			<BrowserRouter>
				<div className="App" style={{height: '100%'}}>
					<Headers.Header drawerClickHandler={this.drawerToggleClick} languageHandler={this.langHandler} language={this.state.language}/>
					<Headers.SideDrawer show={this.state.sideDrawerOpen}/>
					{backdrop}
					<Switch>
						<Route exact path="/" component={() => <HomeWrapper
							narratives={this.state.narratives}
							whatsnew={this.state.whatsnew}
							treemap={this.state.treemap}
							africaOne={this.state.geo_shades}
							treemap_buildup={this.state.treemap_buildup}
							menuButton = {this.state.sideDrawerOpen}
							language={this.state.language}
						/>}/>
						<Route exact path="/explore" component={() => <ExploreWrapper
							africaOne={this.state.geo_shades}
							africaContinent={this.state.geo_country}
							agglosGeo={this.state.geo_agglomeration}
							countryData={this.state.countryData}
							agglosData={this.state.info_agglomeration}
							menuButton = {this.state.sideDrawerOpen}
							language={this.state.language}
							/> } />
						<Route exact path="/aboutus" component={() => <AboutWrapper/> } />
						<Redirect to="/" />
					</Switch>
				</div>
			</BrowserRouter>
		
		);
	}
}

export default App;
