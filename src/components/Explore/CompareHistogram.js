import React, { Component } from 'react';
import { BarChart, Cell, Bar, Tooltip } from 'recharts';
import MaterialIcon from 'material-icons-react';


class CompareHistogram extends Component {

    constructor(props){
        super(props);
        this.state={
        }
        this.checkFirst = this.checkFirst.bind(this);
        this.checkSecond = this.checkSecond.bind(this);
        this.tooltipYOffset = 55;
        this.tooltipZindex = 1000;
    }


    // **** Render Rankings
    checkFirst(e){
        return(e === this.props.firstCountry)
    }
    checkSecond(e){
        return(e === this.props.secondCountry)
    }

    renderFirstRanking(data, value){
        let d = data.map(u => u.ID)
        let rank = data.length - (d.findIndex(this.checkFirst) + 1)
        return(
            <div className="first-histogram-ranking">
                <p>Rank: <span>{ rank + 1 }</span>/{data.length}</p>
            </div>
        )
    }   

    renderSecondRanking(data){
        let d = data.map(u => u.ID)
        let rank = data.length - (d.findIndex(this.checkSecond) + 1)
        return(
            <div className="second-histogram-ranking">
                <p>Rank: <span>{ rank + 1 }</span>/{data.length}</p>
            </div>
        )
    }

