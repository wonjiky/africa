import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import 'leaflet.defaultextent';
import 'leaflet-easyprint';
import 'leaflet-draw';
import 'leaflet.measurecontrol';
import 'leaflet-easybutton';
import '../../shared/leaflet.snogylop.js';
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet.defaultextent/dist/leaflet.defaultextent.css";
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
  	defaultExtentControl: true,
	measureControl:true,


};
config.tileLayer = {
	//Original:
	uri: 'https://api.mapbox.com/styles/v1/mkmd/cjj041lbo07vo2rphltlukpya/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	params: {
		maxZoom: 18,
	}
};

class LeafletMap extends Component {
	constructor(props){
		super(props)
		this.state = {
			map: null,
			tileLayer: null,
			firstLayer: null,
			secondLayer: null,
			selected_first: null,
      selected_second: null,
		};
		this.agglos_pointToLayer = this.agglos_pointToLayer.bind(this);
		this.agglos_cityFilter = this.agglos_cityFilter.bind(this);
		this.placeHolder_filter = this.placeHolder_filter.bind(this);
		this.hoverStyle = this.hoverStyle.bind(this);
		this.selectedStyle = this.selectedStyle.bind(this);
		this.secondStyle = this.secondStyle.bind(this);
		this.selectedAgglosStyle = this.selectedAgglosStyle.bind(this);
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

		this.placeHolder = L.featureGroup();
		this.placeHolder.addTo(map);

		const printer = L.easyPrint({
      		sizeModes: ['Current'],
      		filename: 'Africapolis',
      		exportOnly: true,
      		hideControlContainer: true,
					hidden: true,
					customWindowTitle: "Copyright: SWAC"
		}).addTo(map);

		L.easyButton( 'fa-camera', function(){
			printer.printMap('CurrentSize', 'Africapolis');
		}).addTo(map);
	}

	selectedStyle(layer){
		layer.setStyle({
			weight : 3,
			color : '#c2523e',
			stroke:true,
			fillOpacity: 0,
		});
	}

	secondStyle(layer){
		layer.setStyle({
			weight : 3,
			color: '#E8AE40',
			stroke:true,
			fillOpacity: 0,
		});
	}

	hoverStyle(){
		return({
			color: '#E8AE40',
			weight: 3,
			stroke:true,
			fillOpacity: 0,
		})
	}



