import React, { Component } from 'react';
import { BarChart, Cell, Bar, Tooltip } from 'recharts';
import MaterialIcon from 'material-icons-react';

class CountryHistogram extends Component {
    constructor(props){
        super(props);
        this.state={
        }
        this.check = this.check.bind(this);
        this.tooltipYOffset = 55;
        this.tooltipZindex = 1000;
    }

    sendValueFromHistogram(e){
        let values = {
            value: e.ID, label: e.Country
        }
        this.props.valueFromCountryHistogram(values);
    }

    customTooltipOnYourLine(e){
        if (e.active && e.payload!=null && e.payload[0]!=null) {
            if(e.payload[0].payload["displayValue"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rank: {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_EN"]}</p>
                        {e.payload[0].payload["displayValue"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    </div>
                );
            }

            if(e.payload[0].payload["urbanLevel"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rank: {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_EN"]}</p>
                        {Math.round(e.payload[0].payload["urbanLevel"]*100)+"%"}
                    </div>
                );
            }

            if(e.payload[0].payload["urbanAgglos"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rank: {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_EN"]}</p>
                        {e.payload[0].payload["urbanAgglos"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} agglos
                    </div>
                );
            }

            if(e.payload[0].payload["metropolitanPop"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rank: {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_EN"]}</p>
                        {Math.round(e.payload[0].payload["metropolitanPop"]*100)+"%"}
                    </div>
                );
            }

            if(e.payload[0].payload["AverageDist"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rank: {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_EN"]}</p>
                        {Math.round(e.payload[0].payload["AverageDist"])+"km"}
                    </div>
                );
            }

            if(e.payload[0].payload["urbanSurface"]) {
                console.log(e.payload)
                return (
                    <div className="custom-tooltip-country">
                        <span>Rank: {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_EN"]}</p>
                        {Math.round(e.payload[0].payload["urbanSurface"]*10000)/100+"%"}
                    </div>
                    );
            }
        }
    }

    customTooltipOnYourLine_FR(e){
        if (e.active && e.payload!=null && e.payload[0]!=null) {
            if(e.payload[0].payload["displayValue"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rang : {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_FR"]}</p>
                        {e.payload[0].payload["displayValue"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    </div>
                );
            }

            if(e.payload[0].payload["urbanLevel"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rang : {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_EN"]}</p>
                        {Math.round(e.payload[0].payload["urbanLevel"]*100)+"%"}
                    </div>
                );
            }

            if(e.payload[0].payload["urbanAgglos"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rang : {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_FR"]}</p>
                        {e.payload[0].payload["urbanAgglos"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} agglos
                    </div>
                );
            }

            if(e.payload[0].payload["metropolitanPop"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rang : {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_FR"]}</p>
                        {Math.round(e.payload[0].payload["metropolitanPop"]*100)+"%"}
                    </div>
                );
            }

            if(e.payload[0].payload["AverageDist"]) {
                return (
                    <div className="custom-tooltip-country">
                        <span>Rang : {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_FR"]}</p>
                        {Math.round(e.payload[0].payload["AverageDist"])+"km"}
                    </div>
                );
            }

            if(e.payload[0].payload["urbanSurface"]) {
                console.log(e.payload)
                return (
                    <div className="custom-tooltip-country">
                        <span>Rang : {(e.label-50)*(-1)}</span>
                        <p>{e.payload[0].payload["Country_FR"]}</p>
                        {Math.round(e.payload[0].payload["urbanSurface"]*10000)/100+"%"}
                    </div>
                    );
            }
        }
    }

    renderUrbanPopulation(data, selectedCountry){
        if(this.props.language === 0) {
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='displayValue' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='displayValue' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderUrbanizationLevel(data, selectedCountry){
        if(this.props.language === 0){
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='urbanLevel' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='urbanLevel' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderAgglos(data, selectedCountry){
        if(this.props.language === 0){
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='urbanAgglos' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='urbanAgglos' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderMetropolitan(data, selectedCountry){
        if(this.props.language === 0){
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='metropolitanPop' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='metropolitanPop' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderAvgDist(data, selectedCountry){
        if(this.props.language === 0){
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='AverageDistScaled' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='AverageDistScaled' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                        <Tooltip content={this.customTooltipOnYourLine_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }

    renderUrbanSurf(data, selectedCountry){
        if(this.props.language === 0){
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='urbanSurface' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                    <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }else{
            return(
                <div className="country-histogram-wrapper">
                    <BarChart width={200} height={60} data={data}>
                        <Bar dataKey='urbanSurface' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                            ))}
                        </Bar>
                    <Tooltip content={this.customTooltipOnYourLine_FR} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                    </BarChart>
                </div>
            )
        }
    }


    check(e){
        return(e === this.props.selectedCountry)
    }

    renderRanking(data, rank){
        let d = data.map(u => u.ID)
        let calculateRanking = data.length - (d.findIndex(this.check) + 1)
        return(
            <div className="histogram-ranking">
                <p>{rank}: <br/><span>{ calculateRanking + 1 }</span>/{data.length}</p>
            </div>
        )
    }

    population(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{d.displayValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </div>
        )
    }

    urbanisationlevel(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.urbanLevel*100)+'%'}</p>
            </div>
        )
    }

    numofagglomeration(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{d.urbanAgglos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </div>
        )
    }

    metropolitan(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.metropolitanPop*100)+'%'}</p>
            </div>
        )
    }

    averagedist(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.AverageDist)}km</p>
            </div>
        )
    }

    urbanland(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.urbanSurface*10000)/100}%</p>
            </div>
        )
    }

    renderInfo(info, title){
        return(
            <div className="histogram-title">
                {title}
                <div className="tooltip-country">
                <MaterialIcon icon="info" size={15} className="icon-color"/>
                    <span className="tooltip-country-text">{info}</span>
                </div>
            </div>
        )
    }

    render() {
        const { selectedCountry, language, timeSliderValue } = this.props;
        const rank = { EN: 'Rank', FR: 'Rang' };

        if (this.props.countryData) {
            for (var j = 0; j < 5; ++j) {
                let variables = ["Upop","NumAgglos","ADBC","Mpop","Ulvl_Scaled"]
                for(var i = 0; i < 50; ++i) {
                    if(this.props.countryData[i][variables[j]+"_sel"]) {
                        delete this.props.countryData[i][variables[j]+"_sel"];
                    }
                    Object.defineProperty(this.props.countryData[i], variables[j]+"_sel",
                    Object.getOwnPropertyDescriptor(this.props.countryData[i], variables[j] + timeSliderValue));
                }
            }
        }

        const dataUrbanPopulation = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country_EN": d.Country,
                "Country_FR": d.Country_FR,
                "displayValue":d.Upop_sel,
                "urbanPopulationScaled":d.Upop_sel,
                "title_EN": "Urban population",
                "title_FR": "Population urbaine",
                "info_EN": "Total number of people living in urban agglomerations",
                "info_FR": "Nombre total de personnes vivant dans les agglomérations urbaines"
            }
        ))

        const dataUrbanizationLevel = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country_EN": d.Country,
                "Country_FR": d.Country_FR,
                "urbanLevel": d.Ulvl_Scaled_sel,
                "title_EN": "Urbanisation level",
                "title_FR": "Niveau d'urbanisation",
                "info_EN": "Share of the urban population in total population",
                "info_FR": "Part de la population métropolitaine dans la population totale"
            }
        ))

        const dataAgglomerations = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country_EN": d.Country,
                "Country_FR": d.Country_FR,
                "urbanAgglos": d.NumAgglos_sel,
                "urbanAgglosScaled": d.NumAgglos_sel,
                "title_EN": "Number of agglomerations",
                "title_FR": "Nombre d'agglomérations",
                "info_EN": "Total number of urban agglomerations in country",
                "info_FR": "Nombre total d'agglomérations dans le pays"
            }
        ))

        const dataMetropolitan = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country_EN": d.Country,
                "Country_FR": d.Country_FR,
                "metropolitanPop": d.Mpop_sel,
                "title_EN": "Metropolitan population",
                "title_FR": "Population métropolitaine",
                "info_EN": "Share of metropolitan population in total urban population",
                "info_FR": "Part de la population métropolitaine dans la population totale"
            }
        ))

        const dataAverageDist = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country_EN": d.Country,
                "Country_FR": d.Country_FR,
                "AverageDist": d.ADBC_sel,
                "AverageDistScaled": d.ADBC_sel,
                "title_EN": "Average distance between agglomerations",
                "title_FR": "Distance moyenne entre les agglomérations",
                "info_EN": "Average distance between urban agglomerations, calculated as average of distance between all pairs of cities",
                "info_FR": "Distance moyenne entre les agglomérations urbaines, calculée comme moyenne de la distance entre toutes les paires de villes"
            }
        ))

        const dataUrbanSurf = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country_EN": d.Country,
                "Country_FR": d.Country_FR,
                "urbanSurface": d.Usurf,
                "title_EN": "Urban land cover",
                "title_FR":"Couverture terrestre urbaine",
                "info_EN": "Share of total surface area covered by urban agglomerations",
                "info_FR": "Part de la surface totale couverte par les agglomérations urbaines"
            }
        ))

        const urbanPopulationData = dataUrbanPopulation.sort((a,b) => a.urbanPopulationScaled - b.urbanPopulationScaled);
        const urbanizationLevelData = dataUrbanizationLevel.sort((a,b) => a.urbanLevel - b.urbanLevel);
        const agglomerationData = dataAgglomerations.sort((a,b) => a.urbanAgglos - b.urbanAgglos);
        const metroPolitanData = dataMetropolitan.sort((a,b) => a.metropolitanPop - b.metropolitanPop);
        const averageDistData = dataAverageDist.sort((a,b) => a.AverageDistScaled - b.AverageDistScaled);
        const urbanSurfData = dataUrbanSurf.sort((a,b) => a.urbanSurface - b.urbanSurface);

        if(language === 0) {
            return(
                <div className="histogram_country-wrapper">
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataUrbanPopulation[0].info_EN, dataUrbanPopulation[0].title_EN)}
                        {this.population(urbanPopulationData, selectedCountry)}
                        {this.renderRanking(urbanPopulationData, rank.EN)}
                        {this.renderUrbanPopulation(urbanPopulationData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataUrbanizationLevel[0].info_EN, dataUrbanizationLevel[0].title_EN)}
                        {this.urbanisationlevel(urbanizationLevelData, selectedCountry)}
                        {this.renderRanking(urbanizationLevelData, rank.EN)}
                        {this.renderUrbanizationLevel(urbanizationLevelData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataAgglomerations[0].info_EN, dataAgglomerations[0].title_EN)}
                        {this.numofagglomeration(agglomerationData, selectedCountry)}
                        {this.renderRanking(agglomerationData, rank.EN)}
                        {this.renderAgglos(agglomerationData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataMetropolitan[0].info_EN, dataMetropolitan[0].title_EN)}
                        {this.metropolitan(metroPolitanData, selectedCountry)}
                        {this.renderRanking(metroPolitanData, rank.EN)}
                        {this.renderMetropolitan(metroPolitanData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataAverageDist[0].info_EN, dataAverageDist[0].title_EN)}
                        {this.averagedist(averageDistData, selectedCountry)}
                        {this.renderRanking(averageDistData, rank.EN)}
                        {this.renderAvgDist(averageDistData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataUrbanSurf[0].info_EN, dataUrbanSurf[0].title_EN)}
                        {this.urbanland(urbanSurfData, selectedCountry)}
                        {this.renderRanking(urbanSurfData, rank.EN)}
                        {this.renderUrbanSurf(urbanSurfData, selectedCountry)}
                    </div>
                </div>
            );
        }else{
            return(
                <div className="histogram_country-wrapper">
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataUrbanPopulation[0].info_FR, dataUrbanPopulation[0].title_FR)}
                        {this.population(urbanPopulationData, selectedCountry)}
                        {this.renderRanking(urbanPopulationData, rank.FR)}
                        {this.renderUrbanPopulation(urbanPopulationData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataUrbanizationLevel[0].info_FR, dataUrbanizationLevel[0].title_FR)}
                        {this.urbanisationlevel(urbanizationLevelData, selectedCountry)}
                        {this.renderRanking(urbanizationLevelData, rank.FR)}
                        {this.renderUrbanizationLevel(urbanizationLevelData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataAgglomerations[0].info_FR, dataAgglomerations[0].title_FR)}
                        {this.numofagglomeration(agglomerationData, selectedCountry)}
                        {this.renderRanking(agglomerationData, rank.FR)}
                        {this.renderAgglos(agglomerationData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataMetropolitan[0].info_FR, dataMetropolitan[0].title_FR)}
                        {this.metropolitan(metroPolitanData, selectedCountry)}
                        {this.renderRanking(metroPolitanData, rank.FR)}
                        {this.renderMetropolitan(metroPolitanData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataAverageDist[0].info_FR, dataAverageDist[0].title_FR)}
                        {this.averagedist(averageDistData, selectedCountry)}
                        {this.renderRanking(averageDistData, rank.FR)}
                        {this.renderAvgDist(averageDistData, selectedCountry)}
                    </div>
                    <div className="indicator-wrapper">
                        {this.renderInfo(dataUrbanSurf[0].info_FR, dataUrbanSurf[0].title_FR)}
                        {this.urbanland(urbanSurfData, selectedCountry)}
                        {this.renderRanking(urbanSurfData, rank.FR)}
                        {this.renderUrbanSurf(urbanSurfData, selectedCountry)}
                    </div>
                </div>
            )
        }
    }
}

export default CountryHistogram;
