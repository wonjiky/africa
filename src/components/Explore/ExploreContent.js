import React, { Component } from 'react';
import  InfoWrapper  from './InfoWrapper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Select from "react-select";
import { FixedSizeList as List } from "react-window";
import RenderFilter from './RenderFilter';

const height = 35;

class MenuList extends Component {
  render() {
    
    const { children, maxHeight } = this.props;
    
    // const [value] = getValue();
    // const initialOffset = options.indexOf(value) * height;

    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        // initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </List>
    );
  }
}

class ExploreContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClearable: true,
            isSearchable: true,
            agglosList: ''
        };
    }

    sendCountryValueToMap(e){
        this.props.handleCountryValueFromSearch(e);
    }

    sendAgglosValueToMap(e){
        this.props.handleAgglosValueFromSearch(e);
        // console.log(e)
    }

    filterAgglos(agglosList, selectedCountry){
        
        const sortedAgglosList = agglosList[0].features.map((u) => (u.properties)).sort((a, b) => a.NAME.localeCompare(b.NAME))
        
        if(selectedCountry){
            const agglosValue = sortedAgglosList.filter(u => (u.ID === selectedCountry))
            const filteredAgglosList = agglosValue.map((a,i) => ({value: a.city_ID, label: a.NAME, countryID: a.ID}))
            return(
                filteredAgglosList
            )
        }else{
            return(
                sortedAgglosList.map((a,i) => ({
                    value: a.city_ID, label: a.NAME, countryID: a.ID
            })))
        }
    }

    filterCountry(countryList){
      const sortedCountryList = countryList.map((u) => (u)).sort((a, b) => a.Country.localeCompare(b.Country));
      const list = sortedCountryList.map((c, i) => (
      {value: c.ID, label: c.Country }))
      return list
    }

    
    displayCountry(selectedCountry, countryList){
        const list = countryList.find(u => u.ID === selectedCountry);
        if(selectedCountry){
            return(
                ({value: list.ID, label: list.Country})
            )
        }
    }

    displayAgglos(v,c){
        if(c) {
            return c;
        }else if(v === ''){
            return '';
        }
    }

    render() {
        const { 
            agglos, 
            selectedCountry, 
            selectedAgglos,
            agglosValueForSearch,
            countryData,
        } = this.props;

        const countryList = this.filterCountry(countryData);
        const agglosList = this.filterAgglos(agglos, selectedCountry);
        const displayCountry = this.displayCountry(selectedCountry, countryData);
        const displayAgglos = this.displayAgglos(selectedCountry, agglosValueForSearch);

        return(
            <Grid fluid className="content">
                <Row className="explore-row">
                    <Col md={3} className="mixers">
                        <RenderFilter/>
                    </Col>
                    <Col md={9} className="exp-content">
                        <Col md={9} mdOffset={1} className="searchPadding">
                            <Select
                                placeholder="Select Country"
                                isClearable={this.state.isClearable}
                                isSearchable={this.state.isSearchable}
                                value={displayCountry}
                                onChange={this.sendCountryValueToMap.bind(this)}
                                options={countryList}
                                // isMulti={true}
                            />
                        </Col>
                        
                        <Col md={9} mdOffset={1}>
                            <Select
                                placeholder="Select City"
                                isClearable={this.state.isClearable}
                                isSearchable={this.state.isSearchable}
                                value={agglosValueForSearch}
                                // value={displayAgglos}
                                components={{ MenuList }}
                                onChange={this.sendAgglosValueToMap.bind(this)}
                                options={agglosList}
                                
                            />
                        </Col>
                        <br/>
                        {/* //change from countryValueForSearch to selectedCountry */}
                        <InfoWrapper 
                            selectedCountry={this.props.selectedCountry} 
                            agglosValueForSearch={this.props.agglosValueForSearch}
                            countryData={this.props.countryData}
                            valueFromCountryHistogram={this.sendCountryValueToMap.bind(this)}
                            />
                    </Col>
                </Row>

            </Grid>
        );
    }
}

export default ExploreContent;
