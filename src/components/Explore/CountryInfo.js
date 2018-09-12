import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import CountryGraph from './CountryGraph';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


  
class CountryInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
        this.renderInfo = this.renderInfo.bind(this);
    }

    renderInfo(selectedCountry){
		
		const list = this.props.countries.find(u => u.x  === selectedCountry.value);
		if(list === undefined){
			return <div></div>
		}else{
			return(
				<div>
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<h6>Country Info</h6>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
						<ul className="list-unstyled ">
							<li>
								<h5><span>Capital: </span>{list.Biggestcity_name}</h5>
								<h5 className="pop-area"><span>Population: </span>{list.Upop}</h5>
								<h5 className="pop-area"><span>Area: </span>{list.Usurfacekm}</h5>
								<br />
								<p>{list.description} </p>
							</li>
						</ul>					
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
			)
		}
    }

    render() {
        if(this.props.selectedCountry){
			return(
				<Row className="explore-row">
					<Col md={8} mdOffset={2} className="country-style">
						{this.renderInfo(this.props.selectedCountry)}
					</Col>
					<Col md={8} mdOffset={2} className="graph-style graphcontent">
						<CountryGraph countries={this.props.countries}/>
					</Col>
				</Row>  
			);
		}else{
			return(
				<Col md={8} mdOffset={2} className="treemap-style">
					Start by selecting country or city from search box or map
				</Col>
				
		  );
		}
    }
}

export default CountryInfo;