import React from 'react';
import "./FormHeader.css";

function FormHeader({title}){
    return (
        <div className='form-sub-holder'>
            <hr className="rounded"></hr>
            <h2 className='form-sub-holder-title'>{title}</h2>
            <h4 className='form-sub-holder-required'>* Required</h4>
        </div>
    )
}

export default React.memo(FormHeader);