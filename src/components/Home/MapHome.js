import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import 'leaflet-easyprint';
import 'leaflet-draw';
import 'leaflet.measurecontrol';
import 'leaflet-easybutton';
import '../../shared/leaflet.snogylop.js';
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet-draw/dist/leaflet.draw.css";
import "../../../node_modules/leaflet.measurecontrol/docs/leaflet.measurecontrol.css";

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
	measureControl:true,
	zoomControl:false
};
config.tileLayer = {
	//Original:
	uri: 'https://api.mapbox.com/styles/v1/mkmd/cjok8tye50dmu2smqd1uh51z0/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	uri2: 'https://api.mapbox.com/styles/v1/mkmd/cjj041lbo07vo2rphltlukpya/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	uri3: 'https://api.mapbox.com/styles/v1/mkmd/cjok90ksaadt12st8byurc9bp/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	uri4: 'https://api.mapbox.com/styles/v1/mkmd/cjooa2k5e47qh2sl8vu8z2o4f/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',

	params: {
		maxZoom: 18,
		tileSize: 512,
	  zoomOffset: -1,
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
			hello: null,
		};

		// this.onEachFeature = this.onEachFeature.bind(this);
		// this.agglos_onEachFeature = this.agglos_onEachFeature.bind(this);
		// this.agglos_pointToLayer = this.agglos_pointToLayer.bind(this);
		// this.agglos_cityFilter = this.agglos_cityFilter.bind(this);
		// this.placeHolder_filter = this.placeHolder_filter.bind(this);
		this.treemap_filter = this.treemap_filter.bind(this);
		// this.hoverStyle = this.hoverStyle.bind(this);
		// this.selectedStyle = this.selectedStyle.bind(this);
		this.treemap_pointToLayer = this.treemap_pointToLayer.bind(this);
		this.treemap_onEachFeature = this.treemap_onEachFeature.bind(this);
		// this.selectedAgglosStyle = this.selectedAgglosStyle.bind(this);
	}

	componentDidMount() {
		let map = L.map('map', config.params);

		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params)
		const tileLayer2 = L.tileLayer(config.tileLayer.uri2, config.tileLayer.params)
		const tileLayer3 = L.tileLayer(config.tileLayer.uri3, config.tileLayer.params)
		const tileLayer4 = L.tileLayer(config.tileLayer.uri4, config.tileLayer.params)
		this.setState({ map, tileLayer, tileLayer2, tileLayer3, tileLayer4});
		this.mapShades = L.geoJson(this.props.africaOne, {
			invert:true,
			color:"grey",
			stroke: false,
			fillOpacity:0.8
		})
		//this.mapShades.addTo(map);
		this.placeHolder = L.featureGroup();
		this.placeHolder.addTo(map);
		this.placeHolder.addLayer(tileLayer);

		this.abovefive = L.geoJson( { "type": "FeatureCollection", "features": [ { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 31.255,30.13 ] }, "properties": { "Name":"Cairo", "Population":22995802 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 3.337584742,6.589961167 ] }, "properties": { "Name":"Lagos", "Population":11810523 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 7.045712305,5.812861246 ] }, "properties": { "Name":"Onitsha", "Population":8530514 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 28.13184538,-26.06703456 ] }, "properties": { "Name":"Johannesburg", "Population":8314220 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 15.33483552,-4.396663245 ] }, "properties": { "Name":"Kinshasa", "Population":7270000 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 13.31293462,-8.926452268 ] }, "properties": { "Name":"Luanda", "Population":6979211 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 30.586,31.125 ] }, "properties": { "Name":"Alexandrie", "Population":6585102 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 36.7942443,-1.21047772 ] }, "properties": { "Name":"Nairobi aggl.", "Population":5877118 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 39.16785785,-6.819328852 ] }, "properties": { "Name":"Dar es Salaam", "Population":5325879 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 32.51556821,15.58927334 ] }, "properties": { "Name":"Khartum", "Population":5264746 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 34.74913174,0.38159039 ] }, "properties": { "Name":"Kisumu aggl.", "Population":5040159 } } ] }
		,{pointToLayer: this.abovefive_pointToLayer,
		  onEachFeature: this.onEachFeature_f
			 }	)

		L.easyButton( 'fa-search-minus', function(){
			map.setView([1.46,18.3],3);
		}).addTo(map);

		L.easyButton( 'fa-camera', function(){
			printer.printMap('CurrentSize', 'Africapolis');
		}).addTo(map);

		const printer = L.easyPrint({
					sizeModes: ['Current'],
					filename: 'Africapolis',
					exportOnly: true,
					hideControlContainer: true,
					hidden: true,
					customWindowTitle: "Copyright: SWAC"
		}).addTo(map);
	}

	// selectedStyle(layer){
	// 	layer.setStyle({
	// 		weight : 3,
	// 		color : '#c2523e',
	// 		stroke:true,
	// 		fillOpacity: 0,
	// 	});
	// }

	// hoverStyle(){
	// 	return({
	// 		color: '#E8AE40',
	// 		weight: 3,
	// 		stroke:true,
	// 		fillOpacity: 0,
	// 	})
	// }

	componentDidUpdate(prevProps, prevState){
		let treemapcurrValue = this.props.treemapSelect;
		let treemapprevValue = prevProps.treemapSelect;
		let treemap_click = this.props.treemapSelect_click;
		let treemap_click_prev = prevProps.treemapSelect_click;

		if(this.props.treemapFilter === 'narrative'){
			//this.state.map.removeLayer(this.tileLayer)
			this.placeHolder.removeLayer(this.tileLayer2)
			//this.placeHolder.addLayer(this.state.tileLayer)
			if(this.treemap)
			{this.placeHolder.removeLayer(this.treemap)}
			this.state.map.dragging.disable();
			this.state.map.touchZoom.disable();
			this.state.map.doubleClickZoom.disable();
			this.state.map.scrollWheelZoom.disable();
			this.state.map.boxZoom.disable();
			this.state.map.keyboard.disable();


		if(this.props.treemapFilter === 'narrative' && this.props.treemapValue === 0){
			  this.state.map.setView([1.46,18.3],3)
				if (prevProps.treemapValue !== this.props.treemapValue || prevProps.treemapFilter !== this.props.treemapFilter)
				{
							this.placeHolder.clearLayers()
							this.placeHolder.addLayer(this.state.tileLayer)}

					if (this.props.triggerAnim > prevProps.triggerAnim)
					{		//this.placeHolder.removeLayer(this.state.tileLayer);
							this.placeHolder.addLayer(this.state.tileLayer3);
}
					else if (this.props.triggerAnim < prevProps.triggerAnim)
					{		this.placeHolder.removeLayer(this.state.tileLayer3);
							this.placeHolder.addLayer(this.state.tileLayer);
}
			}
		else if(this.props.treemapFilter === 'narrative' && this.props.treemapValue === 1) {

				if (prevProps.treemapValue !== this.props.treemapValue || prevProps.treemapFilter !== this.props.treemapFilter)
				{	this.placeHolder.clearLayers()
					this.placeHolder.addLayer(this.state.tileLayer3)
					this.state.map.flyTo([-25.416,31.932],16)}
			  else if (this.props.triggerAnim 	> prevProps.triggerAnim)
				{
					this.state.map.flyTo([-25.945, 32.587],10)}
				else if (this.props.triggerAnim < prevProps.triggerAnim)
				{
					this.state.map.flyTo([-23.502,32.106],16)}



		} else if (this.props.treemapFilter === 'narrative' && this.props.treemapValue === 2)
		{ 	if (prevProps.treemapValue !== this.props.treemapValue || prevProps.treemapFilter !== this.props.treemapFilter)
			{	this.placeHolder.clearLayers()
				this.placeHolder.addLayer(this.state.tileLayer3)
			this.state.map.flyTo([5.75372, 6.993606],10)}



		}
		else if (this.props.treemapFilter === 'narrative' && this.props.treemapValue === 3)
		{	if (prevProps.treemapValue !== this.props.treemapValue || prevProps.treemapFilter !== this.props.treemapFilter)
			{	this.placeHolder.clearLayers()
				this.placeHolder.addLayer(this.state.tileLayer4)
			this.state.map.setView([1.46,18.3],3)}
			else if (this.props.triggerAnim > prevProps.triggerAnim)
			{this.placeHolder.addLayer(this.abovefive)

				}
			else if (this.props.triggerAnim < prevProps.triggerAnim)
			{this.placeHolder.removeLayer(this.abovefive)}


}
		else if (this.props.treemapFilter === 'narrative' && this.props.treemapValue === 4)
		{	if (prevProps.treemapValue !== this.props.treemapValue || prevProps.treemapFilter !== this.props.treemapFilter)
			{	this.placeHolder.clearLayers()
				this.placeHolder.addLayer(this.state.tileLayer3)
			this.state.map.setView([1.46,18.3],3)}


		}
	}

	else if(this.props.treemapFilter === 'treemap') {
		this.state.map.setView([1.46,18.3],3)
		this.placeHolder.removeLayer(this.state.tileLayer)
		this.placeHolder.removeLayer(this.state.tileLayer3);
		this.placeHolder.addLayer(this.state.tileLayer2)
		if(this.props.treemapFilter === 'treemap') {
			if(this.treemap){
				this.treemap.clearLayers(this.treemap);
			}
			this.state.map.dragging.enable();
			this.state.map.touchZoom.enable();
			this.state.map.doubleClickZoom.enable();
			this.state.map.scrollWheelZoom.enable();
			this.state.map.boxZoom.enable();
			this.state.map.keyboard.enable();
			this.treemap = L.geoJson(this.props.treemap_buildup, {
				filter: this.treemap_filter,
				onEachFeature: this.treemap_onEachFeature,
				pointToLayer: this.treemap_pointToLayer})
			this.placeHolder.addLayer(this.treemap);
		}

		if (treemap_click) {
			if (treemap_click_prev !== treemap_click) {
				let layer = this.treemap.getLayer(treemap_click);

				if(layer) {
					this.state.map.setView(layer._latlng, 10);
					layer.fire('click')}
					treemap_click = null;
					layer=null;
			}
		}

		if (treemapcurrValue){
			this.currLayer = this.treemap.getLayer(treemapcurrValue);
			this.prevLayer = this.treemap.getLayer(treemapprevValue);
		}

		if(treemapcurrValue !== treemapprevValue){
			let layer = this.treemap.getLayer(treemapcurrValue);
			layer.fire('mouseover')

			if(treemapprevValue){
				let layerprev = this.treemap.getLayer(treemapprevValue);
					if(layerprev){
						layerprev.fire('mouseout')
			}}}


	}



}
	treemap_onEachFeature(feature,layer){
		if(feature.geometry.type==="MultiPolygon"){
			layer.setStyle({fillColor: feature.properties.Color,color:feature.properties.Color,weight:0.5})
		} else {
			layer.on('mouseover', (e) => {
			e.target.setStyle(this.treemapHighlightStyle(feature))
			layer.bindTooltip(popupContent).openTooltip();
			})

			layer.on('mouseout', (e) => {
				e.target.setStyle(this.treemapAgglosStyle(feature))
			})

			layer.on('click', (e) => {
				e.target.setStyle(this.treemapHighlightStyle(feature))
				this.state.map.setView(layer._latlng, 10);
			})

			let popupContent = "<table class='tooltip-table'>";
			popupContent += "<tr><td class='title'></td>" + feature.properties.NAME + "</tr>";
			popupContent += "</table>";
			layer.bindPopup(popupContent).openPopup();
			layer._leaflet_id = feature.properties.City_ID;
		}
	}

	onEachFeature_f(feature,layer){
		let popupContent = "<tr><td class='title'></td>" + "Name: " + feature.properties.Name + "</tr>";
		popupContent += "</br><tr><td class='title'></td>" + "Population: " + feature.properties.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "</tr>";
		layer.bindPopup(popupContent).openPopup();
	}

	treemapHighlightStyle(feature){
		return({
			radius: 13,
			fillOpacity: .9,
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
		if(feature.geometry.type==="MultiPolygon") {
			feature.setstyle({fillColor: feature.properties.Color})
		} else {
			const geojsonMarker = this.treemapAgglosStyle(feature);
			return L.circleMarker(latlng, geojsonMarker);
	}}

	abovefive_pointToLayer(feature, latlng){

			const geojsonMarker = 		{
				radius: 6,
				fillColor: '#c2523e',
				fillOpacity: 0.4,
				stroke: true,
				color: '#c2523e',
				weight: 1,
			};
			return L.circleMarker(latlng, geojsonMarker);
	}

	treemap_filter(feature) {
		if (feature.properties.treemap_ID === this.props.treemapValue ) {
			return true
		}
	}

	render() {
		return (
			<div id="map"/>


		)
	}
}

export default LeafletMap;
