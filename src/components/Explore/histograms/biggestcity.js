import React, { Component } from 'react';
import { XYPlot, Hint, VerticalBarSeries } from 'react-vis';

class UrbanBig extends Component {
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
                  "y": 134746,
                  "id": "Sao Tome",
                  "x": 50
                },
                {
                  "y": 135985,
                  "id": "Manzini",
                  "x": 49
                },
                {
                  "y": 148875,
                  "id": "Praia",
                  "x": 48
                },
                {
                  "y": 306902,
                  "id": "Maseru",
                  "x": 47
                },
                {
                  "y": 311300,
                  "id": "Bata",
                  "x": 46
                },
                {
                  "y": 357256,
                  "id": "Windhoek",
                  "x": 45
                },
                {
                  "y": 365444,
                  "id": "Gaborone",
                  "x": 44
                },
                {
                  "y": 381600,
                  "id": "Juba",
                  "x": 43
                },
                {
                  "y": 410620,
                  "id": "Bissau",
                  "x": 42
                },
                {
                  "y": 465360,
                  "id": "Asmara",
                  "x": 41
                },
                {
                  "y": 555403,
                  "id": "Djibouti",
                  "x": 40
                },
                {
                  "y": 788777,
                  "id": "Serrekunda",
                  "x": 39
                },
                {
                  "y": 885670,
                  "id": "Libreville",
                  "x": 38
                },
                {
                  "y": 945883,
                  "id": "Bangui",
                  "x": 37
                },
                {
                  "y": 1043847,
                  "id": "Bujumbura",
                  "x": 36
                },
                {
                  "y": 1060776,
                  "id": "Nouakchott",
                  "x": 35
                },
                {
                  "y": 1071481,
                  "id": "Niamey",
                  "x": 34
                },
                {
                  "y": 1124965,
                  "id": "Lilongwe",
                  "x": 33
                },
                {
                  "y": 1190635,
                  "id": "Monrovia",
                  "x": 32
                },
                {
                  "y": 1210048,
                  "id": "Ndjamena",
                  "x": 31
                },
                {
                  "y": 1456596,
                  "id": "Freetown",
                  "x": 30
                },
                {
                  "y": 1524434,
                  "id": "Cotonou",
                  "x": 29
                },
                {
                  "y": 1588304,
                  "id": "Brazzaville",
                  "x": 28
                },
                {
                  "y": 1712400,
                  "id": "Mogadisho",
                  "x": 27
                },
                {
                  "y": 1733330,
                  "id": "Lome",
                  "x": 26
                },
                {
                  "y": 1949325,
                  "id": "Tripoli",
                  "x": 25
                },
                {
                  "y": 2186966,
                  "id": "Conakry",
                  "x": 24
                },
                {
                  "y": 2202094,
                  "id": "Kigali",
                  "x": 23
                },
                {
                  "y": 2272905,
                  "id": "Harare",
                  "x": 22
                },
                {
                  "y": 2299007,
                  "id": "Ouagadougou",
                  "x": 21
                },
                {
                  "y": 2426689,
                  "id": "Lusaka",
                  "x": 20
                },
                {
                  "y": 2442503,
                  "id": "Tunis",
                  "x": 19
                },
                {
                  "y": 2607026,
                  "id": "Cidade de Maputo",
                  "x": 18
                },
                {
                  "y": 2781734,
                  "id": "Bamako",
                  "x": 17
                },
                {
                  "y": 3067637,
                  "id": "Dakar",
                  "x": 16
                },
                {
                  "y": 3390193,
                  "id": "Casablanca",
                  "x": 15
                },
                {
                  "y": 3711329,
                  "id": "Addis Ababa City",
                  "x": 14
                },
                {
                  "y": 3790894,
                  "id": "Kampala",
                  "x": 13
                },
                {
                  "y": 3886202,
                  "id": "Alger",
                  "x": 12
                },
                {
                  "y": 3901680,
                  "id": "Yaoundé",
                  "x": 11
                },
                {
                  "y": 4452483,
                  "id": "Accra",
                  "x": 10
                },
                {
                  "y": 4717347,
                  "id": "Abidjan",
                  "x": 9
                },
                {
                  "y": 5264746,
                  "id": "Khartum",
                  "x": 8
                },
                {
                  "y": 5325879,
                  "id": "Dar es Salaam",
                  "x": 7
                },
                {
                  "y": 5877118,
                  "id": "Nairobi aggl.",
                  "x": 6
                },
                {
                  "y": 6979211,
                  "id": "Luanda",
                  "x": 5
                },
                {
                  "y": 7270000,
                  "id": "Kinshasa",
                  "x": 4
                },
                {
                  "y": 8314220,
                  "id": "Johannesburg",
                  "x": 3
                },
                {
                  "y": 11810523,
                  "id": "Lagos",
                  "x": 2
                },
                {
                  "y": 22995802,
                  "id": "al-Qahira",
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

export default UrbanBig;