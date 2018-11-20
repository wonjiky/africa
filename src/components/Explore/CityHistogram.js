import React, { Component } from 'react';
import { BarChart, Cell, Bar, Tooltip, LineChart, Line, XAxis, CartesianGrid } from 'recharts';
import MaterialIcon from 'material-icons-react';

let params = {
    histogramHeight: 100,
    histogramWidth: 200,
};

class CityHistogram extends Component {
    constructor(props){
        super(props);
        this.check = this.check.bind(this);
        this.tooltipYOffset = 100;
        this.tooltipZindex = 1000;
    }

    sendValueFromCityHistogram(e){
        // this.props.valueFromCityHistogram(e);
    }

    customTooltipOnYourLine_city(e){
        if (e.active && e.payload!=null && e.payload[0]!=null) {
            if(e.payload[0].payload["Population"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        {e.payload[0].payload["Population"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    </div>
                );
            }
            if(e.payload[0].payload["Density"]){
                return (
                <div className="custom-tooltip-agglos">
                    <span>{e.payload[0].payload["City"]}</span><br/>
                    {Math.round(e.payload[0].payload["Density"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} inhabitants &frasl; km&sup2;
                </div>)
                ;
            }
            if(e.payload[0].payload["Dist"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        <p>Closest Metro: <span>{e.payload[0].payload["Closest_Metropolitan"]}</span></p>
                        {e.payload[0].payload["Dist"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km
                    </div>
                );
            }
            if(e.payload[0].payload["BuiltUp"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        {Math.round(e.payload[0].payload["BuiltUp"]*100)/100} km&sup2;
                    </div>
                );
            }
            if(e.payload[0].payload["Voronoi"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        {Math.round(e.payload[0].payload["Voronoi"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km&sup2;
                    </div>
                );
            }
            if(e.payload[0].payload["name"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        Year {Math.round(e.payload[0].payload["name"])}
                        <p>{e.payload[0].payload["population"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
                    </div>
                );
            }
        }
    }

    customTooltipOnYourLine_city_FR(e){
        if (e.active && e.payload!=null && e.payload[0]!=null) {
            if(e.payload[0].payload["Population"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        {e.payload[0].payload["Population"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    </div>
                );
            }
            if(e.payload[0].payload["Density"]){
                return (
                <div className="custom-tooltip-agglos">
                    <span>{e.payload[0].payload["City"]}</span><br/>
                    {Math.round(e.payload[0].payload["Density"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} inhabitants &frasl; km&sup2;
                </div>)
                ;
            }
            if(e.payload[0].payload["Dist"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        <p>Closest Metro: <span>{e.payload[0].payload["Closest_Metropolitan"]}</span></p>
                        {e.payload[0].payload["Dist"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km
                    </div>
                );
            }
            if(e.payload[0].payload["BuiltUp"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        {Math.round(e.payload[0].payload["BuiltUp"]*100)/100} km&sup2;
                    </div>
                );
            }
            if(e.payload[0].payload["Voronoi"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        {Math.round(e.payload[0].payload["Voronoi"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km&sup2;
                    </div>
                );
            }
            if(e.payload[0].payload["name"]){
                return (
                    <div className="custom-tooltip-agglos">
                        <span>{e.payload[0].payload["City"]}</span><br/>
                        Year {Math.round(e.payload[0].payload["name"])}
                        <p>{e.payload[0].payload["population"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
                    </div>
                );
            }
        }
    }

    renderPopulation(data, selectedAgglos){
        if(this.props.language === 0){
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                            <Bar dataKey='PopulationScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                            <Bar dataKey='PopulationScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderDensity(data, selectedAgglos){
        if(this.props.language === 0){
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>

                        <Bar dataKey='DensityScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>

                        <Bar dataKey='DensityScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderDist(data, selectedAgglos){
        if(this.props.language ===0) {
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>

                        <Bar dataKey='DistScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
    
                        <Bar dataKey='DistScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderBuiltup(data, selectedAgglos){
        if(this.props.language===0){
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>

                        <Bar dataKey='BuiltUp' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
    
                        <Bar dataKey='BuiltUp' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderVoronoi(data, selectedAgglos){
        if(this.props.language === 0){
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>

                        <Bar dataKey='Voronoi_Scaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
    
                        <Bar dataKey='Voronoi_Scaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#c5543f' : '#e0e0e0'}/>
                            ))}
                        </Bar>
                        <XAxis height={5}/>
                        <Tooltip content={this.customTooltipOnYourLine_city_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderPopulation1950(data){
        if(this.props.language === 0){
            return(
                <div className="country-histogram-wrapper">
                    <LineChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                        <Line type="monotone" dataKey="population" stroke="#c5543f" fill="#c5543f"/>
                        <CartesianGrid strokeDasharray="1 1"/>
                        <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </LineChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <LineChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                        <Line type="monotone" dataKey="population" stroke="#c5543f" fill="#c5543f"/>
                        <CartesianGrid strokeDasharray="1 1"/>
                        <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </LineChart>
                </div>
            )
        }
    }


    check(e){
        return(e === this.props.selectedAgglos)
    }

    renderRanking(data, value){
        let d = data.map(u => u.ID)
        if(data[d.findIndex(this.check)]["Density"]===0||data[d.findIndex(this.check)]["Dist"]===0){
            return(
            <div className="histogram-ranking-agglos">
                <p>{value}:<br/><span>-</span>/{data.length}</p>
            </div>
            )
        }else {
            let rank = data.length - (d.findIndex(this.check) + 1)
            return(
                <div className="histogram-ranking-agglos">
                    <p>{value}:<br/><span>{ rank + 1 }</span>/{data.length}</p>
                </div>
            )
        }
    }

    population(data, value){
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <div className="histogram-value">
                <p>{d.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </div>
        )
        }else{return}
    }

    density(data, value){
        let d = data.find(u => u.ID === value)
        if(d.Density===0){
            return(
                <div className="histogram-value">
                    <p>Below 100 000</p>
                </div>
            )
        }
        else if(value) {
            return(
                <div className="histogram-value">
                    <p>{Math.round(d.Density).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}Inhabitants &frasl; km&sup2;</p>
                </div>
            )
        }
        else {
            return
        }
    }

    distance(data,value){
        let d = data.find(u => u.ID === value)
        if(d.Dist===0){
            return(
            <p> Metrpolitan agglomeration </p>
            )
        }else if(value){
        return(
            <div className="histogram-value">
                <p>{d.Dist.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}km</p>
            </div>
        )}else{return}
    }

    builtup(data, value){
        let d = data.find(u => u.ID === value)
        if(value){
            return(
                <div className="histogram-value">
                    <p>{d.BuiltUp}km&sup2;</p>
                </div>
            )
        }else{
            return
        }
    }

    voronoi(data,value){
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <div className="histogram-value">
                <p>{d.Voronoi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}km&sup2;</p>
            </div>
            )
        }else{
            return;
        }

    }

    filterAgglosForHistogram(data, selectedCountry){
        return data.filter(u => (u.ID === selectedCountry))
    }

    renderInfo(info, title){
        return(
            <div className="histogram-title">
                {title}
                <div className="tooltip-agglos">
                <MaterialIcon icon="info" size={15} className="icon-color"/>
                    <span className="tooltip-agglos-text">{info}</span>
                </div>
            </div>
        )
    }
    render() {
        const { selectedAgglos, agglosData, selectedCountry, language } = this.props;
        const rank = { EN: 'Rank', FR: 'Rang' };
        const agglos = this.filterAgglosForHistogram(agglosData, selectedCountry);
        const PopulationData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "Population": d.Population,
                "PopulationScaled": d.Population_Scaled,
                "title_EN": "Population",
                "info_EN": "Number of inhabitants living in the agglomeration",
                "title_FR": "Population",
                "info_FR": "Number of inhabitants living in the agglomeration"
            }
        )).sort((a,b) => a.PopulationScaled - b.PopulationScaled);

        const DensityData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "Density": d.Density,
                "DensityScaled": d.Density_Scaled,
                "title_EN": "Density",
                "info_EN": "Number of inhabitants per square kilometer in the agglomeration (Only above 100 000 inhabitants agglomeration is calculated)",
                "title_FR": "Densité",
                "info_FR": "Number of inhabitants per square kilometer in the agglomeration (Only above 100 000 inhabitants agglomeration is calculated)"
            }
        )).sort((a,b) => a.DensityScaled - b.DensityScaled);

        const DistData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "Dist": Math.round(d.DistToMetro),
                "DistScaled": d.DistToMetro_Scaled,
                "Closest_Metropolitan": d.Closest_Metropolitan,
                "title_EN": "Distance to metropolitan agglomeration",
                "info_EN": "Distance to nearest metropolitan agglomeration in kilometre and name",
                "title_FR": "Distance vers la métropole",
                "info_FR": "Distance to nearest metropolitan agglomeration in kilometre and name"
            }
        )).sort((a,b) => a.DistScaled - b.DistScaled);

        const BuiltupData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "BuiltUp": d.Build_up,
                "BuiltUp_Scaled": d.Build_up_scale,
                "title_EN": "Built-up area",
                "info_EN": "Surface of built-up area in square kilometre",
                "title_FR": "Bâti urbain",
                "info_FR": "Surface of built-up area in square kilometre"
            }
        )).sort((a,b) => a.BuiltUp - b.BuiltUp);

        const VoronoiData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "Voronoi": d.Voronoi,
                "Voronoi_Scaled": d.Voronoi_Scaled,
                "title_EN": "Size of Voronoi cell",
                "title_FR": "Taille de la cellule de Voronoï",
                "info_EN": "Size of Voronoi cell in Square kilometre ",
                "info_FR": "Size of Voronoi cell in Square kilometre "
            }
        )).sort((a,b) => a.Voronoi_Scaled - b.Voronoi_Scaled);
        const pop1950 = agglos.filter(u => u.City_ID === selectedAgglos)
        const Pop1950Data = pop1950.map((d) => (
            {
            "ID": d.City_ID,
            "City": d.cityName,
            "data":[
                { ID: d.City_ID, City: d.cityName, name: "1950", "population": d.P1950, 
                    "title_EN": "Population 1950-2015",
                    "info_EN": "Historical population of agglomeration",
                    "title_FR": "Population 1950-2015",
                    "info_FR": "Historical population of agglomeration"},
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
        // if(selectedAgglos === '') {console.log(' is : ', 'blank');}
        if(language === 0) {
            if(selectedAgglos && PopulationData.find(u => u.ID === selectedAgglos)){
                return(
                    <div className="histogram_agglos-wrapper">
                        <div className="explore_country-info">
                            <h3>urban agglomeration</h3>
                            <hr className="agglos_hr"/>
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(PopulationData[0].info_EN, PopulationData[0].title_EN)}
                            {this.population(PopulationData, selectedAgglos)}
                            {this.renderRanking(PopulationData, rank.EN)}
                            {this.renderPopulation(PopulationData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(DensityData[0].info_EN, DensityData[0].title_EN)}
                            {this.density(DensityData, selectedAgglos)}
                            {this.renderRanking(DensityData, rank.EN)}
                            {this.renderDensity(DensityData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(DistData[0].info_EN, DistData[0].title_EN)}
                            {this.distance(DistData, selectedAgglos)}
                            {this.renderRanking(DistData, rank.EN)}
                            {this.renderDist(DistData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(BuiltupData[0].info_EN, BuiltupData[0].title_EN)}
                            {this.builtup(BuiltupData, selectedAgglos)}
                            {this.renderRanking(BuiltupData, rank.EN)}
                            {this.renderBuiltup(BuiltupData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(VoronoiData[0].info_EN, VoronoiData[0].title_EN)}
                            {this.voronoi(VoronoiData, selectedAgglos)}
                            {this.renderRanking(VoronoiData, rank.EN)}
                            {this.renderVoronoi(VoronoiData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(Pop1950Data[0][0].info_EN, Pop1950Data[0][0].title_EN)}
                            {this.renderPopulation1950(Pop1950Data[0])} 
                        </div>
                    </div>
                );
            }else{
                return <div></div>
            }
        }else{
            if(selectedAgglos && PopulationData.find(u => u.ID === selectedAgglos)){
                return(
                    <div className="histogram_agglos-wrapper">
                        <div className="explore_country-info">
                            <h3>Agglomération urbaine</h3>
                            <hr className="agglos_hr"/>
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(PopulationData[0].info_FR, PopulationData[0].title_FR)}
                            {this.population(PopulationData, selectedAgglos)}
                            {this.renderRanking(PopulationData, rank.FR)}
                            {this.renderPopulation(PopulationData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(DensityData[0].info_FR, DensityData[0].title_FR)}
                            {this.density(DensityData, selectedAgglos)}
                            {this.renderRanking(DensityData, rank.FR)}
                            {this.renderDensity(DensityData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(DistData[0].info_FR, DistData[0].title_FR)}
                            {this.distance(DistData, selectedAgglos)}
                            {this.renderRanking(DistData, rank.FR)}
                            {this.renderDist(DistData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(BuiltupData[0].info_FR, BuiltupData[0].title_FR)}
                            {this.builtup(BuiltupData, selectedAgglos)}
                            {this.renderRanking(BuiltupData, rank.EN)}
                            {this.renderBuiltup(BuiltupData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(VoronoiData[0].info_FR, VoronoiData[0].title_FR)}
                            {this.voronoi(VoronoiData, selectedAgglos)}
                            {this.renderRanking(VoronoiData, rank.FR)}
                            {this.renderVoronoi(VoronoiData, selectedAgglos)}
                        </div>
                        <div className="indicator-wrapper">
                            {this.renderInfo(Pop1950Data[0][0].info_FR, Pop1950Data[0][0].title_FR)}
                            {this.renderPopulation1950(Pop1950Data[0])} 
                        </div>
                    </div>
                );
            }else{
                return <div></div>
            }
        }
    }
}

export default CityHistogram;
