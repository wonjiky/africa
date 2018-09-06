import React, { Component } from 'react';
import { XYPlot, Hint, VerticalBarSeries } from 'react-vis';

class UrbanAvg extends Component {
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
              color="#004f7dd6"
              data = {[
                {
                  "y": 160051,
                  "Country": "Angola",
                  "x": 50
                },
                {
                  "y": 263913,
                  "Country": "Burundi",
                  "x": 49
                },
                {
                  "y": 300643,
                  "Country": "Bénin",
                  "x": 48
                },
                {
                  "y": 525088,
                  "Country": "Burkina Faso",
                  "x": 47
                },
                {
                  "y": 525458,
                  "Country": "Botswana",
                  "x": 46
                },
                {
                  "y": 688802,
                  "Country": "République centrafricaine",
                  "x": 45
                },
                {
                  "y": 762000,
                  "Country": "Céte d'Ivoire",
                  "x": 44
                },
                {
                  "y": 891180,
                  "Country": "Cameroun",
                  "x": 43
                },
                {
                  "y": 1125753,
                  "Country": "République du Congo",
                  "x": 42
                },
                {
                  "y": 1170085,
                  "Country": "Cap-Vert",
                  "x": 41
                },
                {
                  "y": 1224313,
                  "Country": "Djibouti",
                  "x": 40
                },
                {
                  "y": 1506156,
                  "Country": "Algérie",
                  "x": 39
                },
                {
                  "y": 1713049,
                  "Country": "égypte",
                  "x": 38
                },
                {
                  "y": 1715625,
                  "Country": "érythrée",
                  "x": 37
                },
                {
                  "y": 1832706,
                  "Country": "éthiopie",
                  "x": 36
                },
                {
                  "y": 2054027,
                  "Country": "Gabon",
                  "x": 35
                },
                {
                  "y": 2592400,
                  "Country": "Guinée équatoriale",
                  "x": 34
                },
                {
                  "y": 3108083,
                  "Country": "Ghana",
                  "x": 33
                },
                {
                  "y": 3270216,
                  "Country": "Guinée",
                  "x": 32
                },
                {
                  "y": 3361900,
                  "Country": "Gambie",
                  "x": 31
                },
                {
                  "y": 3416245,
                  "Country": "Guinée-Bissau",
                  "x": 30
                },
                {
                  "y": 3899403,
                  "Country": "Kenya",
                  "x": 29
                },
                {
                  "y": 4044553,
                  "Country": "Liberia",
                  "x": 28
                },
                {
                  "y": 4410899,
                  "Country": "Libye",
                  "x": 27
                },
                {
                  "y": 4554400,
                  "Country": "Lesotho",
                  "x": 26
                },
                {
                  "y": 4800985,
                  "Country": "Maroc",
                  "x": 25
                },
                {
                  "y": 4835999,
                  "Country": "Mali",
                  "x": 24
                },
                {
                  "y": 5072168,
                  "Country": "Mozambique",
                  "x": 23
                },
                {
                  "y": 5269493,
                  "Country": "Mauritanie",
                  "x": 22
                },
                {
                  "y": 5697331,
                  "Country": "Malawi",
                  "x": 21
                },
                {
                  "y": 6335276,
                  "Country": "Namibie",
                  "x": 20
                },
                {
                  "y": 6819645,
                  "Country": "Niger",
                  "x": 19
                },
                {
                  "y": 7010411,
                  "Country": "Nigeria",
                  "x": 18
                },
                {
                  "y": 7156859,
                  "Country": "Rwanda",
                  "x": 17
                },
                {
                  "y": 8772349,
                  "Country": "République du Soudan du Sud",
                  "x": 16
                },
                {
                  "y": 11489818,
                  "Country": "Sénégal",
                  "x": 15
                },
                {
                  "y": 12754444,
                  "Country": "Sierra Leone",
                  "x": 14
                },
                {
                  "y": 14041116,
                  "Country": "Somalie",
                  "x": 13
                },
                {
                  "y": 14236199,
                  "Country": "Sao Tomé-et-Principe",
                  "x": 12
                },
                {
                  "y": 15862758,
                  "Country": "Soudan",
                  "x": 11
                },
                {
                  "y": 16028255,
                  "Country": "Swaziland",
                  "x": 10
                },
                {
                  "y": 17287822,
                  "Country": "Tchad",
                  "x": 9
                },
                {
                  "y": 18567243,
                  "Country": "Togo",
                  "x": 8
                },
                {
                  "y": 24282232,
                  "Country": "Tunisie",
                  "x": 7
                },
                {
                  "y": 26630732,
                  "Country": "Tanzanie",
                  "x": 6
                },
                {
                  "y": 28559230,
                  "Country": "Ouganda",
                  "x": 5
                },
                {
                  "y": 31206400,
                  "Country": "Afrique du Sud",
                  "x": 4
                },
                {
                  "y": 38177616,
                  "Country": "République démocratique du Congo",
                  "x": 3
                },
                {
                  "y": 84375765,
                  "Country": "Zambie",
                  "x": 2
                },
                {
                  "y": 97780052,
                  "Country": "Zimbabwe",
                  "x": 1
                }
               ]} />
                  {value ? <Hint value={value}/> : null}
                  
              </XYPlot>
          </div>
        );
    }

}

export default UrbanAvg;