import React,{useState} from 'react';
import './ThemeButton.css';



function ThemeButton(){

    const [theme,setTheme]=useState(localStorage.getItem("theme"));

    const switchTheme=()=>{
        if (theme==="light")
        {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme','dark');
            setTheme('dark')
        }
        else
        {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme','light');
            setTheme('light')
        }
    }

    
    return(
        <>
            <button onClick={()=>switchTheme()} className="nav-bar-theme-button">
                <h3>
                    <i className={ theme==="light" ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
                </h3>
            </button>
        </>
    )
}

export default React.memo(ThemeButton);