import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import { BarChart, Cell, Bar, Tooltip } from 'recharts'; 
import Paper from '@material-ui/core/Paper';


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
                            <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
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
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
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
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
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
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
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
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
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
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
                    ))}
                </Bar>
                <Tooltip/> 
            </BarChart>    
        )
    }


    check(e){
        return(e === this.props.selectedCountry)     
    }    

    renderRanking(data){
        let d = data.map(u => u.ID)
        let rank = data.length - (d.findIndex(this.check) + 1)
        return(
            <p>Rank: <br/><span>{ rank + 1 }</span>/{data.length}</p>
        )
    }

    population(data, value){
        let d = data.find(u => u.ID === value)
        let num = d.urbanPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return(
            <p>{num}</p>
        )
    }

    urbanisationlevel(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{d.urbanizationLevel}</p>
        )
    }

    numofagglomeration(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{d.urbanAgglos}</p>
        )
    }

    metropolitan(data, value){
        let d = data.find(u => u.ID === value)
        let num = d.metropolitanPop.toFixed(2);
        return(
            <p>{num}</p>
        )
    }

    averagedist(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{d.AverageDist}km&sup2;</p>
        )
    }

    urbanland(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{d.urbanSurface}km2</p>
        )
    }



    render() {
        const dataUrbanPopulation = this.props.countryData.map((d, i) => (
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

        const urbanPopulationData = dataUrbanPopulation.sort((a,b) => a.urbanPopulationScaled - b.urbanPopulationScaled);
        const urbanizationLevelData = dataUrbanizationLevel.sort((a,b) => a.urbanizationLevel - b.urbanizationLevel);
        const agglomerationData = dataAgglomerations.sort((a,b) => a.urbanAgglos - b.urbanAgglos);
        const metroPolitanData = dataMetropolitan.sort((a,b) => a.metropolitanPop - b.metropolitanPop);
        const averageDistData = dataAverageDist.sort((a,b) => a.AverageDistScaled - b.AverageDistScaled);
        const urbanSurfData = dataUrbanSurf.sort((a,b) => a.urbanSurface - b.urbanSurface);
        const { selectedCountry } = this.props;
        return(
            <Row className="no-padding">
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Urban Population</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.population(urbanPopulationData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(urbanPopulationData)}</Col>
                            <Col md={4} className="country-histogram-wrapper"> {this.renderUrbanPopulation(urbanPopulationData, selectedCountry)} </Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Urbanisation Level</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.urbanisationlevel(urbanizationLevelData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(urbanizationLevelData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderUrbanizationLevel(urbanizationLevelData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col> 
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Number of Agglomerations</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.numofagglomeration(agglomerationData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(agglomerationData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderAgglos(agglomerationData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Metropolitan Population</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.metropolitan(metroPolitanData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(metroPolitanData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderMetropolitan(metroPolitanData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Average Distance between Agglomerations</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.averagedist(averageDistData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(averageDistData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderAvgDist(averageDistData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Urban Land Cover</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.urbanland(urbanSurfData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(urbanSurfData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderUrbanSurf(urbanSurfData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
            </Row>
        );
    }
}

export default CountryHistogram;




