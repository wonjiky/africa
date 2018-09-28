import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import { BarChart, Cell, Bar, Tooltip } from 'recharts'; 

class CountryHistogram extends Component {
    constructor(props){
        super(props);
        this.state={
        }
        this.check = this.check.bind(this);

    }

    sendValueFromHistogram(e){
        let values = {
            value: e.ID, label: e.Country
        }
        this.props.valueFromCountryHistogram(values);
    }

    renderUrbanPopulation(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='urbanPopulationScaled' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : 'lightgrey' }/>
                    ))}
                </Bar>
                <Tooltip/> 
            </BarChart>    
        )
    }

    renderUrbanizationLevel(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='urbanizationLevel' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : 'lightgrey' }/>
                    ))}
                </Bar>
                <Tooltip/> 
            </BarChart>    
        )
    }

    renderAgglos(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='urbanAgglos' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : 'lightgrey' }/>
                    ))}
                </Bar>
                <Tooltip/> 
            </BarChart>    
        )
    }

    renderMetropolitan(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='metropolitanPop' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : 'lightgrey' }/>
                    ))}
                </Bar>
                <Tooltip/> 
            </BarChart>    
        )
    }

    renderAvgDist(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='AverageDistScaled' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : 'lightgrey' }/>
                    ))}
                </Bar>
                <Tooltip/> 
            </BarChart>    
        )
    }

    renderUrbanSurf(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='urbanSurface' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : 'lightgrey' }/>
                    ))}
                </Bar>
                <Tooltip/> 
            </BarChart>    
        )
    }


    check(e){
        return(e === this.props.selectedCountryValue.value)     
    }    

    renderRanking(data){
        let d = data.map(u => u.ID)
        let rank = data.length - (d.findIndex(this.check) + 1)
        return(
            <div className="ranking">
                <p>Rank:<br/><span>{ rank + 1 }</span>/{data.length}</p>
            </div>
        )
    }

    render() {
        const data = this.props.countryData.map((d, i) => (
            { 
                "ID":d.ID, 
                "ISO":d.ISO, 
                "Country": d.Country,
                "urbanPopulation":d.Upop, 
                "urbanPopulationScaled":d.Upop_Scaled,
            }
        ))

        const dataUrbanizationLevel = this.props.countryData.map((d, i) => (
            { 
                "ID":d.ID, 
                "ISO":d.ISO, 
                "Country": d.Country,
                "urbanizationLevel": d.Ulvl_Scaled,
            }
        ))

        const dataAgglomerations = this.props.countryData.map((d, i) => (
            { 
                "ID":d.ID, 
                "ISO":d.ISO, 
                "Country": d.Country,
                "urbanAgglos": d.NumAgglos,
                "urbanAgglosScaled": d.NumAgglos_Scaled,
            }
        ))

        const dataMetropolitan = this.props.countryData.map((d, i) => (
            { 
                "ID":d.ID, 
                "ISO":d.ISO, 
                "Country": d.Country,
                "metropolitanPop": d.Mpop,
            }
        ))

        const dataAverageDist = this.props.countryData.map((d, i) => (
            { 
                "ID":d.ID, 
                "ISO":d.ISO, 
                "Country": d.Country,
                "AverageDist": d.ADBC,
                "AverageDistScaled": d.ADBC_Scaled,
            }
        ))

        const dataUrbanSurf = this.props.countryData.map((d, i) => (
            { 
                "ID":d.ID, 
                "ISO":d.ISO, 
                "Country": d.Country,
                "urbanSurface": d.Usurf,
            }
        ))

        const urbanPopulationData = data.sort((a,b) => a.urbanPopulationScaled - b.urbanPopulationScaled);
        const urbanizationLevelData = dataUrbanizationLevel.sort((a,b) => a.urbanizationLevel - b.urbanizationLevel);
        const agglomerationData = dataAgglomerations.sort((a,b) => a.urbanAgglos - b.urbanAgglos);
        const metroPolitanData = dataMetropolitan.sort((a,b) => a.metropolitanPop - b.metropolitanPop);
        const averageDistData = dataAverageDist.sort((a,b) => a.AverageDistScaled - b.AverageDistScaled);
        const urbanSurfData = dataUrbanSurf.sort((a,b) => a.urbanSurface - b.urbanSurface);

        

        const { selectedCountryValue } = this.props;
        return(
            <Row className="no-padding">
                <Col md={12} className="histogramTitle">city</Col>
                <Col md={12} className="countryKeyfigure"><span>Urban Population</span></Col><br/>
                <Col md={3} className="rankingWrapper">{this.renderRanking(urbanPopulationData)}</Col>
                <Col md={9}className="histogram">{this.renderUrbanPopulation(urbanPopulationData, selectedCountryValue.value)}</Col>
                <hr/>
                <Col md={12} className="countryKeyfigure"><span>Urbanisation Level</span></Col><br/>
                <Col md={3} className="rankingWrapper">{this.renderRanking(urbanizationLevelData)}</Col>
                <Col md={9}className="histogram">{this.renderUrbanizationLevel(urbanizationLevelData, selectedCountryValue.value)}</Col>
                <hr/>
                <Col md={12} className="countryKeyfigure"><span>Number of Agglomerations</span></Col><br/>
                <Col md={3} className="rankingWrapper">{this.renderRanking(agglomerationData)}</Col>
                <Col md={9}className="histogram">{this.renderAgglos(agglomerationData, selectedCountryValue.value)}</Col>
                <hr/>
                <Col md={12} className="countryKeyfigure"><span>Metropolitan Population</span></Col><br/>
                <Col md={3} className="rankingWrapper">{this.renderRanking(metroPolitanData)}</Col>
                <Col md={9}className="histogram">{this.renderMetropolitan(metroPolitanData, selectedCountryValue.value)}</Col>
                <hr/>
                <Col md={12} className="countryKeyfigure"><span>Average Distance between Agglomerations</span></Col><br/>
                <Col md={3} className="rankingWrapper">{this.renderRanking(averageDistData)}</Col>
                <Col md={9}className="histogram">{this.renderAvgDist(averageDistData, selectedCountryValue.value)}</Col>
                <hr/>
                <Col md={12} className="countryKeyfigure"><span>Urban Land Cover</span></Col><br/>
                <Col md={3} className="rankingWrapper">{this.renderRanking(urbanSurfData)}</Col>
                <Col md={9}className="histogram">{this.renderUrbanSurf(urbanSurfData, selectedCountryValue.value)}</Col>
            </Row>
        );
    }
}

export default CountryHistogram;




