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
        if(value){
            let d = data.map(u => u.ID)
            let rank = data.length - (d.findIndex(this.checkFirst) + 1);
            console.log(rank);
            return(
                <div className="first-histogram-ranking">
                    <p>Rank: <span>{rank + 1}</span>/{data.length}</p>
                </div>
            )
        }
    }   

    renderSecondRanking(data, value){
        if(value){
            let d = data.map(u => u.ID)
            let rank = data.length - (d.findIndex(this.checkSecond) + 1);
            return(
                <div className="second-histogram-ranking">
                    <p>Rank: <span>{ rank + 1 }</span>/{data.length}</p>
                </div>
            )
        }
    }


    //  **** Display country's values
    population(data, value){
        if(value){
            let d = data.find(u => u.ID === value)
            return(
                <p>{d.figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            )
        }else if(!value){
            return;
        }
    }
    
    urbanisationlevel(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.figure*100)+'%'}</p>
            </div>
        )
    }

    numofagglomeration(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{d.figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </div>
        )
    }

    metropolitan(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.figure*100)+'%'}</p>
            </div>
        )
    }

    averagedist(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.figure)}km</p>
            </div>
        )
    }

    urbanland(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.figure*10000)/100}%</p>
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

    firstCountry(calculation, data, value) {
        console.log(value)
        if(value){
            return (
                <div className="first-country-wrapper">
                    {calculation(data, value)}
                    {this.renderFirstRanking(data, value)}
                </div>
            );
        }else if(!value){
            return <div className="first-country-wrapper"></div>
        }
    }

    secondCountry(calculation, data, value) {
        if(value){
            return (
                <div className="second-country-wrapper">
                    {calculation(data, value)}
                    {this.renderSecondRanking(data, value)}
                </div>
            );
        }else{
            return(
                <div className="second-country-wrapper"></div>
            )
        }
    }

    compareGreater(calculate, data, firstCountry, secondCountry){
        if(firstCountry && secondCountry){
            const firstData = data.find(u => u.ID === firstCountry);
            const secondData = data.find(u => u.ID === secondCountry);
            let firstValue = firstData.figure;
            let secondValue = secondData.figure;
            if(firstValue > secondValue){
                return <div className="comparison">&gt;</div>
                
            }else if(firstValue === secondValue){
                return <div className="comparison"> &#61; </div>
            }else{
                return <div className="comparison">&lt;</div>
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
                "figure":d.Upop_sel,
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
                "figure": d.Ulvl_Scaled_sel,
                "title": "Urbanisation level",
                "info": "Share of the urban population in total population"
            }
        ))

        const dataAgglomerations = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "figure": d.NumAgglos_sel,
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
                "figure": d.Mpop_sel,
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
                "figure": d.ADBC_sel,
                "title": "Average distance between agglomerations",
                "info": "Average distance between urban agglomerations, calculated as average of distance between all pair of cities"
            }
        ))

        const dataUrbanSurf = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "figure": d.Usurf,
                "title": "Urban land cover",
                "info": "Share of total surface area covered by urban agglomerations"
            }
        ))

        const urbanPopulationData = dataUrbanPopulation.sort((a,b) => a.figure - b.figure);
        const urbanizationLevelData = dataUrbanizationLevel.sort((a,b) => a.figure - b.figure);
        const agglomerationData = dataAgglomerations.sort((a,b) => a.figure - b.figure);
        const metroPolitanData = dataMetropolitan.sort((a,b) => a.figure - b.figure);
        const averageDistData = dataAverageDist.sort((a,b) => a.figure - b.figure);
        const urbanSurfData = dataUrbanSurf.sort((a,b) => a.figure - b.figure);
        
        const { firstCountry, secondCountry } = this.props;
        return(
            <div className="histogram_compare-wrapper">
                <div className="compare-wrapper-titles">
                    <div className="compare-title-keyfigure"></div>
                    {this.renderFirstCountry(firstCountry)}
                    <div className="comparison"></div>
                    {this.renderSecondCountry(secondCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataUrbanPopulation[0].info, dataUrbanPopulation[0].title)}
                    {this.firstCountry(this.population, urbanPopulationData, firstCountry)}
                    {this.compareGreater(this.population, urbanPopulationData, firstCountry, secondCountry)}
                    {this.secondCountry(this.population, urbanPopulationData, secondCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataUrbanizationLevel[0].info, dataUrbanizationLevel[0].title)}
                    {this.firstCountry(this.urbanisationlevel, urbanizationLevelData, firstCountry)}
                    {this.compareGreater(this.urbanisationlevel, urbanizationLevelData, firstCountry, secondCountry)}
                    {this.secondCountry(this.urbanisationlevel, urbanizationLevelData, secondCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataAgglomerations[0].info, dataAgglomerations[0].title)}
                    {this.firstCountry(this.numofagglomeration, agglomerationData, firstCountry)}
                    {this.compareGreater(this.numofagglomeration, agglomerationData, firstCountry, secondCountry)}
                    {this.secondCountry(this.numofagglomeration, agglomerationData, secondCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataMetropolitan[0].info, dataMetropolitan[0].title)}
                    {this.firstCountry(this.metropolitan, metroPolitanData, firstCountry)}
                    {this.compareGreater(this.metropolitan, metroPolitanData, firstCountry, secondCountry)}
                    {this.secondCountry(this.metropolitan, metroPolitanData, secondCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataAverageDist[0].info, dataAverageDist[0].title)}
                    {this.firstCountry(this.averagedist, averageDistData, firstCountry)}
                    {this.compareGreater(this.averagedist, averageDistData, firstCountry, secondCountry)}
                    {this.secondCountry(this.averagedist, averageDistData, secondCountry)}
                </div>
                <div className="compare-wrapper">
                    {this.renderInfo(dataUrbanSurf[0].info, dataUrbanSurf[0].title)}
                    {this.firstCountry(this.urbanland, dataUrbanSurf, firstCountry)}
                    {this.compareGreater(this.urbanland, dataUrbanSurf, firstCountry, secondCountry)}
                    {this.secondCountry(this.urbanland, dataUrbanSurf, secondCountry)}
                </div>
            </div>
        )
    }

}

export default CompareHistogram;