import React, { useState } from 'react';
import NavButton from '../NavButton/NavButton';
import ThemeButton from '../ThemeButton/ThemeButton';
import Login from '../Login'
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
function NavBar({title,iconClass,imgSrc,navButtonList}){
  const navigate = useNavigate();
  const logouttoast=()=>{
    toast.success('Successfully Logged Out',{position: toast.POSITION.TOP_RIGHT,autoClose: 1500})

  }
  const submit = () => {
    confirmAlert({
        title: "Confirm to Logout",
        message: "Are you sure you want to logout.",
        buttons: [
          {
            label: "Yes",
            onClick: (e) => {
             
              // e.preventDefault();
                localStorage.removeItem("User");
                // window.location.reload("/");
               navigate("/login")
               logouttoast()
          }
          },
          {
            label: "No",
            onClick: () =>{}
    
          }
        ]
      });
    
      }
    return(
        <>
          
            
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Doctors Portal</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        
      {localStorage.getItem("User") ? (
              <>
                <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <a
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    href=""
                   
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.removeItem("User");
                      // window.location.reload("/");
                     navigate("/login")
                     logouttoast()

                    }}
                  >
                    Logout
                  </a>
                </li>{" "}
                <li>
          <Link to="/AllUsers" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Get All Users</Link>
        </li>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/"
                  class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  SignUp
                </Link>
              </>
            )}

      
       
      </ul>
    </div>
  </div>
</nav>

            
        </>
    )
}

export default React.memo(NavBar);