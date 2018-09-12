// import React from 'react';
// import { Component } from 'react';
// import  L  from 'leaflet';
// import './data/leaflet.snogylop.js';
// import "../../node_modules/leaflet/dist/leaflet.css";

// const southWest = L.latLng(-48.739134, -19.058270);
// const northEast = L.latLng(42.157281, 51.089421);
// const mybounds = L.latLngBounds(southWest, northEast);
// let config = {};
// config.params = {
// 	center: [1.46,18.3],
// 	zoom: 3,
// 	zoomSnap: 1.2,
// 	minZoom: 3,
// 	maxBounds:mybounds,
// 	opacity:0
// };
// config.tileLayer = {
// 	uri: 'https://api.mapbox.com/styles/v1/mkmd/cjj041lbo07vo2rphltlukpya/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
// 	params: {
// 		maxZoom: 18,
// 		id: '',
// 	}
// };


// class LeafletMap extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			map: null,
// 			tileLayer: null,
// 			hi: 0,
// 			list: 0,
// 			hasAlreadyUpdatedOnce: false,
// 		};

// 		this._mapNode = null;
// 		this._onEachFeature = this._onEachFeature.bind(this);
// 		this._onCityFeature = this._onCityFeature.bind(this);
// 		this._yearFilter = this._yearFilter.bind(this);
// 		this._pointToLayer = this._pointToLayer.bind(this);
// 		this._cityFilter = this._cityFilter.bind(this);
// 		this.triggerEventFromSearch = this.triggerEventFromSearch.bind(this);
// 	}

// 	componentDidMount() {
// 		if (!this.state.map) {
// 			this.init(this._mapNode);
// 		}
// 	}

// 	//re-render on updatef
// 	componentDidUpdate(prevProps,prevState){

// 		if(this.state.map && !this.state.hasAlreadyUpdatedOnce){
// 			this.addDimLayer(this.props.africaOne)
// 			this.setState({
// 				hasAlreadyUpdatedOnce:true
// 			})
// 		}

// 		const mapOverlay = this.mapOverlay = L.geoJson(prevProps.africaContinent, {
// 			onEachFeature: this._onEachFeature,
			
// 		})
// 			mapOverlay.addTo(this.state.map);
// 			mapOverlay.setStyle({
// 				fillOpacity: 0,
// 				color: 'transparent'
// 		})
// 		this.triggerEventFromSearch(prevProps);
// 	}
	
// 	componentWillUpdate(nextProps, nextState) {
// 		const agglos = this.agglos= L.geoJson(this.props.agglosGeo, {
// 			onEachFeature: this._onCityFeature, 
// 			filter: this._cityFilter,
// 			pointToLayer: this._pointToLayer
// 		});

// 	}

// 	_onEachFeature(feature, layer) {
		
// 		layer.on('mouseover', () => {
// 			layer.setStyle({
// 			fillOpacity: 0.6,
// 			color: '#E8AE40',
// 			stroke: false
// 			});
// 		});

// 		layer.on('mouseout', () => {
// 			layer.setStyle({
// 			fillOpacity: 0.0,
// 			color: 'transparent'
// 			});
// 		});
		
// 		layer.on('click', (e) => {
			
// 			if(this.agglos !== undefined) {
// 				this.state.map.removeLayer(this.agglos)
// 			}

// 			this.state.map.fitBounds(layer.getBounds());

// 			const ISO3_CODE = feature.properties.ISO3_CODE; 
// 			this.setState({ISO3_CODE})
			
// 			const ISO3_ID = feature.properties.ID;
// 			const ISO3_NAME = feature.properties.NAME_EN;
// 			const pairs = { value: ISO3_ID, label:ISO3_NAME}
// 			this.setState({ISO3_NAME,ISO3_ID})


// 			this.props.handleISO(pairs)
// 			this.state.map.addLayer(this.agglos)
// 		});
// 		layer._leaflet_id = feature.properties.ID;
// 	}

// 	triggerEventFromSearch(prevProps){
// 		if(this.props.selectedCountry.value !== prevProps.selectedCountry.value){
// 			const clickOnMapItem = (a) => {
// 				var countryId = parseInt(a, 10);
// 				var layer = this.mapOverlay.getLayer(countryId);
// 				layer.fireEvent('click'); 
// 			}
// 			let value = this.props.selectedCountry.value;
// 			console.log(value)
// 			clickOnMapItem(value);
// 		}
// 	}

