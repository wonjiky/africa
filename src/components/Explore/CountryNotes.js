import React from 'react';
import AnimateHeight from 'react-animate-height';

const CountryNotes = props => {
    const {language, countryData, selectedCountry} = props;
    const list = countryData.find(u => u.ID  === selectedCountry);
    if(language===0){
        if(list === undefined){
            return <div></div>
        }else{
            return(
                <div className="explore_country-info">
                    <div className="info-button">
                        <button className='accordion' onClick={props.handleClick}>
                            <h3 className="material-icons">Country</h3>
                            {props.height === 0 ? <i className="material-icons">keyboard_arrow_down</i> :
                                <i className="material-icons active">keyboard_arrow_up</i>}
                        </button>
                    </div>
                    <hr className="country_hr"/>
                    <AnimateHeight height={props.height} className="accordion-content">
                        <ul>
                            <li>{list.Capital}</li>
                            <li>{list.Population}</li>
                            <li>{list.Area}km&sup2;</li>
                            <li>{list.Text_EN}</li>
                        </ul>
                    </AnimateHeight>
                </div>
            )
        }
    }else{
        if(list === undefined){
            return <div></div>
        }else{
            return(
                <div className="explore_country-info">
                    <div className="info-button">
                        <button className='accordion' onClick={props.handleClick}>
                            <h3 className="material-icons">pays</h3>
                            {props.height === 0 ? <i className="material-icons">keyboard_arrow_down</i> :
                                <i className="material-icons active">keyboard_arrow_up</i>}
                        </button>
                    </div>
                    <hr className="country_hr"/>
                    <AnimateHeight height={props.height} className="accordion-content">
                        <ul>
                            <li>{list.Capital}</li>
                            <li>{list.Population}</li>
                            <li>{list.Area}km&sup2;</li>
                            <li>{list.Text_FR}</li>
                        </ul>
                    </AnimateHeight>
                </div>
            )
        }
    }
}

export default CountryNotes;
