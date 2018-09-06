import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import './data/leaflet.snogylop.js';
import "../../node_modules/leaflet/dist/leaflet.css";

const southWest = L.latLng(-28.739134, -25.058270);
const northEast = L.latLng(32.157281, 50.089421);
const mybounds = L.latLngBounds(southWest, northEast);
let config = {};
config.params = {
	center: [1.46,13.3],
	zoom: 3,
	minZoom: 3,
	maxBounds:mybounds,
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
			country:null,
			hi: 0,
			list: 0
		};
		this._mapNode = null;
		this._onEachFeature = this._onEachFeature.bind(this);
		this._onCityFeature = this._onCityFeature.bind(this);
		this._yearFilter = this._yearFilter.bind(this);
		this._pointToLayer = this._pointToLayer.bind(this);
		this.updateMarker = this.updateMarker.bind(this);
		this._cityFilter = this._cityFilter.bind(this);
		// this.addShades = this.addShades.bind(this);
	}

	componentDidMount() {
		if (!this.state.map) {
			this.init(this._mapNode);
		}
	}

	//re-render on update
	componentDidUpdate(prevProps,prevState){
		//Adding 
		if(this.state.map){
			this.addMapLayer(this.props.africaContinent, this.props.africaOne)
		}
		var citieslist = this.citieslist = L.geoJSON(this.props.top50, { 
			// filter: this._yearFilter,//onEachFeature: onEachFeature,
			pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng);} //, geojsonMarkerOptions);}
			})
			citieslist.addTo(this.state.map);	

			this.updateMarker();
	}
	
	//Year filter for citieslist
	_yearFilter(feature) {
		if (feature.properties.Year === "a") return true
	}


	addShades(shades){
		if(this.state.map){
		const mapShades = L.geoJson(shades, {
			invert:true,
			color:"grey",
			stroke: false,
			fillOpacity:0.6 
		})
		mapShades.addTo(this.state.map);
		}
	}
	//Adding Shades and Overlay to the Map
	addMapLayer(overlay, shades){
		const mapShades = L.geoJson(shades, {
			invert:true,
			color:"grey",
			stroke: false,
			fillOpacity:0.4
		})
		mapShades.addTo(this.state.map);
		const mapOverlay = L.geoJson(overlay, {
			onEachFeature: this._onEachFeature
		})
		mapOverlay.addTo(this.state.map);
		mapOverlay.setStyle({
			fillOpacity: 0,
			color: 'transparent'
		})
	}

	//Eventhandler on mouse event
	_onEachFeature(feature, layer) {

		layer.on('mouseover', () => {
			layer.setStyle({
			fillOpacity: 0.7,
			color: '#fded70',
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
			this.updateMarker();
			
			this.state.map.fitBounds(layer.getBounds());
			
			let country =feature.properties.ISO3_CODE; 
			this.setState({country})
			
			const list = L.geoJson(this.props.agglosGeo, {
				onEachFeature: this._onCityFeature, 
				filter: this._cityFilter,
				pointToLayer: this._pointToLayer
			});

			this._sendISO(country)
			this.citieslist.addLayer(list)
		});
	}

	_sendISO(value){
		this.props.onChange(value)
	}

	updateMarker(){
		this.citieslist.clearLayers();
	}
	

	_cityFilter(feature){
		if (feature.properties.ISO === this.state.country) 
		return true
	}

	_pointToLayer(feature, latlng){
		const geojsonMarker = {
			radius: 4,
			fillColor: "red",
			color: "#000",
			weight: 1,
			opacity: 1,
			fillOpacity: 0.8
		};
		return L.circleMarker(latlng, geojsonMarker);
	}

	_onCityFeature(feature, layer) {
		let popupContent = "<table class='tooltip-table'>";
		popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.NAME + "</td></tr>";
		popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.PTA2015 + "</td></tr>";
		popupContent += "</table>";
		layer.bindPopup(popupContent).openPopup();
	}

	//Initialize Map
	init(id){
		if (this.state.map) return;
		let map = L.map(id, config.params);
		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
		this.setState({ map, tileLayer });
		// this.addShades(this.props.africaOne);
  }

	render() {
		return (
				<div ref={(node) => this._mapNode = node} id="map" />
				
		)
	}
}

export default LeafletMap;