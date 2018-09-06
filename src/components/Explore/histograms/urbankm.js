import React, { Component } from 'react';
import { XYPlot, Hint, VerticalBarSeries } from 'react-vis';

class Urbankm extends Component {
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
                  "y": 43,
                  "id": "Malawi",
                  "x": 50
                },
                {
                  "y": 49,
                  "id": "Sénégal",
                  "x": 49
                },
                {
                  "y": 72,
                  "id": "Togo",
                  "x": 48
                },
                {
                  "y": 106,
                  "id": "Mozambique",
                  "x": 47
                },
                {
                  "y": 137,
                  "id": "République démocratique du Congo",
                  "x": 46
                },
                {
                  "y": 234,
                  "id": "République centrafricaine",
                  "x": 45
                },
                {
                  "y": 245,
                  "id": "Botswana",
                  "x": 44
                },
                {
                  "y": 284,
                  "id": "Guinée-Bissau",
                  "x": 43
                },
                {
                  "y": 318,
                  "id": "Algérie",
                  "x": 42
                },
                {
                  "y": 319,
                  "id": "éthiopie",
                  "x": 41
                },
                {
                  "y": 358,
                  "id": "Mauritanie",
                  "x": 40
                },
                {
                  "y": 377,
                  "id": "érythrée",
                  "x": 39
                },
                {
                  "y": 389,
                  "id": "Sao Tomé-et-Principe",
                  "x": 38
                },
                {
                  "y": 425,
                  "id": "Burkina Faso",
                  "x": 37
                },
                {
                  "y": 448,
                  "id": "Somalie",
                  "x": 36
                },
                {
                  "y": 518,
                  "id": "Zimbabwe",
                  "x": 35
                },
                {
                  "y": 529,
                  "id": "Gabon",
                  "x": 34
                },
                {
                  "y": 550,
                  "id": "Gambie",
                  "x": 33
                },
                {
                  "y": 566,
                  "id": "Maroc",
                  "x": 32
                },
                {
                  "y": 762,
                  "id": "Tunisie",
                  "x": 31
                },
                {
                  "y": 776,
                  "id": "Djibouti",
                  "x": 30
                },
                {
                  "y": 806,
                  "id": "Sierra Leone",
                  "x": 29
                },
                {
                  "y": 959,
                  "id": "Tanzanie",
                  "x": 28
                },
                {
                  "y": 972,
                  "id": "République du Congo",
                  "x": 27
                },
                {
                  "y": 1124,
                  "id": "Lesotho",
                  "x": 26
                },
                {
                  "y": 1145,
                  "id": "Namibie",
                  "x": 25
                },
                {
                  "y": 1179,
                  "id": "Kenya",
                  "x": 24
                },
                {
                  "y": 1185,
                  "id": "Libye",
                  "x": 23
                },
                {
                  "y": 1224,
                  "id": "Afrique du Sud",
                  "x": 22
                },
                {
                  "y": 1477,
                  "id": "Ouganda",
                  "x": 21
                },
                {
                  "y": 1478,
                  "id": "Rwanda",
                  "x": 20
                },
                {
                  "y": 1787,
                  "id": "Angola",
                  "x": 19
                },
                {
                  "y": 2097,
                  "id": "Zambie",
                  "x": 18
                },
                {
                  "y": 2131,
                  "id": "Ghana",
                  "x": 17
                },
                {
                  "y": 2343,
                  "id": "égypte",
                  "x": 16
                },
                {
                  "y": 2805,
                  "id": "Niger",
                  "x": 15
                },
                {
                  "y": 2924,
                  "id": "République du Soudan du Sud",
                  "x": 14
                },
                {
                  "y": 3089,
                  "id": "Swaziland",
                  "x": 13
                },
                {
                  "y": 3252,
                  "id": "Tchad",
                  "x": 12
                },
                {
                  "y": 3646,
                  "id": "Guinée",
                  "x": 11
                },
                {
                  "y": 4071,
                  "id": "Cameroun",
                  "x": 10
                },
                {
                  "y": 4159,
                  "id": "Soudan",
                  "x": 9
                },
                {
                  "y": 4658,
                  "id": "Burundi",
                  "x": 8
                },
                {
                  "y": 5531,
                  "id": "Nigeria",
                  "x": 7
                },
                {
                  "y": 6870,
                  "id": "Bénin",
                  "x": 6
                },
                {
                  "y": 7135,
                  "id": "Céte d'Ivoire",
                  "x": 5
                },
                {
                  "y": 7440,
                  "id": "Liberia",
                  "x": 4
                },
                {
                  "y": 12308,
                  "id": "Guinée équatoriale",
                  "x": 3
                },
                {
                  "y": 19719,
                  "id": "Cap-Vert",
                  "x": 2
                },
                {
                  "y": 23131,
                  "id": "Mali",
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

export default Urbankm;