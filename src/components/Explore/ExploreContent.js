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
        };
    }

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

    filterCountry_EN(data){
      const sortedCountryList = data.map((u) => (u)).sort((a, b) => a.Country.localeCompare(b.Country));
      const list = sortedCountryList.map((c, i) => (
      {value: c.ID, label: c.Country }))
      return list
    }

    filterCountry_FR(data){
        const sortedCountryList = data.map((u) => (u)).sort((a, b) => a.Country.localeCompare(b.Country));
        const list = sortedCountryList.map((c, i) => (
        {value: c.ID, label: c.Country_FR }))
        return list
      }

    displayCountry_EN(selectedCountry, data){
        const list = data.find(u => u.ID === selectedCountry);
        if(selectedCountry){
            return(
                ({value: list.ID, label: list.Country})
            )
        }
    }

    displayCountry_FR(selectedCountry, data){
        const list = data.find(u => u.ID === selectedCountry);
        if(selectedCountry){
            return(
                ({value: list.ID, label: list.Country_FR})
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

    singleSelect(countryList, agglosList, displayCountry, displayAgglos, selectCountry, selectAgglos, language){
        return(
            <div className="explore_container-wrapper">
                <div className="explore_search-country">
                    <Select
                        placeholder={selectCountry}
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
                        placeholder= {selectAgglos}
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
                    language={language}
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

    compareCountries(countryList, firstCountry, secondCountry, compareFirst, compareSecond,language){
        return(
            <div className="explore_container-wrapper">
                <div className="explore_search-agglos">
                    <Select
                        placeholder= {compareFirst}
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
                        placeholder= {compareSecond}
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
                    language={language}
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

        let compareFirst_EN = 'Select first country';
        let compareSecond_EN = 'Select second country';
        let compareFirst_FR = 'Sélectionner le premier pays';
        let compareSecond_FR = 'Sélectionner le deuxième pays';
        let selectCountry_EN = 'Select country';
        let selectCountry_FR = 'Sélectionner un pays';
        let selectAgglos_EN = 'Select agglomeration';
        let selectAgglos_FR = 'Sélectionner une agglomération';

        const countryList_EN = this.filterCountry_EN(countryData);
        const countryList_FR = this.filterCountry_FR(countryData);
        const agglosList = this.filterAgglos(agglosData, selectedCountry);
        const displayCountry_EN = this.displayCountry_EN(selectedCountry, countryData);
        const displayCountry_FR = this.displayCountry_FR(selectedCountry, countryData);
        const displayAgglos = this.displayAgglos(selectedAgglos, agglosData, selectedCountry);
        const displayCountry_first_EN = this.displayCountry_EN(firstCompareValue, countryData);
        const displayCountry_second_EN = this.displayCountry_EN(secondCompareValue, countryData);
        const displayCountry_first_FR = this.displayCountry_FR(firstCompareValue, countryData);
        const displayCountry_second_FR = this.displayCountry_FR(secondCompareValue, countryData);

        if(language === 0){
            return( 
                <div id="explore_content-container-wrapper">
                    <div className="explore_content-container">
                        <Tabs className="tab-wrapper" selectedIndex={this.state.selectedIndex} onSelect={this.handleSelect}>
                            <TabList>
                                <Tab>Select country</Tab>
                                <Tab>Compare countries</Tab>
                            </TabList>

                            <TabPanel>
                                {this.singleSelect(countryList_EN, agglosList, displayCountry_EN, displayAgglos, selectCountry_EN, selectAgglos_EN, language)}
                            </TabPanel>
                            <TabPanel>
                                {this.compareCountries(countryList_EN, displayCountry_first_EN, displayCountry_second_EN, compareFirst_EN, compareSecond_EN, language)}
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
                                <Tab>Sélectionner un pays</Tab>
                                <Tab>Comparer les pays</Tab>
                            </TabList>
                            <TabPanel>
                                {this.singleSelect(countryList_FR, agglosList, displayCountry_FR, displayAgglos, selectCountry_FR, selectAgglos_FR, language)}
                            </TabPanel>
                            <TabPanel>
                                {this.compareCountries(countryList_FR, displayCountry_first_FR, displayCountry_second_FR, compareFirst_FR, compareSecond_FR, language)}
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            );
        }
    }
}

export default ExploreContent;
