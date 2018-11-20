import React from 'react';
import MaterialIcon from 'material-icons-react';

const RenderInfo = props => {
    const data = props.data;
    return (
        <div className="histogram-title">
            {data.title}
            <MaterialIcon icon="info" size={15} className="icon-color"/>
            <p className="infotext"> {data.info} </p>
        </div>
    )
}

const RenderHistogram = props => {
    const data = props.data[0];
    return(
        <div className="indicator-wrapper">
            <RenderInfo data={data}/>
        </div>
    );
}


export default RenderHistogram;