import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import bcrypt from 'bcryptjs'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import M from 'materialize-css'
import axios from "axios";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 

   const  hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 
  
// const toast=()=>{
//   toast('basic',{position: toast.POSITION.TOP_LEFT})
// }

  const handleSubmit =  (e) => {
    
    e.preventDefault();

  
    axios
      .post("https://pakdoctorsksa.com/api/Users/Login", {
        // .post("/api/user/login", {
        // email: email,
        username:email,
        password: hashedPassword,
      })
      .then((resp) => {
      
     
        


// if (resp.data.message=="Your application is still under review. You will be able to login once your request gets approved.") {
//   toast.warning(resp.data.message,{position: toast.POSITION.TOP_RIGHT,autoClose: 2000})
// }
// else if(resp.data.message=="Invalid username and/or password") { 
//   toast.error(resp.data.message,{position: toast.POSITION.TOP_RIGHT,autoClose: 2000})
// }

  if (resp.data.success==false) {
    toast.error(resp.data.message,{position: toast.POSITION.TOP_RIGHT,autoClose: 2000})
  }

        localStorage.setItem("User", resp.data.data.data,);
        localStorage.setItem("Status", resp.data.data.status,);
        localStorage.setItem("Role", resp.data.data.role,);
       console.log( resp.data.data.status,);

        navigate("/AllUsers");

        // console.log(resp.data.data);
    
    
      toast.success('Successfully Logged in',{position: toast.POSITION.TOP_RIGHT,autoClose: 2000})
    
      })
     
      .catch((resp) => {
      console.log(resp);
  
       
      
      });
  };
  return (
    <>
      <div className="">
        <div className="mt-24">
          <div className="w-full md:w-96 md:max-w-full mx-auto shadow-lg mb-72">
            <div className="p-6  border-gray-300 sm:rounded-md">
              <h1 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800 mb-12 mr-20">
                {/* <img
                  className="h-16 w-16 inline mx-6 rounded-xl"
                  src={logo5}
                  alt=""
                /> */}
                Login
              </h1>
              <form method="POST" action="" onSubmit={handleSubmit}>

                <label className="block mb-6">
              <EmailIcon />
                  <span className="text-gray-700 ml-2 font-bold">
                    {" "}
                    Email address
                  </span>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Email"
                    required
                  />
                </label>
                <label className="block mb-6">
                  <LockIcon />
                  <span className="text-gray-700 ml-2 font-bold">Password</span>
                  <input
                    name="password"
                    type="password"
                    // ref={passwordRef}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    // minLength="6"
                    placeholder="Password"
                    required
                  />
                </label>

                <div className="mb-6">
                  <button
                    type="submit"
                 
                    className="
            h-10
            px-5
            text-indigo-100
            bg-teal-600
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-teal-400
            text-black
          "
                  >
                    Login
                  </button>
              
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;