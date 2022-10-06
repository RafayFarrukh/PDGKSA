import React from 'react';
import './Input.css';

function Input({placeholder,type,onChange,value,name,inputRef,inputFocusEvent,checked}){
    return(
        <input 
        name={name}
        ref={inputRef}
        onFocus={()=>inputFocusEvent(name)}
        className='form-input'
        checked={checked}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        />
    )
}

export default React.memo(Input);