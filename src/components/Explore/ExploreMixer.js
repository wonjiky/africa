import React, {Component} from 'react';
import createClass from 'create-react-class';
import StepRangeSlider from 'react-step-range-slider'
import {  FacebookIcon,  TwitterIcon,  LinkedinIcon} from 'react-share';

class ExploreMixer extends Component {

    legend(data, size, total, above, million) {
        let Circle = createClass({
            render:function() {
                var circleStyle = {
                    opacity:0.6,
                    padding:4,
                    margin:0,
                    display:"inline-block",
                    backgroundColor: this.props.bgColor,
                    borderRadius: "50%",
                    width:this.props.size,
                    height:this.props.size,
                    };
                return (
                    <div style={circleStyle}></div>
                );
            }
        });

        let colors = ['#E73741','#df521e','#e1b400','#32a674','#0b68af','#993484'];
        let sizes = [24,21,18,15,12,9];
        let renderCircle = [];

        for (let i = 0; i < colors.length; i++) {
            let color = colors[i];
            let size = sizes[i];
            renderCircle.push(<Circle key={i + color} bgColor={color} size={size}/>);
        }

        let result = {};

        if(data){
            for(let i = 0; i < data.length; ++i) {
                if(!result[data[i]])
                result[data[i]] = 0;
                ++result[data[i]];
            }
            for(let i = 0; i < 7; ++i){
                if(!result[i]){result[i]=0}
            }
            result[["7"]]=result[["1"]]+result[["2"]]+result[["3"]]+result[["4"]]+result[["5"]]+result[["6"]];
        }
        
        return (
            <table className="explore-legend">
                <tbody>
                    <tr className="legend-category">
                        <th colSpan="2" >{size}</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td className="legend-title">{above} 2 {million}</td>
                        <td className="legend-diagram">{renderCircle[0]}</td>
                        <td className="legend-value">{result["6"]}</td>
                    </tr>
                    <tr>
                        <td>1 -2 {million}</td>
                        <td className="legend-diagram">{renderCircle[1]}</td>
                        <td className="legend-value">{result["5"]}</td>
                    </tr>
                    <tr>
                        <td>300 000 - 1 {million}</td>
                        <td className="legend-diagram">{renderCircle[2]}</td>
                        <td className="legend-value">{result["4"]}</td>
                    </tr>
                    <tr>
                        <td>100 000 - 300 000</td>
                        <td className="legend-diagram">{renderCircle[3]}</td>
                        <td className="legend-value">{result["3"]}</td>
                    </tr>
                    <tr>
                        <td>30 000 - 100 000</td>
                        <td className="legend-diagram">{renderCircle[4]}</td>
                        <td className="legend-value">{result["2"]}</td>
                    </tr>
                    <tr className="legend-category">
                        <td>10 000 - 30 000</td>
                        <td className="legend-diagram">{renderCircle[5]}</td>
                        <td className="legend-value">{result["1"]}</td>
                    </tr>
                    <tr className="legend-category">
                        <th colSpan="2" >{total}</th>
                        <th>{result["7"]}</th>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        const { sizeArray } = this.props;
        const label = {
            size_EN: 'Size',
            size_FR: 'Taille',
            total_EN: 'Total Agglomerations',
            total_FR: 'Total des agglomérations',
            above_EN: 'Above',
            above_FR: 'plus de',
            million_EN: 'million',
            million_FR: 'millions'
        }
        if(this.props.language === 0) {
            const renderLegend = this.legend(sizeArray, label.size_EN, label.total_EN, label.above_EN, label.million_EN);
            return(
                <div className="explore_mixer-wrapper">
                    <div className="explore_mixer-list">
                        <ul>
                            <li>
                                <h6> Timeslider </h6>
                                <p><span>{this.props.timeSliderValue}</span></p>
                                <StepRangeSlider
                                    value={2015}
                                    range={this.props.timeSliderRange}
                                    onChange={value => this.props.handleSliderValue(value)}
                                />
                                <hr/>
                            </li>
                            <li>
                                <h6>Urban Population</h6>
                                <div className="legend-wrapper">{renderLegend}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="home_mixer-download">
                        <div className="social-icons">
                            <a href="https://twitter.com/SWAC_OECD" target="_blank" rel="noopener noreferrer"><TwitterIcon size={32} round={true} /></a>
                            <a href="http://www.facebook.com/OECDSWAC" target="_blank" rel="noopener noreferrer"><FacebookIcon size={32} round={true}/></a>
                            <a href="https://www.linkedin.com/company/sahel-and-west-africa-club-club-du-sahel-et-l-afrique-de-l-ouest/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={32} round={true} /></a>
                        </div>
                        <img src="assets/images/oecd_en.png" width="100%"
                        alt="OECD"/>
                    </div>
                </div>
            );
        }else{
            const renderLegend = this.legend(sizeArray, label.size_FR, label.total_FR, label.above_FR, label.million_FR);
            return(
                <div className="explore_mixer-wrapper">
                    <div className="explore_mixer-list">
                        <ul>
                            <li>
                                <h6> Timeslider </h6>
                                <p><span>{this.props.timeSliderValue}</span></p>
                                <StepRangeSlider
                                    value={2015}
                                    range={this.props.timeSliderRange}
                                    onChange={value => this.props.handleSliderValue(value)}
                                />
                                <hr/>
                            </li>
                            <li>
                                <h6>Population urbaine</h6>
                                <div className="legend-wrapper">{renderLegend}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="home_mixer-download">
                        <div className="social-icons">
                            <a href="https://twitter.com/SWAC_OECD" target="_blank" rel="noopener noreferrer"><TwitterIcon size={32} round={true} /></a>
                            <a href="http://www.facebook.com/OECDSWAC" target="_blank" rel="noopener noreferrer"><FacebookIcon size={32} round={true}/></a>
                            <a href="https://www.linkedin.com/company/sahel-and-west-africa-club-club-du-sahel-et-l-afrique-de-l-ouest/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={32} round={true} /></a>
                        </div>
                        <img src="assets/images/oecd_fr.png" width="100%"
                        alt="OCDE"/>
                    </div>
                </div>
            );
        }
    }
}
export default ExploreMixer;
