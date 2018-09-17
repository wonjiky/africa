import React, { Component } from 'react';
import HomeWrapper from './Home/HomeWrapper';
import ExploreWrapper from './Explore/ExploreWrapper';
import Header from './Header';
import { NARRATIVES } from '../shared/narratives';
import { COUNTRIES } from '../shared/countrydata';
import africa_one from '../shared/africa_one.geojson';
import africa_continent from '../shared/africa_continent.geojson';
import agglos_geo from '../shared/agglos_geo.geojson';
import top50 from '../shared/top50.geojson';
import { }from 'react-fontawesome';
import '../css/main.css';
import {Switch, Route, Redirect } from 'react-router-dom';

class MainWrapper extends Component {

	//defining the state
	constructor(props) {
		super(props);
		/*
		State information that contains all the dishes are lifted
		and are can be available to MenuComponent through props from MainComponent.js
		*/
		this.state = {
			narratives: NARRATIVES,
			countryData: COUNTRIES,
			africa_one: africa_one,
			top50: top50,
			africa_continent: africa_continent,
			agglos_geo: agglos_geo,
		};
		window.countrydata = africa_continent;

	}
    componentDidMount(){
    }
	render() {

		return (   
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={() => 
						<HomeWrapper 
							narratives={this.state.narratives}
							africaOne={this.state.africa_one}
							top50={this.state.top50}
							africaContinent={this.state.africa_continent}
							agglosGeo={this.state.agglos_geo}
							/>}/>
					<Route exact path="/explore" component={() => 
						<ExploreWrapper 
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