    //  **** Display country's values
    population(data, value){
        if(value){
            let d = data.find(u => u.ID === value)
            return(
                <p>{d.urbanPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            )
        }else if(!value){
            return;
        }
    }
    
    urbanisationlevel(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.urbanizationLevel*100)+'%'}</p>
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
            <div className="histogram-title compare">
                {title}
                <MaterialIcon icon="info" size={15} className="icon-color"/>
                <p className="infotext"> {info} </p>
            </div>
        )
    }


    renderFirstCountry(firstCountry){
        if(firstCountry){
            const country = this.props.countryData.find(u => u.ID === firstCountry);
            return <div className="first-country-label">{country.Country}</div>
        }else{
            return(<div className="first-country-label"></div>)
        }
    }

    renderSecondCountry(secondCountry){
        if(secondCountry){
            const country = this.props.countryData.find(u => u.ID === secondCountry);
            return <div className="second-country-label">{country.Country}</div>
        }else{
            return <div className="second-country-label"></div>
        }
    }

    firstCountry(data, value) {
        if(value){
            return (
                <div className="first-country-wrapper">
                    {this.population(data, value)}
                    {this.renderFirstRanking(data, value)}
                </div>
            );
        }else if(!value){
            return <div className="first-country-wrapper"></div>
        }
    }

    secondCountry(data, value) {
        if(value){
            return (
                <div className="second-country-wrapper">
                    {this.population(data, value)}
                    {this.renderSecondRanking(data, value)}
                </div>
            );
        }else{
            return(
                <div className="second-country-wrapper"></div>
            )
        }
    }

    larger(data, firstCountry, secondCountry){
        if(firstCountry && secondCountry){
            const pop = data.find(u => u.ID === firstCountry);
            const pop2 = data.find(u => u.ID === secondCountry);
            let popOne = pop.urbanPopulation;
            let popTwo = pop2.urbanPopulation;
            if(popOne > popTwo){
                return <div className="comparison"> &lt; </div>
                
            }else if(popOne === popTwo){
                return <div className="comparison"> &#61; </div>
            }else{
                return <div className="comparison"> &gt; </div>
            }
        }
    }

    render() {

        let value = this.props.timeSliderValue;
        if (this.props.countryData) {
            for (var j = 0; j < 5; ++j){
                let variables = ["Upop","NumAgglos","ADBC","Mpop","Ulvl_Scaled"]
                for(var i = 0; i < 50; ++i) {
                    if(this.props.countryData[i][variables[j]+"_sel"]) {
                        delete this.props.countryData[i][variables[j]+"_sel"];
                    }
                    Object.defineProperty(this.props.countryData[i], variables[j]+"_sel",
                    Object.getOwnPropertyDescriptor(this.props.countryData[i], variables[j] + value));
                }
            }
        }

        const dataUrbanPopulation = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanPopulation":d.Upop_sel,
                "urbanPopulationScaled":d.Upop_sel,
                "title": "Urban population",
                "info": "Total number of people living in urban agglomerations"
            }
        ))

        const dataUrbanizationLevel = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanizationLevel": d.Ulvl_Scaled_sel,
                "title": "Urbanisation level",
                "info": "Share of the urban population in total population"
            }
        ))

        const dataAgglomerations = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanAgglos": d.NumAgglos_sel,
                "urbanAgglosScaled": d.NumAgglos_sel,
                "title": "Number of agglomerations",
                "info": "Total number of urban agglomerations in country"
            }
        ))

        const dataMetropolitan = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "metropolitanPop": d.Mpop_sel,
                "title": "Metropolitan population",
                "info": "Share of metropolitan population in total urban population"
            }
        ))

        const dataAverageDist = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "AverageDist": d.ADBC_sel,
                "AverageDistScaled": d.ADBC_sel,
                "title": "Average distance between agglomerations",
                "info": "Average distance between urban agglomerations, calculated as average of distance between all pair of cities"
            }
        ))

        const dataUrbanSurf = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanSurface": d.Usurf,
                "title": "Urban land cover",
                "info": "Share of total surface area covered by urban agglomerations"
            }
        ))

        const urbanPopulationData = dataUrbanPopulation.sort((a,b) => a.urbanPopulationScaled - b.urbanPopulationScaled);
        const urbanizationLevelData = dataUrbanizationLevel.sort((a,b) => a.urbanizationLevel - b.urbanizationLevel);
        const agglomerationData = dataAgglomerations.sort((a,b) => a.urbanAgglos - b.urbanAgglos);
        const metroPolitanData = dataMetropolitan.sort((a,b) => a.metropolitanPop - b.metropolitanPop);
        const averageDistData = dataAverageDist.sort((a,b) => a.AverageDistScaled - b.AverageDistScaled);
        const urbanSurfData = dataUrbanSurf.sort((a,b) => a.urbanSurface - b.urbanSurface);
        
        const { firstCountry, secondCountry } = this.props;
        return(
            <div className="histogram_compare-wrapper">
                <div className="compare-wrapper-titles">
                    <div className="compare-title-keyfigure"> Key Figure </div>
                    {this.renderSecondCountry(secondCountry)}
                    <div className="comparison"></div>
                    {this.renderFirstCountry(firstCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataUrbanPopulation[0].info, dataUrbanPopulation[0].title)}
                    {this.secondCountry(urbanPopulationData, secondCountry)}
                    {this.larger(urbanPopulationData, firstCountry,secondCountry)}
                    {this.firstCountry(urbanPopulationData, firstCountry)}
                </div>
                {/* <div className="compare-wrapper">
                    {this.renderInfo(dataUrbanizationLevel[0].info, dataUrbanizationLevel[0].title)}
                    {this.firstCountry(urbanizationLevelData, firstCountry)}
                    {this.larger(dataUrbanizationLevel, firstCountry,secondCountry)}
                    {this.secondCountry(urbanizationLevelData, secondCountry)}
                </div> */}
                {/* <div className="compare-wrapper">
                    {this.renderInfo(dataAgglomerations[0].info, dataAgglomerations[0].title)}
                    {this.firstCountry(agglomerationData, firstCountry)}
                    {this.larger(dataAgglomerations, firstCountry,secondCountry)}
                    {this.secondCountry(agglomerationData, secondCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataMetropolitan[0].info, dataMetropolitan[0].title)}
                    {this.firstCountry(metroPolitanData, firstCountry)}
                    {this.larger(dataMetropolitan, firstCountry,secondCountry)}
                    {this.secondCountry(metroPolitanData, secondCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataAverageDist[0].info, dataAverageDist[0].title)}
                    {this.firstCountry(averageDistData, firstCountry)}
                    {this.larger(dataAverageDist, firstCountry,secondCountry)}
                    {this.secondCountry(averageDistData, secondCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataUrbanSurf[0].info, dataUrbanSurf[0].title)}
                    {this.firstCountry(urbanSurfData, firstCountry)}
                    {this.larger(dataUrbanSurf, firstCountry,secondCountry)}
                    {this.secondCountry(urbanSurfData, secondCountry)}
                </div> */}
            </div>
        )
    }

}

export default CompareHistogram;