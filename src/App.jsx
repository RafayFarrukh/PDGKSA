import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form.jsx";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import AllUsers from "./components/AllUsers/AllUsers";
import { ToastContainer,toast } from 'react-toastify'
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

  return (
    <>
   



    <BrowserRouter>
    <NavBar {...navBarModel}/>
    <div className="app-body" id='Home'>
        {/* <Form/> */}
    </div>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route exact path="/" element={<Form />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="AllUsers" element={<AllUsers />} />
        
      </Routes>
    <Footer imgSrc = {navBarModel.imgSrc}/>

    </BrowserRouter>
    <ToastContainer  position="top-right"  />
  </>
  );
}

export default App;
