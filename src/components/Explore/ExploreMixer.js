import React, { Component } from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import MaterialIcon from 'material-icons-react';
import InputRange from 'react-input-range';
// import Button from '@material-ui/core/Button';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';


class ExploreMixer extends Component {
    
    constructor(props){
        super(props);
        this.state={
            value: 2000,
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

    // _mixerButton(yes){
    //     if(yes === true){
    //         return(
    //             <ChevronRight/>
    //         )
    //     }else{
    //         return(
    //             <ChevronLeft/>
    //         )
    //     }
    // }

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
                                maxValue={2020}
                                minValue={1950}
                                value={this.state.value}
                                onChange={value => this.setState({ value })} />
                        </li>
                    </ul>
                    <hr className="mixerhr" />
                </Col>
                <Col md={12} className="mixer-download">
                    <hr />
                    <Col md={12} className="mixer-download-wrapper">
                        <Col md={6} className="mixer-download-item">
                            {this._renderDownloadFullData()}
                        </Col>
                        <Col md={6} className="mixer-download-item">
                            {this._renderDownloadFullData()}
                        </Col>
                    </Col>
                </Col>
                
                {/* <div id="mixerToggle">
                    <Button color="primary" onClick={this.props.onMixerToggle} aria-label="Add">
                        {this._mixerButton(this.props.collapseNav)}
                    </Button>
                </div> */}
            </Grid>
        );
    }

}

export default ExploreMixer;
