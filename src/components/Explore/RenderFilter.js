import React, { Component } from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import MaterialIcon from 'material-icons-react';
// import InputRange from 'react-input-range';
import StepRangeSlider from 'react-step-range-slider'
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

    steps(e){
        console.log(this.state.value);
        const {value} = this.state;
        if(1950 < value < 2010){
            return 10;
        }else if (value > 2010){
            return 5;
        }
    }

    rangeChange(e){
        console.log(e.target.value)
        this.setState({ 
            value: e.target.value })
        
        if(this.state.value > 10){
            e.step = 10;
        }else {
            e.step = 1;
        }
    }

    render() {
        const range = [
            { value: 1950, step: 10 },
            { value: 1960, step: 10 },
            { value: 1970, step: 10 },
            { value: 1980, step: 10 },
            { value: 1990, step: 10 }, 
            { value: 2000, step: 10 },
            { value: 2010, step: 5 },
            { value: 2015 } 
        ]

        return(
            <Grid fluid id="mixer">
                <Col md={12} className="explore-mixer-list">
                    <ul className="list-unstyled">
                        <li className="slider-title">Timeslider</li>
                        <li className="slider">Use slider to toggle view of<br/> different years</li>
                        <br/>
                        <li>
                            <StepRangeSlider 
                            value={2015} 
                            range={range} 
                            onChange={value => console.log(value)}
                            />
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
