import React from 'react';
import "./RadioButton.css"
function RadioButton({title,onChange,checked,value,name}){
    return(
        <label className="radio-container">
            <span className="select-text">{title}</span>
            <input type="radio" 
            name={name} 
            checked={checked===value}
            onChange={onChange}  
            value={value}/>
            <span className="radio-checkmark"></span>
        </label>
    )
    
}

export default React.memo(RadioButton);