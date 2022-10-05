import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form.jsx";
import NavBar from "./components/NavBar/NavBar";
import { useState } from 'react';
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
  const [editing, setEditing] = useState(false);
  const initialFormState = { name:'', // input type text
  email:'', // input type e-mail
  qualification:[], //drop down select
  mobile:'', // input type date
  hospitalPost:'', //radio button
  residencyDuration:'', // input type number
  workingPlace:"",
  yearOfEntry:"",
  password:"",
  SCFHSpost:"",
  gender:'', // radio button
  transScript:"",
  yoapgd:"",
  SCFHSresponse:"",
  residencyDuration:"",
  qualification:{
      FCPS:'',
      MCPS:'',
      "Fellowship from Royal College of UK":"",
      "Fellowship from Royal College of Ireland":"",
      "Membership from Royal College of UK":"",
      "Membership from Royal College of Ireland":"",
      "Arab Board":"",
      "Saudi Board":"",
      "American Board Certification":"",
      "European diploma":"",
      "FCPS Part-1 (part 2 not yer finished)":"",
      "Other":"",
      
  },
  speciality:{
      ANAESTHESIOLOGY:"",
      "CARDIAC SURGERY":"",
      CARDIOLOGY:"",
      "CHEMICAL PATHOLOGY":"",
      "CLINICAL HAEMATOLOGY":"",
      "COMMUNITY MEDICINE":"",
      "Arab DERMATOLOGY":"",
      "DIAGNOSTIC RADIOLOGY":"",
      "EMERGENCY MEDICINE":"",
      "FAMILY MEDICINE":"",
      "FORENSIC MEDICINE":"",
      "GASTROENTEROLOGY":"",
      "GENERAL SURGERY":"",
      "HAEMATOLOGY":"",
      "HISTOPATHOLOGY":"",
      "INTERNAL MEDICINE":"",
      "MEDICINE":"",
      "MICROBIOLOGY":"",
      "Madical ONCOLOGY":"",
      "NEPHROLOGY":"",
      "NEUROLOGY":"",
      "NUCLEAR MEDICINE":"",
      "OBSTETRICS & GYNAECOLOGY":"",
      "Operative DENTISRY":"",
      "OPTHALMOLOGY":"",
      "ORAL & MANILLO- FACIAL SURGERY":"",
      "ORTHODONTICS":"",
      "ORTHOPAEDIC Surgery":"",
      "OTO- RHINO- LOGY ENT)":"",
      "PAEDIATRIC SURGERY":"",
      "PAEDIATRICS":"",
  }};
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ name:user.name,email:user.email,mobile:user.mobile,hospitalPost:user.hospitalPost,residencyDuration:user.residencyDuration,transScript:user.transScript,workingPlace:user.workingPlace,yoapgd:user.yoapgd ,SCFHSresponse:user.SCFHSresponse,gender:user.gender,yearOfEntry:user.yearOfEntry,password:user.password,SCFHSpost:user.SCFHSpost,speciality:user.speciality,qualification:user.qualification });
    // ,gender,qualification,yearOfEntry ,speciality, SCFHSpost,password,
    console.log("hello g")
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
   
  };

  return (
    <>
   



    <BrowserRouter>
    <NavBar {...navBarModel}/>
    <div className="app-body" id='Home'>
        {/* <Form/> */} 
    </div>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route exact path="/" element={<Form 
        editing={editing}
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
        />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="AllUsers" element={<AllUsers 
        editRow={editRow}
        />} />
        
      </Routes>
    <Footer imgSrc = {navBarModel.imgSrc}/>

    </BrowserRouter>
    <ToastContainer  position="top-right"  />
  </>
  );
}

export default App;
