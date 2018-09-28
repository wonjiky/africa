import React, { Component } from 'react';
import HomeWrapper from './Home/HomeWrapper';
import ExploreWrapper from './Explore/ExploreWrapper';
import Header from './Header';
import { NARRATIVES } from '../shared/narratives';
import { TREEMAP } from '../shared/treemap';
import { COUNTRYINFO } from '../shared/info_country';
// import { AGGLOMERATIONINFO } from '../shared/info_agglomeration'
import { AFRICA_ONE } from '../shared/geo_shades';
import { AFRICA_CONTINENT } from '../shared/geo_country';
import { AGGLOS } from '../shared/geo_agglomeration';
import { }from 'react-fontawesome';
import '../css/main.css';
import {Switch, Route, Redirect } from 'react-router-dom';

class MainWrapper extends Component {

	//defining the state
	constructor(props) {
		super(props);
		this.state = {
			narratives: NARRATIVES,
			countryData: COUNTRYINFO,
			// agglosData: AGGLOMERATIONINFO,
			geo_shades: AFRICA_ONE,
			geo_country: AFRICA_CONTINENT,
			geo_agglomeration: AGGLOS,
			treemap: TREEMAP,
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
							treemap={this.state.treemap}
							africaOne={this.state.geo_shades}
							africaContinent={this.state.geo_country}
							agglosGeo={this.state.geo_agglomeration}
							/>}/>
					<Route exact path={`/explore`} component={() => <ExploreWrapper 
							africaOne={this.state.geo_shades}
							africaContinent={this.state.geo_country}
							agglosGeo={this.state.geo_agglomeration}
							countryData={this.state.countryData}
							/> } />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default MainWrapper;