	componentDidUpdate(prevProps, prevState){

		// var selected_first=null;
		// var selected_second=null;
		// this.placeHolder.clearLayers();

		// this.select1 = L.geoJson(this.props.africaContinent,{
		// 	style: () => {return {color: 'transparent'}},
		// 	onEachFeature: (feature, layer) => {
		// 		layer.on('click', (e) => {

		// 				selected_first = layer;
		// 				const first_ID = selected_first.feature.properties.ID;
		// 				// this.props.firstValueToMap(first_ID);
		// 				// console.log(selected_second)
		// 				 this.props.firstValueToMap(first_ID);
		// 				 //this.select2.resetStyle(selected_first);
		// 				 	// console.log('pass1')
		// 					// layer.fire('change')
		// 			});

		// 		layer.on('change', (e) => {

		// 			this.selectedStyle(e.target);
		// 			this.select2 = L.geoJson(this.props.africaContinent,{
		// 				style: () => {return {color: 'transparent'}},
		// 				onEachFeature: (feature, layer) => {

		// 					layer.on('click', (e) => {
		// 						// ***** ORIGINAL
		// 						//console.log(selected_second._leaflet_id)

		// 						//if (layer._leaflet_id !== selected_first._leaflet_id) {
		// 							//this.select2.resetStyle(selected_second);
		// 							console.log('passsss')
		// 							selected_second = layer;
		// 						  const second_ID = selected_second.feature.properties.ID;
		// 							this.props.secondValueToMap(second_ID);
		// 					});


		// 					layer.on('change', (e) => {
		// 						layer.setStyle(this.hoverStyle());
		// 						//this.placeHolder.clearLayers();
		// 						//this.placeHolder.addLayer(this.select1);
		// 						console.log('pass4')
		// 					});

		// 				layer._leaflet_id = feature.properties.ID+"selB";

		// 				}
		// 			});
		// 			 this.placeHolder.addLayer(this.select2);
		// 	});


		// 			layer._leaflet_id = feature.properties.ID+"selA";
		// 		}
		// });
		// this.placeHolder.addLayer(this.select1);





		// else if (currCountryValue !== prevCountryValue && currCountryValue === ''){
		// 	this.placeHolder.clearLayers();
		// }

			let {selectedCountry,selectedAgglos,firstCompareValue,secondCompareValue } = this.props;
			let value = this.props.timeSliderValue
			let currCountryValue = selectedCountry;
			let prevCountryValue = prevProps.selectedCountry;
			let currAgglosValue = selectedAgglos;
			let prevAgglosValue = prevProps.selectedAgglos;
			let Size = []
			
			// ** Timeslider 
			for(var i = 0; i < 7447; ++i) {
				if(this.props.agglosGeo[0]["features"][i]["properties"]["Size_sel"]) {
					delete this.props.agglosGeo[0]["features"][i]["properties"]["Size_sel"];
				}
				Object.defineProperty(this.props.agglosGeo[0]["features"][i]["properties"], "Size_sel",
				Object.getOwnPropertyDescriptor(this.props.agglosGeo[0]["features"][i]["properties"], "Size" + value));
			}

			// ** Single Select
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
								Size.push(feature.properties.Size_sel);

								layer._leaflet_id = feature.properties.City_ID;

								layer.on('mouseover', (e) => {
									e.target.setStyle(this.highlightAgglosStyle(feature))
									let popupContent = "<table margin={{top: -20, right: 0, left: 0, bottom: 0}}>";//feature.properties.NAME
											popupContent += "<tr></td><td class='data'>" + feature.properties.NAME + "</td></tr>";
										// popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.cityID + "</td></tr>";
											popupContent += "</table>";

									layer.bindTooltip(popupContent,{closeButton:false}).openTooltip();
								})

								layer.on('mouseout', (e) => {
									e.target.setStyle(this.defaultAgglosStyle(feature))
								})

								layer.on('change', () => {
									e.target.setStyle(this.selectedAgglosStyle())
								})

								layer.on('click', (e) => {
									const cityID = feature.properties.City_ID;
									const cityName = feature.properties.NAME;
									const value = { value:cityID, label:cityName}
									this.props.agglosValueToMap(value);
									this.state.map.setView(layer._latlng, 12);

									let popupContent = "<table>";//feature.properties.NAME
									popupContent += "<tr></td><td class='data'>" + feature.properties.NAME + "</td></tr>";
									// popupContent += "<tr><td class='title'>Population:</td><td class='data'>" + feature.properties.cityID + "</td></tr>";
									popupContent += "</table>";
									layer.bindPopup(popupContent,{closeButton:false}).openPopup();
								})
							},
							filter: this.agglos_cityFilter,
							pointToLayer: this.agglos_pointToLayer
						});

						this.props.sizeArray(Size);
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
			});
			this.mapOverlay.addTo(this.state.map);

			// ** Single select COUNTRY layer trigger
			if(currCountryValue !== prevCountryValue && currCountryValue !== ''){
				let layer = this.mapOverlay.getLayer(currCountryValue);
				layer.fire('change')
			} else if (currCountryValue !== prevCountryValue && currCountryValue === ''){
				this.placeHolder.clearLayers();
			}

			// ** Single select AGGLOMERATION layer trigger
			if (currAgglosValue !== prevAgglosValue && currAgglosValue !== ''){
				let agglosLayer = this.agglos.getLayer(currAgglosValue)
				agglosLayer.fire('click');
			}

			// ** Time slider trigger
			if (this.props.timeSliderValue !== prevProps.timeSliderValue){
				let layer = this.mapOverlay.getLayer(currCountryValue);
				layer.fire('change')
			}

			// ** Compare FIRST value trigger  
			if (firstCompareValue)
			{let layer = this.select1.getLayer(firstCompareValue+"selA");
			layer.fire('change')
			}
			
			// ** Compare SECOND value trigger
			if (secondCompareValue)
			{let layer = this.select2.getLayer(secondCompareValue+"selB");
			layer.fire('change')
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
		const geojsonMarker = this.defaultAgglosStyle(feature);
		return L.circleMarker(latlng, geojsonMarker);
	}

	highlightAgglosStyle(feature){
		return({
			radius: feature.properties.Size_sel*3+6,
			// fillColor: '#E8AE40',
			fillOpacity: 1,
			stroke: true,
			// color: '#E8AE40',
			weight: 1,
		})
	}

	selectedAgglosStyle(){
		return({
			radius: 20,
			fillColor: 'red',
			fillOpacity: 0.4,
			stroke: true,
			color: '#E8AE40',
			weight: 1,
		})
	}

	defaultAgglosStyle(feature){
		return({
			radius: this.getRadius(feature.properties.Size_sel),
			fillColor: this.getColor(feature.properties.Size_sel),
			fillOpacity: 0.4,
			stroke: true,
			color: this.getColor(feature.properties.Size_sel),
			weight: 1,
		})
	}

	getRadius(d){
		return(
			d === 6 ? d*3 :
			d === 5 ? d*3 :
			d === 4 ? d*3 :
			d === 3 ? d*3 :
			d === 2 ? d*3 :
			d === 1 ? d*3 : d*10
		)
	}

	getColor(d){
		return(
			d === 6 ? '#E73741' :
			d === 5 ? '#df521e' :
			d === 4 ? '#e1b400' :
			d === 3 ? '#32a674' :
			d === 2 ? '#0b68af' :
			d === 1 ? '#993484' : ''
		)
	}

	render() {
		return (
			<div id="map"/>


		)
	}
}

export default LeafletMap;
