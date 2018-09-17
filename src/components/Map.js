import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import './data/leaflet.snogylop.js';
import "../../node_modules/leaflet/dist/leaflet.css";

const southWest = L.latLng(-48.739134, -19.058270);
const northEast = L.latLng(42.157281, 51.089421);
const mybounds = L.latLngBounds(southWest, northEast);
let config = {};
config.params = {
	center: [1.46,18.3],
	zoom: 3,
	zoomSnap: 1.2,
	minZoom: 3,
	maxBounds:mybounds,
	hasAlreadyUpdatedOnce: false,
	opacity:0
};
config.tileLayer = {
	uri: 'https://api.mapbox.com/styles/v1/mkmd/cjj041lbo07vo2rphltlukpya/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	params: {
		maxZoom: 18,
		id: '',
	}
};

class LeafletMap extends Component {
	constructor(props){
		super(props)
		this.state = {
			map: null,
			tileLayer: null,
			hi: 0,
			list: 0,
			hasAlreadyUpdatedOnce: false,
		};

		this.onEachFeature = this.onEachFeature.bind(this);
		this.agglos_onEachFeature = this.agglos_onEachFeature.bind(this);
		this.agglos_pointToLayer = this.agglos_pointToLayer.bind(this);
		this.agglos_cityFilter = this.agglos_cityFilter.bind(this);
		this.placeHolder_filter = this.placeHolder_filter.bind(this);
		this.onChangeCountry = this.onChangeCountry.bind(this);
	}

	componentDidMount() {
		let map = L.map('map', config.params);
		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
		this.setState({ map, tileLayer });
		
		//Shading outisde border
		this.mapShades = L.geoJson(this.props.africaOne, {
			invert:true,
			color:"grey",
			stroke: false,
			fillOpacity:0.8
		})
		this.mapShades.addTo(map);
		
		//PlaceHolder Layer
		this.placeHolder = L.geoJSON(this.props.top50, { 
			filter: this.placeHolder_filter,
			pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng);}
			})
		this.placeHolder.addTo(map);
	}

	componentDidUpdate(prevProps){
		this.mapOverlay = L.geoJson(this.props.africaContinent, {
			onEachFeature:this.onEachFeature,
		})
		this.mapOverlay.addTo(this.state.map);
		this.mapOverlay.setStyle({
			fillOpacity: 0,
			color: 'transparent'
		})

		let currValue = this.props.selectedCountry;
		let prevValue = prevProps.selectedCountry;
		if(currValue !== prevValue){
			var layer = this.mapOverlay.getLayer(currValue);
			layer.fireEvent('change', currValue)
		}
	}

	onEachFeature(feature, layer){
		layer.on('mouseover', () => {
			layer.setStyle({
			fillOpacity: 0.6,
			color: '#E8AE40',
			stroke: false
			});
		});

		layer.on('mouseout', () => {
			layer.setStyle({
			fillOpacity: 0.0,
			color: 'transparent'
			});
		});

		layer.on('click', () => {
			const ISO3_ID = feature.properties.ID;
			const ISO3_NAME = feature.properties.NAME_EN;
			const e = { value: ISO3_ID, label:ISO3_NAME}
			this.props.handleISO(e);
		});

		layer.on('change', (e) => {

			this.placeHolder.clearLayers();
			
			this.state.map.fitBounds(layer.getBounds());
			this.ISO3_CODE = feature.properties.ISO3_CODE; 

			this.agglos = L.geoJson(this.props.agglosGeo, {
				onEachFeature: this.agglos_onEachFeature, 
				filter: this.agglos_cityFilter,
				pointToLayer: this.agglos_pointToLayer
			});

			this.placeHolder.addLayer(this.agglos);
		});
		layer._leaflet_id = feature.properties.ID;
	}

	onChangeCountry(feature, layer){
		this.state.map.fitBounds(layer.getBounds());
		
		this.agglos = L.geoJson(this.props.agglosGeo, {
			onEachFeature: this.agglos_onEachFeature, 
			filter: this.agglos_cityFilter,
			pointToLayer: this.agglos_pointToLayer
		});


		this.placeHolder.clearLayers();
		const ISO3_CODE = feature.properties.ISO3_CODE; 
		this.setState({ISO3_CODE});
		this.placeHolder.addLayer(this.agglos);
	}

	//Year filter for citieslist
	placeHolder_filter(feature) {
		if (feature.properties.Year === "a") {
			return true
		}
	}

	agglos_cityFilter(feature){
		if (feature.properties.ISO === this.ISO3_CODE){
			const AGGLOS_ID = feature.properties.ISO;
			const AGGLOS_NAME = feature.properties.NAME;
			const AGGLOS = { value: AGGLOS_ID, label: AGGLOS_NAME}
			this.props.handleAgglos(AGGLOS);
			return true
		}
	}

	agglos_pointToLayer(feature, latlng){
		const geojsonMarker = {
			radius: 4,
			fillColor: "#FFF",
			color: "#E8AE40",
			weight: 1,
		};
		return L.circleMarker(latlng, geojsonMarker);
	}

	agglos_onEachFeature(feature, layer) {
		let popupContent = "<table class='tooltip-table'>";
		popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.NAME + "</td></tr>";
		popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.PTA2015 + "</td></tr>";
		popupContent += "</table>";
		layer.bindPopup(popupContent).openPopup();
	}

	render() {
		return (
			<div id="map" />
		)
	}
}

export default LeafletMap;

