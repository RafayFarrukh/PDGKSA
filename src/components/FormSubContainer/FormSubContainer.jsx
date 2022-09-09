import React from 'react';
import "./FormSubContainer.css";
function FormSubContainer({children,title , isRequired,invalid}){
    return(
        <div className={(isRequired && invalid) ?'form-sub-container form-sub-container-required' : 'form-sub-container'}>
            <h2 className='form-sub-container-heading'>{title} { isRequired && <span className="required">*</span>}</h2>
            {children}
            {
                (isRequired && invalid) &&
                <h3 className='form-sub-container-heading required-question'><i className="fa-solid fa-circle-info"></i> This is Required to be filled</h3>
            }
        </div>
    )

}

export default React.memo(FormSubContainer);