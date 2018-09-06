import React, { Component } from 'react';
import { XYPlot, Hint, VerticalBarSeries } from 'react-vis';

class UrbanPrime extends Component {
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
                  "y": 0.114,
                  "id": "République du Soudan du Sud",
                  "x": 50
                },
                {
                  "y": 0.121,
                  "id": "Nigeria",
                  "x": 49
                },
                {
                  "y": 0.146,
                  "id": "Algérie",
                  "x": 48
                },
                {
                  "y": 0.153,
                  "id": "éthiopie",
                  "x": 47
                },
                {
                  "y": 0.196,
                  "id": "Maroc",
                  "x": 46
                },
                {
                  "y": 0.206,
                  "id": "Kenya",
                  "x": 45
                },
                {
                  "y": 0.218,
                  "id": "Afrique du Sud",
                  "x": 44
                },
                {
                  "y": 0.233,
                  "id": "République démocratique du Congo",
                  "x": 43
                },
                {
                  "y": 0.233,
                  "id": "Malawi",
                  "x": 42
                },
                {
                  "y": 0.27,
                  "id": "Ouganda",
                  "x": 41
                },
                {
                  "y": 0.273,
                  "id": "égypte",
                  "x": 40
                },
                {
                  "y": 0.287,
                  "id": "Tanzanie",
                  "x": 39
                },
                {
                  "y": 0.297,
                  "id": "Mozambique",
                  "x": 38
                },
                {
                  "y": 0.298,
                  "id": "Botswana",
                  "x": 37
                },
                {
                  "y": 0.301,
                  "id": "Bénin",
                  "x": 36
                },
                {
                  "y": 0.306,
                  "id": "Cameroun",
                  "x": 35
                },
                {
                  "y": 0.31,
                  "id": "Tchad",
                  "x": 34
                },
                {
                  "y": 0.313,
                  "id": "Ghana",
                  "x": 33
                },
                {
                  "y": 0.328,
                  "id": "Soudan",
                  "x": 32
                },
                {
                  "y": 0.328,
                  "id": "Niger",
                  "x": 31
                },
                {
                  "y": 0.348,
                  "id": "Tunisie",
                  "x": 30
                },
                {
                  "y": 0.348,
                  "id": "Rwanda",
                  "x": 29
                },
                {
                  "y": 0.356,
                  "id": "Zambie",
                  "x": 28
                },
                {
                  "y": 0.376,
                  "id": "Somalie",
                  "x": 27
                },
                {
                  "y": 0.398,
                  "id": "érythrée",
                  "x": 26
                },
                {
                  "y": 0.401,
                  "id": "Namibie",
                  "x": 25
                },
                {
                  "y": 0.409,
                  "id": "Guinée équatoriale",
                  "x": 24
                },
                {
                  "y": 0.411,
                  "id": "Céte d'Ivoire",
                  "x": 23
                },
                {
                  "y": 0.429,
                  "id": "Sénégal",
                  "x": 22
                },
                {
                  "y": 0.436,
                  "id": "Burkina Faso",
                  "x": 21
                },
                {
                  "y": 0.44,
                  "id": "Angola",
                  "x": 20
                },
                {
                  "y": 0.442,
                  "id": "Libye",
                  "x": 19
                },
                {
                  "y": 0.452,
                  "id": "Swaziland",
                  "x": 18
                },
                {
                  "y": 0.473,
                  "id": "Zimbabwe",
                  "x": 17
                },
                {
                  "y": 0.488,
                  "id": "Mali",
                  "x": 16
                },
                {
                  "y": 0.507,
                  "id": "Togo",
                  "x": 15
                },
                {
                  "y": 0.508,
                  "id": "Burundi",
                  "x": 14
                },
                {
                  "y": 0.511,
                  "id": "République du Congo",
                  "x": 13
                },
                {
                  "y": 0.516,
                  "id": "République centrafricaine",
                  "x": 12
                },
                {
                  "y": 0.541,
                  "id": "Guinée",
                  "x": 11
                },
                {
                  "y": 0.562,
                  "id": "Sierra Leone",
                  "x": 10
                },
                {
                  "y": 0.564,
                  "id": "Cap-Vert",
                  "x": 9
                },
                {
                  "y": 0.584,
                  "id": "Lesotho",
                  "x": 8
                },
                {
                  "y": 0.588,
                  "id": "Gabon",
                  "x": 7
                },
                {
                  "y": 0.619,
                  "id": "Mauritanie",
                  "x": 6
                },
                {
                  "y": 0.694,
                  "id": "Liberia",
                  "x": 5
                },
                {
                  "y": 0.701,
                  "id": "Gambie",
                  "x": 4
                },
                {
                  "y": 0.781,
                  "id": "Guinée-Bissau",
                  "x": 3
                },
                {
                  "y": 0.806,
                  "id": "Djibouti",
                  "x": 2
                },
                {
                  "y": 0.842,
                  "id": "Sao Tomé-et-Principe",
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

export default UrbanPrime;