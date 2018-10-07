import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import '../shared/leaflet.snogylop.js';
import "../../node_modules/leaflet/dist/leaflet.css";

const southWest = L.latLng(-48.739134, -29.058270);
const northEast = L.latLng(42.157281, 52);
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
		this.treemap_filter = this.treemap_filter.bind(this);
		this.hoverStyle = this.hoverStyle.bind(this);
		this.selectedStyle = this.selectedStyle.bind(this);
		this.treemap_pointToLayer = this.treemap_pointToLayer.bind(this);
		this.treemap_onEachFeature = this.treemap_onEachFeature.bind(this);
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
			console.log(this.agglos);
			let currCountryValue = this.props.selectedCountry;
			let prevCountryValue = prevProps.selectedCountry;
			let currAgglosValue = this.props.selectedAgglos;
			let prevAgglosValue = prevProps.selectedAgglos;

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
							onEachFeature: (feature, layer) => {
								layer.on('mouseover', (e) => {
									e.target.setStyle(this.highlightAgglosStyle())
								})
								feature.properties._leaflet_id = feature.properties.cityID;
								layer.on('mouseout', (e) => {
									e.target.setStyle(this.defaultAgglosStyle())
								})
								layer.on('change', (e) => {

								})
								layer.on('click', (e) => {
									console.log(layer);
									e.target.setStyle(this.highlightAgglosStyle())
									const cityID = feature.properties.cityID;
									const cityName = feature.properties.cityName;
									const a = { value:cityID, label:cityName}
									this.props.sendAgglosValueToContent(a);

									let popupContent = "<table class='tooltip-table'>";
									popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.cityName + "</td></tr>";
									popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.cityID + "</td></tr>";
									popupContent += "</table>";
									layer.bindPopup(popupContent).openPopup();
								})
								// feature.properties._leaflet_id = feature.properties.cityID;
							},
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
			console.log(this.agglos);
			if(currCountryValue !== prevCountryValue && currCountryValue !== ''){
				let layer = this.mapOverlay.getLayer(currCountryValue);
				layer.fire('change')
			} else if (currCountryValue !== prevCountryValue && currCountryValue === ''){
				this.placeHolder.clearLayers();
			}

			if(currAgglosValue && currAgglosValue !== prevAgglosValue && currAgglosValue !== ''){
				let agglosLayer = this.agglos.getLayer(currAgglosValue);
				// console.log(agglosLayer.feature._leaflet_id)
				// console.log(agglosLayer.feature.properties.cityID);
				// agglosLayer.fire('change');
			}

		// If Home Wrapper is Mounted :
		} else if(this.props.homeWrapperIsMounted) {
			if(this.props.treemapFilter === 'treemap'){ // && this.props.treemapValue === 0){
				if(this.treemap){this.treemap.clearLayers(this.treemap);}
				this.treemap = L.geoJson(this.props.treemap_buildup, {
					filter: this.treemap_filter,
					onEachFeature: this.treemap_onEachFeature,
					pointToLayer: this.treemap_pointToLayer})
				this.state.map.addLayer(this.treemap);
			}

			let treemapcurrValue = this.props.treemapSelect;
			let treemapprevValue = prevProps.treemapSelect;

			if (treemapcurrValue){
				this.currLayer = this.treemap.getLayer(treemapcurrValue);
				this.prevLayer = this.treemap.getLayer(treemapprevValue);
			}

			if(treemapcurrValue !== treemapprevValue){
				let layer = this.treemap.getLayer(treemapcurrValue);
				layer.fire('mouseover')
				if(treemapprevValue){
				let layerprev = this.treemap.getLayer(treemapprevValue);
				layerprev.fire('mouseout')}
			}
		}
	}

	treemap_onEachFeature(feature,layer){
		layer.on('mouseover', (e) => {
			e.target.setStyle(this.treemapHighlightStyle(feature))
		})

		layer.on('mouseout', (e) => {
			e.target.setStyle(this.treemapAgglosStyle(feature))
		})

		layer.on('click', (e) => {
			e.target.setStyle(this.treemapHighlightStyle(feature))
		})

		let popupContent = "<table class='tooltip-table'>";
		popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.NAME + "</td></tr>";
		popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.value + "</td></tr>";
		popupContent += "</table>";
		layer.bindPopup(popupContent).openPopup();
		//layer._leaflet_id = feature.properties.City_ID;
	}

	treemapHighlightStyle(feature){
		return({
			radius: 13,
			fillOpacity: .9,
			weight: 0,
			stroke: true,
			color: feature.properties.Color,
			weight: 1,
		})
	}

	treemapAgglosStyle(feature){
		return({
			radius: 4,
			fillColor: feature.properties.Color,
			fillOpacity: 0.4,
			stroke: true,
			color: feature.properties.Color,
			weight: 1,
		})
	}

	treemap_pointToLayer(feature, latlng){
		const geojsonMarker = this.treemapAgglosStyle(feature);
		return L.circleMarker(latlng, geojsonMarker);
	}

	placeHolder_filter(feature) {
		if (feature.properties.Year === "a") {
			return true
		}
	}

	treemap_filter(feature) {
		if (feature.properties.treemap_ID === this.props.treemapValue ) {
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
			fillColor: '#E8AE40',
			fillOpacity: 0.4,
			stroke: true,
			color: '#E8AE40',
			weight: 1,
		})
	}

	defaultAgglosStyle(){
		return({
			radius: 5,
			fillColor: '#E8AE40',
			fillOpacity: 0.4,
			stroke: true,
			color: '#E8AE40',
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
			let popupContent = "<table class='tooltip-table'>";
			popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.cityName + "</td></tr>";
			popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.cityID + "</td></tr>";
			popupContent += "</table>";
			layer.bindPopup(popupContent).openPopup();
		})

		layer.on('click', (e) => {
			e.target.setStyle(this.highlightAgglosStyle())
			const cityID = feature.properties.cityID;
			const cityName = feature.properties.cityName;
			const a = { value:cityID, label:cityName}
			this.props.sendAgglosValueToContent(a);
		})
		layer._leaflet_id = feature.properties.ID;

	}

	render() {
		return (
			<div id="map" />
		)
	}
}

export default LeafletMap;
