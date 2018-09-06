import React, { Component } from 'react';
import { XYPlot, Hint, VerticalBarSeries } from 'react-vis';

class UrbanRate extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        };
        this._rememberValue = this._rememberValue.bind(this);
        this._forgetValue = this._forgetValue.bind(this);
    }


    _rememberValue(value) {
        this.setState({value});
      }

    _forgetValue() {
        this.setState({
          value: null
        });
      }

    render() {
        const {value} = this.state;
        return(
          <div>
              <XYPlot
              xType="ordinal"
              className="plotss"
              width={250}
              height={100}
              // xDistance={100}
              color="grey"
              
              >
              {/* <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis /> */}
              <VerticalBarSeries 
              onValueMouseOver={this._rememberValue}
              onValueMouseOut={this._forgetValue}
              data = {[
                {
                  "y": 0.17,
                  "id": "Niger",
                  "x": 50
                },
                {
                  "y": 0.21,
                  "id": "Burundi",
                  "x": 49
                },
                {
                  "y": 0.24,
                  "id": "érythrée",
                  "x": 48
                },
                {
                  "y": 0.26,
                  "id": "Lesotho",
                  "x": 47
                },
                {
                  "y": 0.27,
                  "id": "République du Soudan du Sud",
                  "x": 46
                },
                {
                  "y": 0.27,
                  "id": "éthiopie",
                  "x": 45
                },
                {
                  "y": 0.28,
                  "id": "Swaziland",
                  "x": 44
                },
                {
                  "y": 0.29,
                  "id": "Tchad",
                  "x": 43
                },
                {
                  "y": 0.29,
                  "id": "Burkina Faso",
                  "x": 42
                },
                {
                  "y": 0.3,
                  "id": "Malawi",
                  "x": 41
                },
                {
                  "y": 0.32,
                  "id": "Mali",
                  "x": 40
                },
                {
                  "y": 0.33,
                  "id": "Mozambique",
                  "x": 39
                },
                {
                  "y": 0.34,
                  "id": "Zimbabwe",
                  "x": 38
                },
                {
                  "y": 0.34,
                  "id": "Guinée-Bissau",
                  "x": 37
                },
                {
                  "y": 0.36,
                  "id": "Somalie",
                  "x": 36
                },
                {
                  "y": 0.37,
                  "id": "Sierra Leone",
                  "x": 35
                },
                {
                  "y": 0.37,
                  "id": "Guinée",
                  "x": 34
                },
                {
                  "y": 0.37,
                  "id": "République centrafricaine",
                  "x": 33
                },
                {
                  "y": 0.38,
                  "id": "Tanzanie",
                  "x": 32
                },
                {
                  "y": 0.39,
                  "id": "Ouganda",
                  "x": 31
                },
                {
                  "y": 0.4,
                  "id": "Namibie",
                  "x": 30
                },
                {
                  "y": 0.42,
                  "id": "Soudan",
                  "x": 29
                },
                {
                  "y": 0.42,
                  "id": "Mauritanie",
                  "x": 28
                },
                {
                  "y": 0.42,
                  "id": "Liberia",
                  "x": 27
                },
                {
                  "y": 0.44,
                  "id": "Zambie",
                  "x": 26
                },
                {
                  "y": 0.44,
                  "id": "République démocratique du Congo",
                  "x": 25
                },
                {
                  "y": 0.47,
                  "id": "Bénin",
                  "x": 24
                },
                {
                  "y": 0.49,
                  "id": "Céte d'Ivoire",
                  "x": 23
                },
                {
                  "y": 0.5,
                  "id": "Togo",
                  "x": 22
                },
                {
                  "y": 0.5,
                  "id": "Cap-Vert",
                  "x": 21
                },
                {
                  "y": 0.51,
                  "id": "Sénégal",
                  "x": 20
                },
                {
                  "y": 0.51,
                  "id": "Maroc",
                  "x": 19
                },
                {
                  "y": 0.52,
                  "id": "Nigeria",
                  "x": 18
                },
                {
                  "y": 0.52,
                  "id": "Ghana",
                  "x": 17
                },
                {
                  "y": 0.55,
                  "id": "Cameroun",
                  "x": 16
                },
                {
                  "y": 0.56,
                  "id": "Rwanda",
                  "x": 15
                },
                {
                  "y": 0.56,
                  "id": "Gambie",
                  "x": 14
                },
                {
                  "y": 0.56,
                  "id": "Botswana",
                  "x": 13
                },
                {
                  "y": 0.62,
                  "id": "Guinée équatoriale",
                  "x": 12
                },
                {
                  "y": 0.63,
                  "id": "Tunisie",
                  "x": 11
                },
                {
                  "y": 0.63,
                  "id": "Angola",
                  "x": 10
                },
                {
                  "y": 0.65,
                  "id": "Kenya",
                  "x": 9
                },
                {
                  "y": 0.66,
                  "id": "République du Congo",
                  "x": 8
                },
                {
                  "y": 0.67,
                  "id": "Algérie",
                  "x": 7
                },
                {
                  "y": 0.7,
                  "id": "Afrique du Sud",
                  "x": 6
                },
                {
                  "y": 0.72,
                  "id": "Djibouti",
                  "x": 5
                },
                {
                  "y": 0.8,
                  "id": "Sao Tomé-et-Principe",
                  "x": 4
                },
                {
                  "y": 0.81,
                  "id": "Libye",
                  "x": 3
                },
                {
                  "y": 0.81,
                  "id": "Gabon",
                  "x": 2
                },
                {
                  "y": 0.93,
                  "id": "égypte",
                  "x": 1
                }
               ]}
                
               color="#004f7dd6"
               />
                  {value ? <Hint value={value}/> : null}
                  
              </XYPlot>
          </div>
        );
    }

}

export default UrbanRate;