import React, { Component } from 'react';
import KeyFigure from './KeyFigure';
import CompareCountries from './CompareCountries';
import Select from "react-select";
import { FixedSizeList as List } from "react-window";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const height = 35;

class MenuList extends Component {
  render() {

    const { children, maxHeight } = this.props;

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
            agglosList: '',
            isDisabled: true,
            // selectedIndex: 1,
            // tabIndex: 0
        };
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.selectedCountry !== this.props.selectedCountry){
    //         // document.getElementById('home_content-container').scrollTo(0,0)
    //         document.getElementById('explore_content-container-wrapper').scrollTop = 0;
    //     }
    // }

    sendCountryValueToMap(e){
        this.props.handleCountryValueFromSearch(e);
    }

    sendAgglosValueToMap(e){
        this.props.handleAgglosValueFromSearch(e);
    }

    sendfirstValueToMap(e){
        this.props.handlefirstValueFromSearch(e);
    }

    sendsecondValueToMap(e){
        this.props.handlesecondValueFromSearch(e);
    }

    filterAgglos(data, selectedCountry){
        const sortedAgglosList = data.sort((a, b) => a.cityName.localeCompare(b.cityName))
        if(selectedCountry){
            const agglosValue = sortedAgglosList.filter(u => (u.ID === selectedCountry))
            const filteredAgglosList = agglosValue.map((a,i) => ({value: a.City_ID, label: a.cityName, countryID: a.ID}))
            return(
                filteredAgglosList
            )
        }else{
            return(
                sortedAgglosList.map((a,i) => ({
                    value: a.City_ID, label: a.cityName, countryID: a.ID
            })))
        }
    }

    filterCountry(data){
      const sortedCountryList = data.map((u) => (u)).sort((a, b) => a.Country.localeCompare(b.Country));
      const list = sortedCountryList.map((c, i) => (
      {value: c.ID, label: c.Country }))
      return list
    }

    displayCountry(selectedCountry, data){
        const list = data.find(u => u.ID === selectedCountry);
        if(selectedCountry){
            return(
                ({value: list.ID, label: list.Country})
            )
        }
    }



    displayAgglos(selectedAgglos, data,selectedCountry){

        const list = data.find(u => u.City_ID === selectedAgglos);

        if(selectedAgglos && selectedCountry){
            return(
                ({ value: list.City_ID, label: list.cityName})
            )
        }else if (selectedCountry === '' || selectedAgglos === '') {
            return null;
        }
    }

    singleSelect(countryList, agglosList, displayCountry, displayAgglos){
        return(
            <div className="explore_container-wrapper">
                <div className="explore_search-country">
                    <Select
                        placeholder="Select country"
                        isClearable={this.state.isClearable}
                        isSearchable={this.state.isSearchable}
                        value={displayCountry}
                        onChange={this.sendCountryValueToMap.bind(this)}
                        options={countryList}
                        backspaceRemovesValue={false}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                            ...theme.colors,
                            primary25: '#E8AE40',
                            primary: '#E8AE40',
                            },
                        })}
                        />
                </div>
                <div className="explore_search-agglos">
                    <Select
                        placeholder= "Select agglomeration"
                        isClearable={this.state.isClearable}
                        isSearchable={this.state.isSearchable}
                        value={displayAgglos}
                        components={{ MenuList }}
                        onChange={this.sendAgglosValueToMap.bind(this)}
                        options={agglosList}
                        backspaceRemovesValue={false}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                            ...theme.colors,
                            text: 'orangered',
                            primary25: '#C3533E',
                            primary: '#C3533E',
                            },
                        })}
                    />
                </div>
                <KeyFigure
                    language={this.props.language}
                    timeSliderValue={this.props.timeSliderValue}
                    reveal={this.props.reveal}
                    accordionToggle={this.props.accordionToggle}
                    selectedCountry={this.props.selectedCountry}
                    selectedAgglos={this.props.selectedAgglos}
                    agglosData={this.props.agglosData}
                    countryData={this.props.countryData}
                    valueFromCountryHistogram={this.sendCountryValueToMap.bind(this)}
                    />
            </div>
        )
    }

    compareCountries(countryList, firstCountry, secondCountry){
        return(
            <div className="explore_container-wrapper">
                <div className="explore_search-agglos">
                    <Select
                        placeholder= "Select first country"
                        options={countryList}
                        value={firstCountry}
                        backspaceRemovesValue={false}
                        onChange={this.sendfirstValueToMap.bind(this)}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                            ...theme.colors,
                            primary25: '#C3533E',
                            primary: '#C3533E',
                            },
                        })}
                    />
                </div>
                <div className="explore_search-country">
                    <Select
                        placeholder= "Select second country"
                        options={countryList}
                        value={secondCountry}
                        backspaceRemovesValue={false}
                        onChange={this.sendsecondValueToMap.bind(this)}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                            ...theme.colors,
                            text: 'orangered',
                            primary25: '#E8AE40',
                            primary: '#E8AE40',
                            },
                        })}
                    />
                </div>
                <CompareCountries
                    timeSliderValue={this.props.timeSliderValue}
                    firstCountry={this.props.firstCompareValue}
                    secondCountry={this.props.secondCompareValue}
                    countryData={this.props.countryData}
                />
            </div>
        )
    }

    handleSelect = index => {
        this.props.tabIndex(index);
    };

    state = {
        selectedIndex: 0
    }

    render() {
        const {
            agglosData,
            selectedAgglos,
            selectedCountry,
            countryData,
            firstCompareValue,
            secondCompareValue,
            language
        } = this.props;

        const countryList = this.filterCountry(countryData);
        const agglosList = this.filterAgglos(agglosData, selectedCountry);
        const displayCountry = this.displayCountry(selectedCountry, countryData);
        const displayAgglos = this.displayAgglos(selectedAgglos, agglosData, selectedCountry);
        const displayCountry_first = this.displayCountry(firstCompareValue, countryData);
        const displayCountry_second = this.displayCountry(secondCompareValue, countryData);
        if(language === 0){
            return(
                <div id="explore_content-container-wrapper">
                    <div className="explore_content-container">
                        <Tabs className="tab-wrapper" selectedIndex={this.state.selectedIndex} onSelect={this.handleSelect}>
                            <TabList>
                                <Tab>Single Select</Tab>
                                <Tab>Compare</Tab>
                            </TabList>

                            <TabPanel>
                                {this.singleSelect(countryList, agglosList, displayCountry, displayAgglos)}
                            </TabPanel>
                            <TabPanel>
                                {this.compareCountries(countryList, displayCountry_first, displayCountry_second)}
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            );
        }else{
            return(
                <div id="explore_content-container-wrapper">
                    <div className="explore_content-container">
                        <Tabs className="tab-wrapper" selectedIndex={this.state.selectedIndex} onSelect={this.handleSelect}>
                            <TabList>
                                <Tab>French Select</Tab>
                                <Tab>French Compare</Tab>
                            </TabList>
                            <TabPanel>
                                {this.singleSelect(countryList, agglosList, displayCountry, displayAgglos)}
                            </TabPanel>
                            <TabPanel>
                                {this.compareCountries(countryList, displayCountry_first, displayCountry_second)}
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            );
        }
    }
}

export default ExploreContent;
