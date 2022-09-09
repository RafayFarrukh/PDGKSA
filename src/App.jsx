import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form.jsx";
import NavBar from "./components/NavBar/NavBar";

const navBarModel={
  title:"Forms",
  iconClass:'',
  imgSrc:'google-forms.png',
  navButtonList:[
    {
      iconClass:'fa-solid fa-house',
      title:'Home'
    },
    {
      iconClass:'fa-solid fa-circle-info',
      title:'Support'
    }
  ]

}

function App() {
  useEffect(()=>{
    var theme="light";    //default to light
    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") === "dark"){
             theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        console.log("matchmedia not supported");
        return;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
         theme = "dark";
    }
  
    document.documentElement.setAttribute("data-theme", theme);

  },[]);
  return (
    <>
    <NavBar {...navBarModel}/>
    <div className="app-body" id='Home'>
        <Form/>
    </div>
    <Footer imgSrc = {navBarModel.imgSrc}/>
  </>
  );
}

export default App;
