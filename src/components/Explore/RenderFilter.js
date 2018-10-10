import React, { Component } from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import MaterialIcon from 'material-icons-react';
import InputRange from 'react-input-range';
// import Button from '@material-ui/core/Button';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';


class RenderFilter extends Component {

    constructor(props){
        super(props);
        this.state={
            value: 2015,
        }
    }

    _renderDownloadFullData(){
        return(
            <ul className="list-unstyled">
                <li>
                    <MaterialIcon icon="add_circle_outline" size={25} color='#FFFFFF' />
                    <p>Annual Report<br/>2018</p>
                </li>
            </ul>
        )
    }

    render() {
        return(
            <Grid fluid id="mixer">
                <Col md={12} className="explore-mixer-list">
                    <ul className="list-unstyled">
                        <li className="slider-title">Timeslider</li>
                        <li className="slider">Use slider to toggle view of<br/> different years</li>
                        <br/>
                        <li>
                            <InputRange
                                step={10}
                                maxValue={2015}
                                minValue={1950}
                                value={this.state.value}
                                onChange={value => this.setState({ value })} />
                        </li>
                    </ul>
                    <hr className="mixerhr" />
                </Col>
                <Col md={12} className="mixer-download">
                    <img src="assets/images/swac-oecd.png" width="100%"
                    alt="Africapolis Visualise Urbanisation in Africa"/>
                </Col>
            </Grid>
        );
    }

}

export default RenderFilter;
