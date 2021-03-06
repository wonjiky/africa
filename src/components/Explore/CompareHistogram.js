import React, { Component } from 'react';
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
        if(value && this.props.language === 0){
            let d = data.map(u => u.ID)
            let rank = data.length - (d.findIndex(this.checkFirst) + 1);
            return(
                <div className="first-histogram-ranking">
                    <p>Rank: <span>{rank + 1}</span>/{data.length}</p>
                </div>
            )
        }else if (value && this.props.language === 1){
            let d = data.map(u => u.ID)
            let rank = data.length - (d.findIndex(this.checkFirst) + 1);
            return(
                <div className="first-histogram-ranking">
                    <p>Rang : <span>{rank + 1}</span>/{data.length}</p>
                </div>
            )
        }
    }   

    renderSecondRanking(data, value){
        if(value && this.props.language === 0){
            let d = data.map(u => u.ID)
            let rank = data.length - (d.findIndex(this.checkSecond) + 1);
            return(
                <div className="second-histogram-ranking">
                    <p>Rank: <span>{ rank + 1 }</span>/{data.length}</p>
                </div>
            )
        }else if(value && this.props.language === 1){
            let d = data.map(u => u.ID)
            let rank = data.length - (d.findIndex(this.checkSecond) + 1);
            return(
                <div className="second-histogram-ranking">
                    <p>Rang : <span>{ rank + 1 }</span>/{data.length}</p>
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
                <p>{Math.round(d.figure*100)+'%'}</p>
        )
    }

    numofagglomeration(data,value){
        let d = data.find(u => u.ID === value)
        return(
                <p>{d.figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        )
    }

    metropolitan(data, value){
        let d = data.find(u => u.ID === value)
        return(
                <p>{Math.round(d.figure*100)+'%'}</p>
        )
    }

    averagedist(data,value){
        let d = data.find(u => u.ID === value)
        return(
                <p>{Math.round(d.figure)}km</p>
        )
    }

    urbanland(data,value){
        let d = data.find(u => u.ID === value)
        return(
                <p>{Math.round(d.figure*10000)/100}%</p>
        )
    }

    renderInfo(info, title){
        return(
            <div className="histogram-title compare">
                {title}
                <div className="tooltip-country">
                    <MaterialIcon icon="info" size={15} className="icon-color"/>
                    <span className="tooltip-country-text">{info}</span>
                </div>
            </div>

            
        )
    }
    renderFirstCountry_EN(firstCountry){
        if(firstCountry){
            const country = this.props.countryData.find(u => u.ID === firstCountry);
            return <div className="first-country-label">{country.Country}</div>
        }else{
            return(<div className="first-country-label"></div>)
        }
    }

    renderFirstCountry_FR(firstCountry){
        if(firstCountry){
            const country = this.props.countryData.find(u => u.ID === firstCountry);
            return <div className="first-country-label">{country.Country_FR}</div>
        }else{
            return(<div className="first-country-label"></div>)
        }
    }

    renderSecondCountry_EN(secondCountry){
        if(secondCountry){
            const country = this.props.countryData.find(u => u.ID === secondCountry);
            return <div className="second-country-label">{country.Country}</div>
        }else{
            return <div className="second-country-label"></div>
        }
    }

    renderSecondCountry_FR(secondCountry){
        if(secondCountry){
            const country = this.props.countryData.find(u => u.ID === secondCountry);
            return <div className="second-country-label">{country.Country_FR}</div>
        }else{
            return <div className="second-country-label"></div>
        }
    }

    firstCountry(calculation, data, value) {
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
                "Country_EN": d.Country,
                "Country_FR": d.Country_FR,
                "figure":d.Upop_sel,
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
                "figure": d.Ulvl_Scaled_sel,
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
                "figure": d.NumAgglos_sel,
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
                "figure": d.Mpop_sel,
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
                "figure": d.ADBC_sel,
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
                "figure": d.Usurf,
                "title_EN": "Urban land cover",
                "title_FR":"Couverture terrestre urbaine",
                "info_EN": "Share of total surface area covered by urban agglomerations",
                "info_FR": "Part de la surface totale couverte par les agglomérations urbaines"
            }
        ))

        const urbanPopulationData = dataUrbanPopulation.sort((a,b) => a.figure - b.figure);
        const urbanizationLevelData = dataUrbanizationLevel.sort((a,b) => a.figure - b.figure);
        const agglomerationData = dataAgglomerations.sort((a,b) => a.figure - b.figure);
        const metroPolitanData = dataMetropolitan.sort((a,b) => a.figure - b.figure);
        const averageDistData = dataAverageDist.sort((a,b) => a.figure - b.figure);
        const urbanSurfData = dataUrbanSurf.sort((a,b) => a.figure - b.figure);
        
        const { firstCountry, secondCountry, language } = this.props;
        const keyfigure = {
            en: 'Key Figures',
            fr: 'Chiffres clés'
        }
        if(language === 0){
            return(
                <div className="histogram_compare-wrapper">
                    <div className="compare-wrapper-titles">
                        <div className="compare-title-keyfigure">{keyfigure.en}</div>
                        {this.renderFirstCountry_EN(firstCountry, keyfigure.en)}
                        <div className="comparison"></div>
                        {this.renderSecondCountry_EN(secondCountry,keyfigure.en)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataUrbanPopulation[0].info_EN, dataUrbanPopulation[0].title_EN)}
                        {this.firstCountry(this.population, urbanPopulationData, firstCountry)}
                        {this.compareGreater(this.population, urbanPopulationData, firstCountry, secondCountry)}
                        {this.secondCountry(this.population, urbanPopulationData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataUrbanizationLevel[0].info_EN, dataUrbanizationLevel[0].title_EN)}
                        {this.firstCountry(this.urbanisationlevel, urbanizationLevelData, firstCountry)}
                        {this.compareGreater(this.urbanisationlevel, urbanizationLevelData, firstCountry, secondCountry)}
                        {this.secondCountry(this.urbanisationlevel, urbanizationLevelData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataAgglomerations[0].info_EN, dataAgglomerations[0].title_EN)}
                        {this.firstCountry(this.numofagglomeration, agglomerationData, firstCountry)}
                        {this.compareGreater(this.numofagglomeration, agglomerationData, firstCountry, secondCountry)}
                        {this.secondCountry(this.numofagglomeration, agglomerationData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataMetropolitan[0].info_EN, dataMetropolitan[0].title_EN)}
                        {this.firstCountry(this.metropolitan, metroPolitanData, firstCountry)}
                        {this.compareGreater(this.metropolitan, metroPolitanData, firstCountry, secondCountry)}
                        {this.secondCountry(this.metropolitan, metroPolitanData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataAverageDist[0].info_EN, dataAverageDist[0].title_EN)}
                        {this.firstCountry(this.averagedist, averageDistData, firstCountry)}
                        {this.compareGreater(this.averagedist, averageDistData, firstCountry, secondCountry)}
                        {this.secondCountry(this.averagedist, averageDistData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataUrbanSurf[0].info_EN, dataUrbanSurf[0].title_EN)}
                        {this.firstCountry(this.urbanland, urbanSurfData, firstCountry)}
                        {this.compareGreater(this.urbanland, urbanSurfData, firstCountry, secondCountry)}
                        {this.secondCountry(this.urbanland, urbanSurfData, secondCountry)}
                    </div>
                </div>
            );
        }else{
            return(
                <div className="histogram_compare-wrapper">
                    <div className="compare-wrapper-titles">
                        <div className="compare-title-keyfigure">{keyfigure.fr}</div>
                        {this.renderFirstCountry_FR(firstCountry, keyfigure.fr)}
                        <div className="comparison"></div>
                        {this.renderSecondCountry_FR(secondCountry, keyfigure.fr)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataUrbanPopulation[0].info_FR, dataUrbanPopulation[0].title_FR)}
                        {this.firstCountry(this.population, urbanPopulationData, firstCountry)}
                        {this.compareGreater(this.population, urbanPopulationData, firstCountry, secondCountry)}
                        {this.secondCountry(this.population, urbanPopulationData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataUrbanizationLevel[0].info_FR, dataUrbanizationLevel[0].title_FR)}
                        {this.firstCountry(this.urbanisationlevel, urbanizationLevelData, firstCountry)}
                        {this.compareGreater(this.urbanisationlevel, urbanizationLevelData, firstCountry, secondCountry)}
                        {this.secondCountry(this.urbanisationlevel, urbanizationLevelData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataAgglomerations[0].info_FR, dataAgglomerations[0].title_FR)}
                        {this.firstCountry(this.numofagglomeration, agglomerationData, firstCountry)}
                        {this.compareGreater(this.numofagglomeration, agglomerationData, firstCountry, secondCountry)}
                        {this.secondCountry(this.numofagglomeration, agglomerationData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataMetropolitan[0].info_FR, dataMetropolitan[0].title_FR)}
                        {this.firstCountry(this.metropolitan, metroPolitanData, firstCountry)}
                        {this.compareGreater(this.metropolitan, metroPolitanData, firstCountry, secondCountry)}
                        {this.secondCountry(this.metropolitan, metroPolitanData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataAverageDist[0].info_FR, dataAverageDist[0].title_FR)}
                        {this.firstCountry(this.averagedist, averageDistData, firstCountry)}
                        {this.compareGreater(this.averagedist, averageDistData, firstCountry, secondCountry)}
                        {this.secondCountry(this.averagedist, averageDistData, secondCountry)}
                    </div>
                    <div className="compare-wrapper">
                        {this.renderInfo(dataUrbanSurf[0].info_FR, dataUrbanSurf[0].title_FR)}
                        {this.firstCountry(this.urbanland, urbanSurfData, firstCountry)}
                        {this.compareGreater(this.urbanland, urbanSurfData, firstCountry, secondCountry)}
                        {this.secondCountry(this.urbanland, urbanSurfData, secondCountry)}
                    </div>
                </div>
            );
        }
    }

}

export default CompareHistogram;



