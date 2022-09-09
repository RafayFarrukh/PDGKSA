import React from 'react'
import './FilePicker.css'

function FilePicker({name,updateUserImage,userImageUrl,acceptType,filePickerRef}){

    
    return(
        <div className='input-file-picker'>
            <img 
                src={(userImageUrl==='' )?"./login-user.png":userImageUrl} 
                className='input-file-img'  
                alt="user-img"/>
            <input type="file"  
                onChange={updateUserImage} 
                className="input-file" 
                ref={filePickerRef}
                name={name} 
                accept={acceptType} />
        </div>
        
    )
}
export default React.memo(FilePicker);