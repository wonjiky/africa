import Select from 'react-select';
import React from 'react';

const DropDownMixer = props => {
    // if(props.language ===0) {
        return (
            <div className="mobile_searchWrapper">
            <Select
                options={props.list}
                value={props.selectedContent}
                backspaceRemovesValue={false}
                isSearchable={false}
                onChange={props.changeValue}
                // theme={(theme) => ({
                //     ...theme,
                //     borderRadius: 0,
                //     colors: {
                //     ...theme.colors,
                //     text: 'orangered',
                //     primary25: '#E8AE40',
                //     primary: '#E8AE40',
                //     },
                // })}
            />
        </div>
        )
    // }
}

export default DropDownMixer;