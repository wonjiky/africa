import React, { Component } from 'react';
import UrbanPop from './CH/UrbanPop';
import { Row, Col} from 'react-flexbox-grid';

class CoutryHistWrapper extends Component {
    constructor(props){
        super(props);
        
        this.state = ({
            Upop: 'Upop_Scaled',
        })
    }

    render() {
        return(
            <Row className="no-padding">
                <Col md={12} className="select-country"><span>Urban Population</span></Col>
                <Col md={12}className="histogram">
                    <UrbanPop 
                        selectedValue={this.props.selectedValue}
                        countryData={this.props.countryData}
                        /></Col>
                {/* <hr/>
                <Col md={12} className="select-country"><span>Level of Urbanisation</span></Col>
                <Col md={12}className="histogram">
                    <UrbanLevel 
                        selectedValue={this.props.selectedValue}
                        countryData={this.props.countryData}
                        /></Col>
                        <hr/>
                <Col md={12} className="select-country"><span>Number of Urban Agglomerations</span></Col>
                <Col md={12}className="histogram">
                    <NumAgglos 
                        selectedValue={this.props.selectedValue}
                        countryData={this.props.countryData}
                        /></Col> */}
            </Row>
        );
    }
    
}

export default CoutryHistWrapper;