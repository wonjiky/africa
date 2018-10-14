import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import { BarChart, Cell, Bar, Tooltip } from 'recharts';
import MaterialIcon from 'material-icons-react';
import Paper from '@material-ui/core/Paper';


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

          if(e.payload[0].payload["urbanPopulation"])
          {
              console.log(e)
              console.log(e.payload[0].payload)
              return (<div className="custom-tooltip">
                    Rank: {(e.label-50)*(-1)}
                    <p>{e.payload[0].payload["Country"]}</p>
                    {e.payload[0].payload["urbanPopulation"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  </div>);
            }

            if(e.payload[0].payload["urbanizationLevel"])
            {
                console.log(e)
                console.log(e.payload[0].payload)
                return (<div className="custom-tooltip">
                      Rank: {(e.label-50)*(-1)}
                      <p>{e.payload[0].payload["Country"]}</p>
                      {Math.round(e.payload[0].payload["urbanizationLevel"]*100)+"%"}
                    </div>);
              }

              if(e.payload[0].payload["urbanAgglos"])
              {
                  console.log(e)
                  console.log(e.payload[0].payload)
                  return (<div className="custom-tooltip">
                        Rank: {(e.label-50)*(-1)}
                        <p>{e.payload[0].payload["Country"]}</p>
                        {e.payload[0].payload["urbanAgglos"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                      </div>);
                }

                if(e.payload[0].payload["metropolitanPop"])
                {
                    console.log(e)
                    console.log(e.payload[0].payload)
                    return (<div className="custom-tooltip">
                          Rank: {(e.label-50)*(-1)}
                          <p>{e.payload[0].payload["Country"]}</p>
                          {Math.round(e.payload[0].payload["metropolitanPop"]*100)+"%"}
                        </div>);
                  }

                  if(e.payload[0].payload["AverageDist"])
                  {
                      console.log(e)
                      console.log(e.payload[0].payload)
                      return (<div className="custom-tooltip">
                            Rank: {(e.label-50)*(-1)}
                            <p>{e.payload[0].payload["Country"]}</p>
                            {Math.round(e.payload[0].payload["AverageDist"])+"km"}
                          </div>);
                    }

                    if(e.payload[0].payload["urbanSurface"])
                    {
                        console.log(e)
                        console.log(e.payload[0].payload)
                        return (<div className="custom-tooltip">
                              Rank: {(e.label-50)*(-1)}
                              <p>{e.payload[0].payload["Country"]}</p>
                              {Math.round(e.payload[0].payload["urbanSurface"]*100)+"%"}
                            </div>);
                      }
          }
        else{}
      }

    renderUrbanPopulation(data, selectedCountry){
        return(
                <BarChart width={200} height={60} data={data}>
                    <Bar dataKey='urbanPopulationScaled' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                        {data.map((entry, index) => (
                            <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
                        ))}
                    </Bar>
                    <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
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
                <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
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
                <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
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
                <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
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
                <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
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
              <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
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
        return(
            <p>{d.urbanPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        )
    }

    urbanisationlevel(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{Math.round(d.urbanizationLevel*100)+'%'}</p>
        )
    }

    numofagglomeration(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{d.urbanAgglos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} agglos</p>
        )
    }

    metropolitan(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{Math.round(d.metropolitanPop*100)+'%'}</p>
        )
    }

    averagedist(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{d.AverageDist} km</p>
        )
    }

    urbanland(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{d.urbanSurface*100} %</p>
        )
    }

    renderInfo(data){
        return(
            <div className="info-wrapper">
            <MaterialIcon icon="info" size={20} className="icon-color"/>
                <span className="infotext"> {data} </span>            
            </div>
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
                "info": "This is urban population"
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
                            <Col md={4} className="keyfigureTitle"><p>Urban population</p></Col>
                            <Col md={1} className="info_icon">{this.renderInfo(dataUrbanPopulation[0].info)}</Col>
                            <Col md={2} className="country-histogram-value"> {this.population(urbanPopulationData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(urbanPopulationData)}</Col>
                            <Col md={4} className="country-histogram-wrapper"> {this.renderUrbanPopulation(urbanPopulationData, selectedCountry)} </Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Urbanisation level</p></Col>
                            <Col md={1} className="info_icon"> <MaterialIcon icon="info" size={20} color='lightgrey' /></Col>
                            <Col md={2} className="country-histogram-value"> {this.urbanisationlevel(urbanizationLevelData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(urbanizationLevelData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderUrbanizationLevel(urbanizationLevelData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Number of agglomerations</p></Col>
                            <Col md={1} className="info_icon"> <MaterialIcon icon="info" size={20} color='lightgrey' /></Col>
                            <Col md={2} className="country-histogram-value"> {this.numofagglomeration(agglomerationData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(agglomerationData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderAgglos(agglomerationData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Metropolitan population</p></Col>
                            <Col md={1} className="info_icon"> <MaterialIcon icon="info" size={20} color='lightgrey' /></Col>
                            <Col md={2} className="country-histogram-value"> {this.metropolitan(metroPolitanData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(metroPolitanData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderMetropolitan(metroPolitanData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Average distance between agglomerations</p></Col>
                            <Col md={1} className="info_icon"> <MaterialIcon icon="info" size={20} color='lightgrey' /></Col>
                            <Col md={2} className="country-histogram-value"> {this.averagedist(averageDistData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(averageDistData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderAvgDist(averageDistData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>Urban land cover</p></Col>
                            <Col md={1} className="info_icon"> <MaterialIcon icon="info" size={20} color='lightgrey' /></Col>
                            <Col md={1} className="country-histogram-value"> {this.urbanland(urbanSurfData, selectedCountry)}</Col>
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
