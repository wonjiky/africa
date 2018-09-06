import React, { Component } from 'react';
import { XYPlot, Hint, VerticalBarSeries } from 'react-vis';

class UrbanSurf extends Component {
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
                  "y": 0,
                  "id": "égypte",
                  "x": 50
                },
                {
                  "y": 0,
                  "id": "Gabon",
                  "x": 49
                },
                {
                  "y": 0,
                  "id": "Libye",
                  "x": 48
                },
                {
                  "y": 0,
                  "id": "Kenya",
                  "x": 47
                },
                {
                  "y": 0,
                  "id": "Tunisie",
                  "x": 46
                },
                {
                  "y": 0,
                  "id": "Botswana",
                  "x": 45
                },
                {
                  "y": 0,
                  "id": "Rwanda",
                  "x": 44
                },
                {
                  "y": 0,
                  "id": "Cameroun",
                  "x": 43
                },
                {
                  "y": 0,
                  "id": "Maroc",
                  "x": 42
                },
                {
                  "y": 0,
                  "id": "Sénégal",
                  "x": 41
                },
                {
                  "y": 0,
                  "id": "Togo",
                  "x": 40
                },
                {
                  "y": 0,
                  "id": "Céte d'Ivoire",
                  "x": 39
                },
                {
                  "y": 0,
                  "id": "Bénin",
                  "x": 38
                },
                {
                  "y": 0,
                  "id": "République démocratique du Congo",
                  "x": 37
                },
                {
                  "y": 0,
                  "id": "Liberia",
                  "x": 36
                },
                {
                  "y": 0,
                  "id": "Mauritanie",
                  "x": 35
                },
                {
                  "y": 0,
                  "id": "République centrafricaine",
                  "x": 34
                },
                {
                  "y": 0,
                  "id": "Guinée",
                  "x": 33
                },
                {
                  "y": 0,
                  "id": "Sierra Leone",
                  "x": 32
                },
                {
                  "y": 0,
                  "id": "Guinée-Bissau",
                  "x": 31
                },
                {
                  "y": 0,
                  "id": "Mozambique",
                  "x": 30
                },
                {
                  "y": 0,
                  "id": "Mali",
                  "x": 29
                },
                {
                  "y": 0,
                  "id": "Burkina Faso",
                  "x": 28
                },
                {
                  "y": 0,
                  "id": "Swaziland",
                  "x": 27
                },
                {
                  "y": 0,
                  "id": "éthiopie",
                  "x": 26
                },
                {
                  "y": 0,
                  "id": "République du Soudan du Sud",
                  "x": 25
                },
                {
                  "y": 0,
                  "id": "Lesotho",
                  "x": 24
                },
                {
                  "y": 0,
                  "id": "Niger",
                  "x": 23
                },
                {
                  "y": 0.01,
                  "id": "Sao Tomé-et-Principe",
                  "x": 22
                },
                {
                  "y": 0.01,
                  "id": "Afrique du Sud",
                  "x": 21
                },
                {
                  "y": 0.01,
                  "id": "Algérie",
                  "x": 20
                },
                {
                  "y": 0.01,
                  "id": "Gambie",
                  "x": 19
                },
                {
                  "y": 0.01,
                  "id": "Cap-Vert",
                  "x": 18
                },
                {
                  "y": 0.01,
                  "id": "Zambie",
                  "x": 17
                },
                {
                  "y": 0.01,
                  "id": "Namibie",
                  "x": 16
                },
                {
                  "y": 0.01,
                  "id": "Tanzanie",
                  "x": 15
                },
                {
                  "y": 0.01,
                  "id": "Somalie",
                  "x": 14
                },
                {
                  "y": 0.01,
                  "id": "Zimbabwe",
                  "x": 13
                },
                {
                  "y": 0.01,
                  "id": "Malawi",
                  "x": 12
                },
                {
                  "y": 0.01,
                  "id": "Tchad",
                  "x": 11
                },
                {
                  "y": 0.01,
                  "id": "érythrée",
                  "x": 10
                },
                {
                  "y": 0.02,
                  "id": "Djibouti",
                  "x": 9
                },
                {
                  "y": 0.02,
                  "id": "République du Congo",
                  "x": 8
                },
                {
                  "y": 0.02,
                  "id": "Angola",
                  "x": 7
                },
                {
                  "y": 0.02,
                  "id": "Nigeria",
                  "x": 6
                },
                {
                  "y": 0.02,
                  "id": "Burundi",
                  "x": 5
                },
                {
                  "y": 0.04,
                  "id": "Guinée équatoriale",
                  "x": 4
                },
                {
                  "y": 0.04,
                  "id": "Soudan",
                  "x": 3
                },
                {
                  "y": 0.08,
                  "id": "Ghana",
                  "x": 2
                },
                {
                  "y": 0.09,
                  "id": "Ouganda",
                  "x": 1
                },
                {
                  "y": null,
                  "id": "",
                  "x": null
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

export default UrbanSurf;