import React, { Component } from 'react';
import HomeWrapper from './Home/HomeWrapper';
import ExploreWrapper from './Explore/ExploreWrapper';
import AboutWrapper from './Aboutus/AboutWrapper';
import Header from './Header';
import { NARRATIVES, WHATSNEW } from '../shared/narratives';
import { TREEMAP } from '../shared/treemap';

import { COUNTRYINFO } from '../shared/info_country';
import { TREEMAP_BUILDUP } from '../shared/treemap_buildup'

import { AFRICA_ONE } from '../shared/geo_shades';
import { AGGLOMERATIONINFO } from '../shared/info_agglomeration';

import { AFRICA_CONTINENT } from '../shared/geo_country';
import { AGGLOS } from '../shared/geo_agglomeration';
<<<<<<< HEAD


=======
import { COUNTRYINFO_past } from '../shared/past_country';
>>>>>>> d5c561ab00ea00d73b598b23dd8b7a93cc765854
import { }from 'react-fontawesome';
import '../css/main.css';
import {Switch, Route, Redirect } from 'react-router-dom';

class MainWrapper extends Component {

	//defining the state
	constructor(props) {
		super(props);
		this.state = {
			narratives: NARRATIVES,
			whatsnew: WHATSNEW,
			countryData: COUNTRYINFO,
			geo_shades: AFRICA_ONE,
			geo_country: AFRICA_CONTINENT,
			geo_agglomeration: AGGLOS,
			info_agglomeration: AGGLOMERATIONINFO,
			treemap: TREEMAP,
			treemap_buildup: TREEMAP_BUILDUP,
			countryData_past: COUNTRYINFO_past

		};
		// window.countrydata = africa_continent;
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={() => <HomeWrapper
						narratives={this.state.narratives}
						whatsnew={this.state.whatsnew}
						treemap={this.state.treemap}
						africaOne={this.state.geo_shades}
						africaContinent={this.state.geo_country}
						agglosGeo={this.state.geo_agglomeration}
						treemap_buildup={this.state.treemap_buildup}
						/>}/>
					<Route exact path={`/explore`} component={() => <ExploreWrapper
						africaOne={this.state.geo_shades}
						africaContinent={this.state.geo_country}
						agglosGeo={this.state.geo_agglomeration}
						countryData={this.state.countryData}
						agglosData={this.state.info_agglomeration}
						countryData_past={this.state.countryData_past}
						/> } />
					<Route exact path={`/aboutus`} component={() => <AboutWrapper/> } />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default MainWrapper;
