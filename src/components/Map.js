// UPDATES TWICES WHEN SELECT CHANGE;
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
		this.clickOnMapItem = this.clickOnMapItem.bind(this);
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
			console.log('PLACEHOLDER ADDED')	
		
		//Overlay + Interaction
		this.mapOverlay = L.geoJson(this.props.africaContinent, {
			onEachFeature:this.onEachFeature,
		})
		this.mapOverlay.addTo(map);
		this.mapOverlay.setStyle({
			fillOpacity: 0,
			color: 'transparent'
		})
		
		// this.agglos = L.geoJson(this.props.agglosGeo, {
		// 	onEachFeature: this.agglos_onEachFeature, 
		// 	filter: this.agglos_cityFilter,
		// 	pointToLayer: this.agglos_pointToLayer
		// });

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
			console.log('CLCICKED')
			if(this.agglos !== undefined){
				console.log('CLEAR LAYERS');
				this.state.map.removeLayer(this.agglos)//.clearLayers();
			}
			
			const ISO3_ID = feature.properties.ID;
			const ISO3_NAME = feature.properties.NAME_EN;
			const pairs = { value: ISO3_ID, label:ISO3_NAME}
			this.setState({ISO3_NAME,ISO3_ID})
			console.log('SEND CLICKED VALUE FROM MAP');
			this.props.handleISO(pairs)

			// this.agglos = L.geoJson(this.props.agglosGeo, {
			// 	onEachFeature: this.agglos_onEachFeature, 
			// 	filter: this.agglos_cityFilter,
			// 	pointToLayer: this.agglos_pointToLayer
			// });

			this.state.map.fitBounds(layer.getBounds());
			const ISO3_CODE = feature.properties.ISO3_CODE; 
			this.setState({ISO3_CODE});
		

			this.state.map.addLayer(this.agglos);
		});

		layer._leaflet_id = feature.properties.ID;

	}

	componentDidUpdate(prevProps){
		
		this.agglos = L.geoJson(this.props.agglosGeo, {
			onEachFeature: this.agglos_onEachFeature, 
			filter: this.agglos_cityFilter,
			pointToLayer: this.agglos_pointToLayer
		});

		if(this.props.selectedCountry){
			let currValue = this.props.selectedCountry.value;
			let prevValue = prevProps.selectedCountry.value;
			console.log('PROPS RECEIVED FROM WRAPPER/SEARCH')
			var layer = this.mapOverlay.getLayer(currValue);
			this.clickOnMapItem(layer, prevValue, currValue)
		}
	}

	clickOnMapItem(layer, prevValue, currValue){
		if(currValue && prevValue !== currValue){
			layer.fireEvent('click');
		}
	}

	//Year filter for citieslist
	placeHolder_filter(feature) {
		if (feature.properties.Year === "a") return true
	}

	agglos_cityFilter(feature){
		if (feature.properties.ISO === this.state.ISO3_CODE)
		return true
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

