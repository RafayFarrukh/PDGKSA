import React from 'react';
import './CheckBox.css';

function CheckBox({title,checked,onChange,value,name}){
    return(
    <>
        <label className="checkbox-container">
            <span className="select-text">{title}</span>
            <input 
                type="checkbox" 
                className="checkbox" 
                name={name} 
                checked={checked}
                onChange={onChange}
                value={value}/>
            <span className="checkmark"></span>
        </label>
    </>
    )
}

export default React.memo(CheckBox);