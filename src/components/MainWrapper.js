import React, { Component } from 'react';
import HomeWrapper from './Home/HomeWrapper';
import ExploreWrapper from './Explore/ExploreWrapper';
import Header from './Header';
import { NARRATIVES } from '../shared/narratives';
import { TREEMAP } from '../shared/treemap';
import { COUNTRIES } from '../shared/countrydata';
import { AFRICA_ONE } from '../shared/africa_one';
import { AFRICA_CONTINENT } from '../shared/africa_continent';
import { AGGLOS } from '../shared/agglos';
import { }from 'react-fontawesome';
import '../css/main.css';
import {Switch, Route, Redirect } from 'react-router-dom';

class MainWrapper extends Component {

	//defining the state
	constructor(props) {
		super(props);
		this.state = {
			narratives: NARRATIVES,
			countryData: COUNTRIES,
			africa_one: AFRICA_ONE,
			africa_continent: AFRICA_CONTINENT,
			agglos_geo: AGGLOS,
			treemap: TREEMAP
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
							africaOne={this.state.africa_one}
							africaContinent={this.state.africa_continent}
							agglosGeo={this.state.agglos_geo}
							/>}/>
					<Route exact path={`/explore`} component={() => <ExploreWrapper 
							africaOne={this.state.africa_one}
							top50={this.state.top50}
							africaContinent={this.state.africa_continent}
							agglosGeo={this.state.agglos_geo}
							countryData={this.state.countryData}
							/> } />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default MainWrapper;