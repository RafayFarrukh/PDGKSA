import React from 'react';
import './Button.css';
function Button(props)
{
	const {type,children,clickHandler,classProp,disabled}=props;
	return(
			<button type={type} className={classProp}  disabled={disabled} onClick={clickHandler}>{children}</button>
			
	)
	
}

export default React.memo(Button);