import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import '../shared/leaflet.snogylop.js';
import "../../node_modules/leaflet/dist/leaflet.css";

const southWest = L.latLng(-48.739134, -29.058270);
const northEast = L.latLng(42.157281, 51.089421);
const mybounds = L.latLngBounds(southWest, northEast);

let config = {};
config.params = {
	center: [1.46,18.3],
	zoom: 3,
	zoomSnap: 1.2,
	minZoom: 3,
	maxBounds:mybounds,
	opacity:0,
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
			list: 0,
			currLayerClicked: false,
		};

		// this.onEachFeature = this.onEachFeature.bind(this);
		this.agglos_onEachFeature = this.agglos_onEachFeature.bind(this);
		this.agglos_pointToLayer = this.agglos_pointToLayer.bind(this);
		this.agglos_cityFilter = this.agglos_cityFilter.bind(this);
		this.placeHolder_filter = this.placeHolder_filter.bind(this);
		this.hoverStyle = this.hoverStyle.bind(this);
		this.selectedStyle = this.selectedStyle.bind(this);
	}

	componentDidMount() {
		let map = L.map('map', config.params);
		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
		this.setState({ map, tileLayer });

		this.mapShades = L.geoJson(this.props.africaOne, {
			invert:true,
			color:"grey",
			stroke: false,
			fillOpacity:0.8
		})
		this.mapShades.addTo(map);

		this.placeHolder = L.geoJSON(this.props.africa_one, {
			filter: this.placeHolder_filter,
			// pointToLayer: function (feature, latlng) {
			// return L.circleMarker(latlng);}
			})
		this.placeHolder.addTo(map);
	}

	selectedStyle(){
		return({
			weight : 2,
			color : 'black',
			fillColor : 'yellow',
			fillOpacity : 0.03,
		})
	}

	hoverStyle(){
		return({
			color: '#E8AE40',
			weight: 3,
			stroke:true,
			fillOpacity: 0,
		})
	}

	componentDidUpdate(prevProps){

		// If Explore Wrapper is Mounted :
		if (this.props.exploreWrapperIsMounted === true){
			let currValue = this.props.selectedCountry;
			let prevValue = prevProps.selectedCountry;
			if(currValue){
				this.currLayer = this.mapOverlay.getLayer(currValue);
				this.prevLayer = this.mapOverlay.getLayer(prevValue);
			}

			this.mapOverlay = L.geoJson(this.props.africaContinent, {
				style: () => {return {color: 'transparent'}},
				onEachFeature: (feature, layer) => {

					layer.on('mouseover', () => {
						layer.setStyle(this.hoverStyle());
					});

					layer.on('mouseout', (e) => {
						this.mapOverlay.resetStyle(e.target);
					});

					layer.on('change', (e) => {
						this.placeHolder.clearLayers();
						this.state.map.fitBounds(layer.getBounds());
						this.ID = feature.properties.ID;
						this.agglos = L.geoJson(this.props.agglosGeo, {
							onEachFeature: this.agglos_onEachFeature,
							filter: this.agglos_cityFilter,
							pointToLayer: this.agglos_pointToLayer
						});
						this.placeHolder.addLayer(this.agglos);
					});

					layer.on('click', () => {
						const ISO3_ID = feature.properties.ID;
						const ISO3_NAME = feature.properties.NAME_EN;
						const e = { value: ISO3_ID, label:ISO3_NAME}
						this.props.sendCountryValueToContent(e);
					});

					layer._leaflet_id = feature.properties.ID;
				}
			})
			this.mapOverlay.addTo(this.state.map);

			if(currValue !== prevValue){
				let layer = this.mapOverlay.getLayer(currValue);
				layer.fire('change')
			}

		// If Home Wrapper is Mounted :	
		} else if(this.props.homeWrapperIsMounted) {
			this.mapOverlay = L.geoJson(this.props.africaContinent, {
				style: () => {return {color: 'transparent'}},
				onEachFeature: (feature, layer) => {

					layer.on('mouseover', () => {
						layer.setStyle(this.hoverStyle());
					});

					layer.on('mouseout', (e) => {
						this.mapOverlay.resetStyle(e.target);
					});
				}
			})
			this.mapOverlay.addTo(this.state.map);
		}
	}

	placeHolder_filter(feature) {
		if (feature.properties.Year === "a") {
			return true
		}
	}

	agglos_cityFilter(feature){
		if (feature.properties.ID === this.ID){
			return true
		}
	}

	agglos_pointToLayer(feature, latlng){
		const geojsonMarker = this.defaultAgglosStyle();
		return L.circleMarker(latlng, geojsonMarker);
	}

	highlightAgglosStyle(){
		return({
			radius: 10,
			fillOpacity: 1,
			fillColor: "red",
			weight: 0,
		})
	}

	defaultAgglosStyle(){
		return({
			radius: 4,
			fillColor: "#FFF",
			color: "#E8AE40",
			weight: 1,
		})
	}

	agglos_onEachFeature(feature, layer) {
		layer.on('mouseover', (e) => {
			e.target.setStyle(this.highlightAgglosStyle())
		})

		layer.on('mouseout', (e) => {
			e.target.setStyle(this.defaultAgglosStyle())
		})

		layer.on('change', (e) => {

		})

		layer.on('click', (e) => {
			e.target.setStyle(this.highlightAgglosStyle())
			const ID = feature.properties.ID;
			const cityID = feature.properties.cityID;
			const cityName = feature.properties.cityName;
			const a = { value:cityID, label:cityName}
			this.props.sendAgglosValueToContent(a);
		})

		let popupContent = "<table class='tooltip-table'>";
		popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.cityName + "</td></tr>";
		popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.cityID + "</td></tr>";
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
