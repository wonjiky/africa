import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import { BarChart, Cell, Bar, Tooltip, Brush, ReferenceDot,AreaChart, Area, LineChart, Line, YAxis, XAxis, CartesianGrid } from 'recharts'; 
import Paper from '@material-ui/core/Paper';

let params = {
    histogramHeight: 100,
    histogramWidth: 200,
};

class Custom extends Component {
    render() {
        console.log(this.props.selectedAgglos);
    const {cx, cy, selectedAgglos, stroke, payload, value} = this.props;
        if(payload.ID){
            return (
                <svg x={cx - 10} y={cy - 10} width={5} height={5} fill="green" viewBox="0 0 1024 1024">
                    {/* <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z"/> */}
                </svg>
                );
            }
    }
  }

class CityHistogram extends Component {
    constructor(props){
        super(props);
        this.state={
        }
        this.check = this.check.bind(this);

    }

    sendValueFromCityHistogram(e){
        this.props.valueFromCityHistogram(e);
    }

    renderUrbanPopulation(data, selectedAgglos){
        const hi = data.map((u => u.ID))
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Brush 
                    dataKey='PopulationScaled' 
                    height={10} 
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="red"/>
                <Bar dataKey='PopulationScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? 'red' : 'lightgrey'}/> 
                    ))}
                
                </Bar>
                <XAxis height={5}/>
                <Tooltip/> 
            </BarChart>    
        )
    }
    
    renderPopulation(data, selectedAgglos){
        return(
            <LineChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Line type="monotone" dataKey="PopulationScaled" stroke="#8884d8" dot={<Custom />}/>
                <CartesianGrid strokeDasharray="1 1"/>
                {/* <XAxis dataKey="name"/> */}
                {/* <YAxis/> */}
                {/* <Line type="monotone" dataKey="PopulationScaled"
                dot={<Custom />}
                /> */}
                {/* <Area type='monotone' dataKey='PopulationScaled' stroke='lightgrey' fill='lightgrey' /> */}
                <ReferenceDot r={20} x={.2} y={3} fill="red" stroke="none" />
                <Tooltip />
            </LineChart>
        )
    }


    check(e){
        return(e === this.props.selectedAgglos)     
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

    filterAgglosForHistogram(data, selectedAgglos, selectedCountry){
        return data.filter(u => (u.ID === selectedCountry))
    }

    render() {

        const { 
            selectedAgglos, 
            agglosData,
            selectedCountry 
        } = this.props;

        const agglos = this.filterAgglosForHistogram(agglosData, selectedAgglos, selectedCountry);

        const PopulationData = agglos.map((d) => (
            { 
                "ID": d.City_ID, 
                "City": d.cityName,
                "Population": d.Population, 
                "PopulationScaled": d.Population_Scaled,
            }
        )).sort((a,b) => a.PopulationScaled - b.PopulationScaled);
        

        /*
        @@@LABELS: 
        1. Population
        2. Density (people/km^2, threshold to see >100 000)
        3. Distance to metropolitan agglomeration (crossing country, name on hover tooltip )
        4. Built-up area
        5. Size of voronoi cell
        6. Population 1950-2015 (Growth rate 1950-2015 line graph with points)
        */
 
        if(selectedAgglos){
            return(
                <Row className="no-padding">
                    <Col md={12}>
                    CITY
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>Population</p></Col>
                                {/* <Col md={3} className="country-histogram-value"> {this.population(urbanPopulationData, selectedCountry)}</Col> */}
                                {/* <Col md={1} className="rankingWrapper">{this.renderRanking(urbanPopulationData)}</Col> */}
                                <Col md={4} className="country-histogram-wrapper"> {this.renderUrbanPopulation(PopulationData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>Population</p></Col>
                                {/* <Col md={3} className="country-histogram-value"> {this.population(urbanPopulationData, selectedCountry)}</Col> */}
                                {/* <Col md={1} className="rankingWrapper">{this.renderRanking(urbanPopulationData)}</Col> */}
                                <Col md={4} className="country-histogram-wrapper"> {this.renderPopulation(PopulationData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                </Row>
                // <Row className="no-padding">
                //     <Col md={12} className="histogramTitle">city</Col>
                //     <Col md={12} className="countryKeyfigure"><span>Urban Population</span></Col><br/>
                //     <Col md={3} className="rankingWrapper">{this.renderRanking(urbanPopulationData)}</Col>
                //     <Col md={9}className="histogram">{this.renderUrbanPopulation(urbanPopulationData, selectedCountryValue.value)}</Col>
                //     <hr/>
                //     <Col md={12} className="countryKeyfigure"><span>Urbanisation Level</span></Col><br/>
                //     <Col md={3} className="rankingWrapper">{this.renderRanking(urbanizationLevelData)}</Col>
                //     <Col md={9}className="histogram">{this.renderUrbanizationLevel(urbanizationLevelData, selectedCountryValue.value)}</Col>
                //     <hr/>
                //     <Col md={12} className="countryKeyfigure"><span>Number of Agglomerations</span></Col><br/>
                //     <Col md={3} className="rankingWrapper">{this.renderRanking(agglomerationData)}</Col>
                //     <Col md={9}className="histogram">{this.renderAgglos(agglomerationData, selectedCountryValue.value)}</Col>
                //     <hr/>
                //     <Col md={12} className="countryKeyfigure"><span>Metropolitan Population</span></Col><br/>
                //     <Col md={3} className="rankingWrapper">{this.renderRanking(metroPolitanData)}</Col>
                //     <Col md={9}className="histogram">{this.renderMetropolitan(metroPolitanData, selectedCountryValue.value)}</Col>
                //     <hr/>
                //     <Col md={12} className="countryKeyfigure"><span>Average Distance between Agglomerations</span></Col><br/>
                //     <Col md={3} className="rankingWrapper">{this.renderRanking(averageDistData)}</Col>
                //     <Col md={9}className="histogram">{this.renderAvgDist(averageDistData, selectedCountryValue.value)}</Col>
                //     <hr/>
                //     <Col md={12} className="countryKeyfigure"><span>Urban Land Cover</span></Col><br/>
                //     <Col md={3} className="rankingWrapper">{this.renderRanking(urbanSurfData)}</Col>
                //     <Col md={9}className="histogram">{this.renderUrbanSurf(urbanSurfData, selectedCountryValue.value)}</Col>
                // </Row>
            );
        }else{
            return <div></div>
        }
    }
}

export default CityHistogram;




