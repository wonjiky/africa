import React, { Component } from 'react';
import ExploreContent from './ExploreContent';
import ExploreMixer from './ExploreMixer';
import Map from '../Map';
import '../../css/explore.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class ExploreWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            mixerToggle: true,
            mapToggle: true,
            collapseNav: true,
            mixerCol: 2,
            mapCol: 4,
            fromMap: "",
            fromContent: '',
            dselect: '',
            selectedCountry:''
            
        };
        this._onMixerToggle = this._onMixerToggle.bind(this); 
        this._onChangeISO_CONTENT = this._onChangeISO_CONTENT.bind(this)
        this._onChangeISO_MAP = this._onChangeISO_MAP.bind(this)
        this._onChangeISO = this._onChangeISO.bind(this)
        this.valToContent = this.valToContent.bind(this)
    }
    componentDidMount(){
    }
    _onMixerToggle() {
        this.setState({
            mixerToggle: !this.state.mixerToggle,
            mapToggle: !this.state.mapToggle,
            collapseNav: !this.state.collapseNav
        });
    }

    _mixerExpand = (mixerToggle) => {
        return(
            mixerToggle ? this.state.mixerCol : this.state.mixerCol-1
        );
    }
    
    _mapExpand(mapToggle) {
        return(
            mapToggle ? this.state.mapCol : this.state.mapCol+3
        );
    }

    _onChangeISO_CONTENT(e) {
        // const value = this.props.countries.find(u => u.ISO  === e.target.value);
        // this.setState({
        //     fromContent: value
        // });
    }

    _onChangeISO_MAP(e){
        //  this.setState({
        //     fromMap:e,
        //     origin: 'map' 
        // })
        console.log(e)
    }

    _onChangeISO(e){
        console.log(e)
        this.setState({
            selectedCountry:e
        })
    }

    valToContent(value){
        const val = this.props.countries.find(u => u.ISO  === value);
        return val
    }
    
    valueConvert(value, convert){
        const output = convert(value)
        return output;
    }

    render() {
        const origin = this.state.origin;
        const selected = origin === 'map' ? this.valueConvert(this.state.fromMap, this.valToContent) : this.state.fromMap;
        
        return(
            <Grid fluid className="full-height">
                <Row className="full-height">
                    <Col md={this._mapExpand(this.state.mapToggle)} className="no-margin">
                        <Map 
                            africaOne={this.props.africaOne}
                            top50={this.props.top50}
                            africaContinent={this.props.africaContinent}
                            agglosGeo={this.props.agglosGeo}
                            sendISO={this._onChangeISO_MAP}
                            selectedCountry={this.state.dselect}
                        />
                    </Col>
                    <Col md={this._mixerExpand(this.state.mixerToggle)} className="no-margin">
                        <ExploreMixer 
                            narratives={this.props.narratives} 
                            collapseNav={this.state.collapseNav}
                            onMixerToggle={this._onMixerToggle} 
                            mixerToggle={this._mixerToggle} 
                            mapToggle={this._mapToggle}
                            />
                    </Col>
                    <Col md className="no-margin">
                        <ExploreContent 
                            countries={this.props.countries} 
                            narratives={this.props.narratives}
                            africaContinent={this.props.africaContinent}
                            //Recieved from Content
                            onChange={this._onChangeISO}
                            //Passing to Content
                            selectedCountry={this.state.selectedCountry}
                            />
                    </Col>
                </Row>
            </Grid>
        );

    }

}

export default ExploreWrapper;
