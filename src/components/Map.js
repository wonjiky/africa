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
		this._mapNode = null;
		this._onEachFeature = this._onEachFeature.bind(this);
		this._onCityFeature = this._onCityFeature.bind(this);
		this._yearFilter = this._yearFilter.bind(this);
		this._pointToLayer = this._pointToLayer.bind(this);
		this.updateMarker = this.updateMarker.bind(this);
		this._cityFilter = this._cityFilter.bind(this);
		this.clearList = this.clearList.bind(this);
	}

	componentDidMount() {
		if (!this.state.map) {
			this.init(this._mapNode);
		}
	}

	//re-render on updatef
	componentDidUpdate(prevProps,prevState){

		if(this.state.map && !this.state.hasAlreadyUpdatedOnce){
			this.addDimLayer(this.props.africaOne)
			this.setState({
				hasAlreadyUpdatedOnce:true
			})
		}

		const agglos = this.agglos = L.geoJson(this.props.agglosGeo, {
			onEachFeature: this._onCityFeature, 
			filter: this._cityFilter,
			pointToLayer: this._pointToLayer
		});

		const mapOverlay = L.geoJson(prevProps.africaContinent, {
			onEachFeature: this._onEachFeature,
		})
			mapOverlay.addTo(this.state.map);
			mapOverlay.setStyle({
				fillOpacity: 0,
				color: 'transparent'
		})

		this.clearList(prevProps);
	}



	clearList(prevProps){

		if (prevProps.selectedCountry.value !== null) {

			const agglos2 = L.geoJson(this.props.agglosGeo, {
				onEachFeature: this._onCityFeature, 
				filter: (feature) => {
					if (feature.properties.ISO === this.props.selectedCountry.value)
						return true
				},
				pointToLayer: this._pointToLayer
			});

			if( prevProps.selectedCountry.value !== undefined ){
				this.state.map.removeLayer(agglos2);
			}
			// this.state.map.removeLayer(agglos2);
			console.log(prevProps.selectedCountry.value, 'cleared')
			// this.state.map.removeLayer(this.citieslist)
			this.state.map.addLayer(agglos2)
			// this.citieslist.addLayer(list);
			}
		}

	
	_onEachFeature(feature, layer) {
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
		
		layer.on('change', (e) => {
			console.log(this.props.selectedCountry)
		});

		layer.on('click', (e) => {
			if(this.agglos !== undefined) {
				this.state.map.removeLayer(this.agglos)
			}

			//Zoom into Country
			this.state.map.fitBounds(layer.getBounds());
			const ISO3_CODE = feature.properties.ISO3_CODE; 
			this.setState({ISO3_CODE})
			const ISO3_NAME = feature.properties.NAME_EN;
			this.setState({ISO3_NAME})
			const pairs = { value: ISO3_CODE, label:ISO3_NAME}
			this.props.handleISO(pairs)

			this.state.map.addLayer(this.agglos)
		});
	}

	// componentWillUpdate(nextProps, nextState) {
	// 	console.log(nextProps)
	// }

	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps.selectedCountry.value)
	// }


	// addLayer(africaContinent){
	// 	const mapOverlay = L.geoJson(africaContinent, {
	// 		onEachFeature: this._onEachFeature,
	// 	})
	// 	mapOverlay.addTo(this.state.map);
	// 	mapOverlay.setStyle({
	// 		fillOpacity: 0,
	// 		color: 'transparent'
	// 	})
	// }

	//Year filter for citieslist
	_yearFilter(feature) {
		if (feature.properties.Year === "a") return true
	}

	//Dimming the area outside of African continent 
	addDimLayer(shades){
		if(this.state.map){
		const mapShades = L.geoJson(shades, {
			invert:true,
			color:"grey",
			stroke: false,
			fillOpacity:0.8
		})
		mapShades.addTo(this.state.map);
		}
	}

	init(id){
		if (this.state.map) return;
		let map = L.map(id, config.params);
		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
		
	
		this.setState({ map, tileLayer });

		// if(map){
		// 	const mapOverlay = L.geoJson(this.props.africaContinent, {
		// 		onEachFeature: this._onEachFeature,
		// 	})
		// 	mapOverlay.addTo(map);
		// 	mapOverlay.setStyle({
		// 		fillOpacity: 0,
		// 		color: 'transparent'
		// 	})
		// }
	}

	updateMarker(){
		this.citieslist.clearLayers();
	}
	

	_cityFilter(feature){
		if (feature.properties.ISO === this.state.ISO3_CODE)
		return true
	}

	_pointToLayer(feature, latlng){
		const geojsonMarker = {
			radius: 4,
			fillColor: "#FFF",
			color: "#E8AE40",
			weight: 1,
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


	render() {
		return (
			<div ref={(node) => this._mapNode = node} id="map" />
		)
	}
}

export default LeafletMap;