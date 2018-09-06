import React, { Component } from 'react';
import { XYPlot, Hint, VerticalBarSeries } from 'react-vis';

class UrbanPop extends Component {
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
                  "y": 160051,
                  "id": "Sao Tomé-et-Principe",
                  "x": 50
                },
                {
                  "y": 263913,
                  "id": "Cap-Vert",
                  "x": 49
                },
                {
                  "y": 300643,
                  "id": "Swaziland",
                  "x": 48
                },
                {
                  "y": 525088,
                  "id": "Lesotho",
                  "x": 47
                },
                {
                  "y": 525458,
                  "id": "Guinée-Bissau",
                  "x": 46
                },
                {
                  "y": 688802,
                  "id": "Djibouti",
                  "x": 45
                },
                {
                  "y": 762000,
                  "id": "Guinée équatoriale",
                  "x": 44
                },
                {
                  "y": 891180,
                  "id": "Namibie",
                  "x": 43
                },
                {
                  "y": 1125753,
                  "id": "Gambie",
                  "x": 42
                },
                {
                  "y": 1170085,
                  "id": "érythrée",
                  "x": 41
                },
                {
                  "y": 1224313,
                  "id": "Botswana",
                  "x": 40
                },
                {
                  "y": 1506156,
                  "id": "Gabon",
                  "x": 39
                },
                {
                  "y": 1713049,
                  "id": "Mauritanie",
                  "x": 38
                },
                {
                  "y": 1715625,
                  "id": "Liberia",
                  "x": 37
                },
                {
                  "y": 1832706,
                  "id": "République centrafricaine",
                  "x": 36
                },
                {
                  "y": 2054027,
                  "id": "Burundi",
                  "x": 35
                },
                {
                  "y": 2592400,
                  "id": "Sierra Leone",
                  "x": 34
                },
                {
                  "y": 3108083,
                  "id": "République du Congo",
                  "x": 33
                },
                {
                  "y": 3270216,
                  "id": "Niger",
                  "x": 32
                },
                {
                  "y": 3361900,
                  "id": "République du Soudan du Sud",
                  "x": 31
                },
                {
                  "y": 3416245,
                  "id": "Togo",
                  "x": 30
                },
                {
                  "y": 3899403,
                  "id": "Tchad",
                  "x": 29
                },
                {
                  "y": 4044553,
                  "id": "Guinée",
                  "x": 28
                },
                {
                  "y": 4410899,
                  "id": "Libye",
                  "x": 27
                },
                {
                  "y": 4554400,
                  "id": "Somalie",
                  "x": 26
                },
                {
                  "y": 4800985,
                  "id": "Zimbabwe",
                  "x": 25
                },
                {
                  "y": 4835999,
                  "id": "Malawi",
                  "x": 24
                },
                {
                  "y": 5072168,
                  "id": "Bénin",
                  "x": 23
                },
                {
                  "y": 5269493,
                  "id": "Burkina Faso",
                  "x": 22
                },
                {
                  "y": 5697331,
                  "id": "Mali",
                  "x": 21
                },
                {
                  "y": 6335276,
                  "id": "Rwanda",
                  "x": 20
                },
                {
                  "y": 6819645,
                  "id": "Zambie",
                  "x": 19
                },
                {
                  "y": 7010411,
                  "id": "Tunisie",
                  "x": 18
                },
                {
                  "y": 7156859,
                  "id": "Sénégal",
                  "x": 17
                },
                {
                  "y": 8772349,
                  "id": "Mozambique",
                  "x": 16
                },
                {
                  "y": 11489818,
                  "id": "Céte d'Ivoire",
                  "x": 15
                },
                {
                  "y": 12754444,
                  "id": "Cameroun",
                  "x": 14
                },
                {
                  "y": 14041116,
                  "id": "Ouganda",
                  "x": 13
                },
                {
                  "y": 14236199,
                  "id": "Ghana",
                  "x": 12
                },
                {
                  "y": 15862758,
                  "id": "Angola",
                  "x": 11
                },
                {
                  "y": 16028255,
                  "id": "Soudan",
                  "x": 10
                },
                {
                  "y": 17287822,
                  "id": "Maroc",
                  "x": 9
                },
                {
                  "y": 18567243,
                  "id": "Tanzanie",
                  "x": 8
                },
                {
                  "y": 24282232,
                  "id": "éthiopie",
                  "x": 7
                },
                {
                  "y": 26630732,
                  "id": "Algérie",
                  "x": 6
                },
                {
                  "y": 28559230,
                  "id": "Kenya",
                  "x": 5
                },
                {
                  "y": 31206400,
                  "id": "République démocratique du Congo",
                  "x": 4
                },
                {
                  "y": 38177616,
                  "id": "Afrique du Sud",
                  "x": 3
                },
                {
                  "y": 84375765,
                  "id": "égypte",
                  "x": 2
                },
                {
                  "y": 97780052,
                  "id": "Nigeria",
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

export default UrbanPop;