// 	// addLayer(africaContinent){
// 	// 	const mapOverlay = L.geoJson(africaContinent, {
// 	// 		onEachFeature: this._onEachFeature,
// 	// 	})
// 	// 	mapOverlay.addTo(this.state.map);
// 	// 	mapOverlay.setStyle({
// 	// 		fillOpacity: 0,
// 	// 		color: 'transparent'
// 	// 	})
// 	// }

// 	//Year filter for citieslist
// 	_yearFilter(feature) {
// 		if (feature.properties.Year === "a") return true
// 	}

// 	//Dimming the area outside of African continent 
// 	addDimLayer(shades){
// 		if(this.state.map){
// 		const mapShades = L.geoJson(shades, {
// 			invert:true,
// 			color:"grey",
// 			stroke: false,
// 			fillOpacity:0.8
// 		})
// 		mapShades.addTo(this.state.map);
// 		}
// 	}

// 	init(id){
// 		if (this.state.map) return;
// 		let map = L.map(id, config.params);
// 		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
		
	
// 		this.setState({ map, tileLayer });

// 		// if(map){
// 		// 	const mapOverlay = L.geoJson(this.props.africaContinent, {
// 		// 		onEachFeature: this._onEachFeature,
// 		// 	})
// 		// 	mapOverlay.addTo(map);
// 		// 	mapOverlay.setStyle({
// 		// 		fillOpacity: 0,
// 		// 		color: 'transparent'
// 		// 	})
// 		// }
// 	}


// 	_cityFilter(feature){
// 		if (feature.properties.ISO === this.state.ISO3_CODE)
// 		return true
// 	}

// 	_pointToLayer(feature, latlng){
// 		const geojsonMarker = {
// 			radius: 4,
// 			fillColor: "#FFF",
// 			color: "#E8AE40",
// 			weight: 1,
// 		};
// 		return L.circleMarker(latlng, geojsonMarker);
// 	}

// 	_onCityFeature(feature, layer) {
// 		let popupContent = "<table class='tooltip-table'>";
// 		popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.NAME + "</td></tr>";
// 		popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.PTA2015 + "</td></tr>";
// 		popupContent += "</table>";
// 		layer.bindPopup(popupContent).openPopup();
// 	}


// 	render() {
// 		return (
// 			<div ref={(node) => this._mapNode = node} id="map" />
// 		)
// 	}
// }

// export default LeafletMap;



// import React from 'react';
// import { Component } from 'react';
// import  L  from 'leaflet';
// import './data/leaflet.snogylop.js';
// import "../../node_modules/leaflet/dist/leaflet.css";

// const southWest = L.latLng(-48.739134, -19.058270);
// const northEast = L.latLng(42.157281, 51.089421);
// const mybounds = L.latLngBounds(southWest, northEast);
// let config = {};
// config.params = {
// 	center: [1.46,18.3],
// 	zoom: 3,
// 	zoomSnap: 1.2,
// 	minZoom: 3,
// 	maxBounds:mybounds,
// 	hasAlreadyUpdatedOnce: false,
// 	opacity:0
// };
// config.tileLayer = {
// 	uri: 'https://api.mapbox.com/styles/v1/mkmd/cjj041lbo07vo2rphltlukpya/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
// 	params: {
// 		maxZoom: 18,
// 		id: '',
// 	}
// };

// class LeafletMap extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			map: null,
// 			tileLayer: null,
// 			selectedLayer: 0,
// 		};
		

// 		this._mapNode = null;
// 		this._onEachFeature = this._onEachFeature.bind(this);
// 		this._onCityFeature = this._onCityFeature.bind(this);
// 		this._yearFilter = this._yearFilter.bind(this);
// 		this._pointToLayer = this._pointToLayer.bind(this);
// 		this._cityFilter = this._cityFilter.bind(this);
// 		this.clickOnMapItem = this.clickOnMapItem.bind(this);
// 		this.clickEvent = this.clickEvent.bind(this);
// 	}

// 	componentDidMount() {
// 		if (!this.state.map) {
// 			this.init(this._mapNode);
// 		}
// 	}
// 	//re-render on updatef
// 	componentDidUpdate(prevProps, prevState){
// 		const agglos = this.agglos = L.geoJson(this.props.agglosGeo, {
// 			onEachFeature: this._onCityFeature, 
// 			filter: this._cityFilter,
// 			pointToLayer: this._pointToLayer
// 		});

// 		agglos.addTo(this.state.map);
// 		console.log('ADDING LAYER');
// 		const mapOverlay = L.geoJson(this.props.africaContinent, {
// 			onEachFeature: this._onEachFeature,
// 		})
// 		// agglos.addTo(this.state.map);
// 		mapOverlay.addTo(this.state.map);
// 		mapOverlay.setStyle({
// 			fillOpacity: 0,
// 			color: 'transparent'
		
