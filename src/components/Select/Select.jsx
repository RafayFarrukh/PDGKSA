import React from 'react'
import './Select.css';

function Select({selectOptions,name,onChange,selectRef}){
    return(
        <select name={name} className='form-select' ref={selectRef} onChange={onChange}>
            <option className='form-options' value="">please choose an option</option>
            {
                selectOptions.map((optionVal,index)=>
                <option className="form-options" key={index} value={optionVal}>{optionVal}</option>
                )
            }
        </select>
    )
}

export default React.memo(Select);