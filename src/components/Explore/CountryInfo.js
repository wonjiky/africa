import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import KeyFigures from './KeyFigures';
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
		const list = this.props.countryData.find(u => u.ID  === selectedCountry.value);
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
								<h5><span>Capital: </span>{list.Capital}</h5>
								<h5 className="pop-area"><span>Population: </span>{list.Upop}</h5>
								<h5 className="pop-area"><span>Area: </span>{list.Surface}</h5>
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
        if(this.props.selectedValue){
			return(
				<Row className="explore-row">
					<Col md={8} mdOffset={2} className="country-style">
						{this.renderInfo(this.props.selectedValue)}
					</Col>
					<Col md={8} mdOffset={2} className="graph-style graphcontent">
						<KeyFigures 
							countryData={this.props.countryData}
							selectedValue={this.props.selectedValue}/>
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