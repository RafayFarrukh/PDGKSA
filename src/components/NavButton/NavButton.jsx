import React from 'react';
import "./NavButton.css"
function NavButton({title,iconClass,navButtonClassName,handleEvent}){
   
    return(
        <div className={navButtonClassName} onClick={()=> handleEvent(title)}>
            <h3 className="nav-button">
                <i className={ `nav-button-icon ${iconClass}` }></i>
                {title}
            </h3>
        </div>
    )
}

export default React.memo(NavButton);