// 		})
		
// 		if(this.props.selectedCountry && agglos !== undefined){
// 			// this.state.map.removeLayer(this.agglos)

// 			// this.triggerEventFromSearch(prevProps, this.props.selectedCountry.value);
// 			let currValue = this.props.selectedCountry.value;
// 			let prevValue = prevProps.selectedCountry.value;
// 			var layer = mapOverlay.getLayer(currValue);
// 			// this.clickOnMapItem(layer, prevValue, currValue)
// 		}
// 	}

// 	_onEachFeature(feature, layer){
// 		layer.on('mouseover', () => {
// 			layer.setStyle({
// 			fillOpacity: 0.6,
// 			color: '#E8AE40',
// 			stroke: false
// 			});
// 		});

// 		layer.on('mouseout', () => {
// 			layer.setStyle({
// 			fillOpacity: 0.0,
// 			color: 'transparent'
// 			});
// 		});

// 		layer.on('change', () => {
// 			if(this.agglos !== undefined){
// 				this.state.map.removeLayer(this.agglos)
// 			}
// 			this.state.map.fitBounds(layer.getBounds());

// 			const ISO3_CODE = feature.properties.ISO3_CODE; 
// 			this.setState({ISO3_CODE})
// 		})

// 		layer.on('click', (e) => {


// 			if(this.agglos !== undefined){
// 				console.log('REMOVING LAYER FROM CLICK');
// 				this.state.map.removeLayer(this.agglos)
// 			}
// 			this.state.map.fitBounds(layer.getBounds());
			
// 			const ISO3_ID = feature.properties.ID;
// 			const ISO3_NAME = feature.properties.NAME_EN;
// 			const pairs = { value: ISO3_ID, label:ISO3_NAME}
// 			// this.setState({ISO3_NAME,ISO3_ID})
// 			// this.props.handleISO(pairs)
			
// 			const ISO3_CODE = feature.properties.ISO3_CODE; 
// 			this.setState({ISO3_CODE, ISO3_NAME, ISO3_ID})
// 			this.handleChange(pairs);
// 			// this.state.map.addLayer(agglos);
// 		});

// 		layer._leaflet_id = feature.properties.ID;
// 	}

// 	handleChange = (value) => {
// 		this.props.handleISO(value);
// 	}

// 	clickEvent(placeHolder, feature, layer){

// 		placeHolder.clearLayers();  
// 		this.state.map.fitBounds(layer.getBounds());

// 		const ISO3_CODE = feature.properties.ISO3_CODE; 
// 		this.setState({ISO3_CODE})

// 		const agglos = L.geoJson(this.props.agglosGeo, {
// 			onEachFeature: this._onCityFeature, 
// 			filter: this._cityFilter,
// 			pointToLayer: this._pointToLayer
// 		});

// 		placeHolder.addLayer(agglos);
// 	}

// 	clickOnMapItem(layer, prevValue, currValue){
// 		if(currValue && prevValue !== currValue){
// 			layer.fireEvent('change');
// 		}
// 	}

// 	//Year filter for citieslist
// 	_yearFilter(feature) {
// 		if (feature.properties.Year === "a") return true
// 	}

// 	_cityFilter(feature){
// 		if (feature.properties.ISO === this.state.ISO3_CODE)
// 		return true
// 	}

// 	init(id){
// 		if (this.state.map) return;
// 		let map = L.map(id, config.params);
// 		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
		
// 		this.setState({ map, tileLayer });
// 		const mapShades = L.geoJson(this.props.africaOne, {
// 			invert:true,
// 			color:"grey",
// 			stroke: false,
// 			fillOpacity:0.8
// 		})
// 		mapShades.addTo(map);
// 	}

// 	_pointToLayer(feature, latlng){
// 		const geojsonMarker = {
// 			radius: 4,
// 			fillColor: "#FFF",
// 			color: "#E8AE40",
// 			weight: 1,
// 		};
// 		return L.circleMarker(latlng, geojsonMarker);
// 	}

// 	_onCityFeature(feature, layer) {
// 		let popupContent = "<table class='tooltip-table'>";
// 		popupContent += "<tr><td class='title'>Name:</td><td class='data'>" + feature.properties.NAME + "</td></tr>";
// 		popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.PTA2015 + "</td></tr>";
// 		popupContent += "</table>";
// 		layer.bindPopup(popupContent).openPopup();
// 	}

// 	render() {
// 		return (
// 			<div ref={(node) => this._mapNode = node} id="map" />
// 		)
// 	}
// }

// export default LeafletMap;