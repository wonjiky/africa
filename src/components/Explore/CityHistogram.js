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

    renderPopulation(data, selectedAgglos){
        const hi = data.map((u => u.ID))
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Brush 
                    dataKey='PopulationScaled' 
                    height={10} 
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='PopulationScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/> 
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip/> 
            </BarChart>    
        )
    }

    renderDensity(data, selectedAgglos){
        const hi = data.map((u => u.ID))
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Brush 
                    dataKey='DensityScaled' 
                    height={10} 
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='DensityScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/> 
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip/> 
            </BarChart>    
        )
    }

    renderDist(data, selectedAgglos){
        const hi = data.map((u => u.ID))
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Brush 
                    dataKey='DistScaled' 
                    height={10} 
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='DistScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/> 
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip/> 
            </BarChart>    
        )
    }

    renderBuiltup(data, selectedAgglos){
        const hi = data.map((u => u.ID))
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Brush 
                    dataKey='BuiltUp' 
                    height={10} 
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='BuiltUp' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/> 
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip/> 
            </BarChart>    
        )
    }

    renderVoronoi(data, selectedAgglos){
        const hi = data.map((u => u.ID))
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Brush 
                    dataKey='Voronoi_Scaled' 
                    height={10} 
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='Voronoi_Scaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/> 
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip/> 
            </BarChart>    
        )
    }
    
    renderPopulation1950(data){
        return(
            <LineChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Line type="monotone" dataKey="population" stroke="#E8AE40" fill="#E8AE40"/>
                <CartesianGrid strokeDasharray="1 1"/>
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

    population(data, value){
        console.log(data,value);
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <p>{d.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        )
        }else{return}
    }

    density(data, value){
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <p>{Math.round(d.Density*100)+'%'}</p>
        )
    }else{return}
    }

    distance(data,value){
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <p>{d.Dist.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        )
    }else{return}
    }

    builtup(data, value){
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <p>{Math.round(d.BuiltUp*100)+'%'}</p>
        )}
        else{return}
    }

    voronoi(data,value){
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <p>{d.Voronoi}km&sup2;</p>
        )}else{
            return;
        }
        
    }

    filterAgglosForHistogram(data, selectedCountry){
        return data.filter(u => (u.ID === selectedCountry))
    }

    render() {

        const { 
            selectedAgglos, 
            agglosData,
            selectedCountry 
        } = this.props;

        const agglos = this.filterAgglosForHistogram(agglosData, selectedCountry);

        const PopulationData = agglos.map((d) => (
            { 
                "ID": d.City_ID, 
                "City": d.cityName,
                "Population": d.Population, 
                "PopulationScaled": d.Population_Scaled,
            }
        )).sort((a,b) => a.PopulationScaled - b.PopulationScaled);

        const DensityData = agglos.map((d) => (
            { 
                "ID": d.City_ID, 
                "City": d.cityName,
                "Density": d.Density, 
                "DensityScaled": d.Density_Scaled,
            }
        )).sort((a,b) => a.DensityScaled - b.DensityScaled);

        const DistData = agglos.map((d) => (
            { 
                "ID": d.City_ID, 
                "City": d.cityName,
                "Dist": d.DistToMetro, 
                "DistScaled": d.DistToMetro_Scaled,
            }
        )).sort((a,b) => a.DistScaled - b.DistScaled);

        const BuiltupData = agglos.map((d) => (
            { 
                "ID": d.City_ID, 
                "City": d.cityName,
                "BuiltUp": d.Build_up, 
                "BuiltUp_Scaled": d.Build_up_scale,
            }
        )).sort((a,b) => a.BuiltUp - b.BuiltUp);

        const VoronoiData = agglos.map((d) => (
            { 
                "ID": d.City_ID, 
                "City": d.cityName,
                "Voronoi": d.Voronoi, 
                "Voronoi_Scaled": d.Voronoi_Scaled,
            }
        )).sort((a,b) => a.Voronoi_Scaled - b.Voronoi_Scaled);
        const pop1950 = agglos.filter(u => u.City_ID === selectedAgglos)
        const Pop1950Data = pop1950.map((d) => (
            {
            "ID": d.City_ID,
            "City": d.cityName,
            "data":[ 
                { ID: d.City_ID, City: d.cityName, name: "1950", "population": d.P1950 },
                { ID: d.City_ID, City: d.cityName, name: "1960", "population": d.P1960 },
                { ID: d.City_ID, City: d.cityName, name: "1970", "population": d.P1970 },
                { ID: d.City_ID, City: d.cityName, name: "1980", "population": d.P1980 },
                { ID: d.City_ID, City: d.cityName, name: "1990", "population": d.P1990 },
                { ID: d.City_ID, City: d.cityName, name: "2000", "population": d.P2000 },
                { ID: d.City_ID, City: d.cityName, name: "2010", "population": d.P2010 },
                { ID: d.City_ID, City: d.cityName, name: "2015", "population": d.Population },
            ]
        }
        )).map(e => e.data);
        const data1950 = Pop1950Data.map(u => u.data);
        

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
                        <span>CITY</span>
                    </Col>
                    <br/><br/>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>Population</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.population(PopulationData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(PopulationData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderPopulation(PopulationData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>Density</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.density(DensityData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(DensityData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderDensity(DensityData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>Distance to metropolitan agglomeration</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.distance(DistData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(DistData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderDist(DistData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>Built-up area</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.builtup(BuiltupData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(BuiltupData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderBuiltup(BuiltupData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>Size of voronoi cell</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.voronoi(VoronoiData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(VoronoiData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderVoronoi(VoronoiData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>Population 1950-2015</p></Col>
                                <Col md={3} className="country-histogram-value"></Col>
                                <Col md={1} className="agglosRanking"></Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderPopulation1950(Pop1950Data[0])} </Col>
                            </Row>
                        </Paper>
                    </Col>
                </Row>
            );
        }else{
            return <div></div>
        }
    }
}

export default CityHistogram;




