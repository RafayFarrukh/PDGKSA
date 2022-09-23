import React from 'react'
import AuthCheck from '../AuthCheck/AuthCheck'
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://pakdoctorsksa.com/api/Users/GetAllDoctors"
      )
      .then((res) => {

          setProducts((res.data.data).map(a => {
                          return {
                            role:a.role,
                              status: a.status,
                              ...(JSON.parse(a.data))
                          }
                      }))
        
        //  console.log(res.data.data)
        //  console.log(res.data.status);
        
      })
     
      .catch((err) => {
        console.log(err);
       
      });
  };
  React.useEffect(function () {
 
    getData();
    
  }, []);

  // const Approve=(email)=>{
  //   // axios
  //   // .post("https://pakdoctorsksa.com/api/Users/ApproveRequest",{email})
  //   toast.success('Successfully Approved',{position: toast.POSITION.TOP_RIGHT,autoClose: 2000  })
  //   // window.location.reload(4000)
  //   console.log("request approved")
  // }

  const submit = (email) => {
confirmAlert({
    title: "Confirm to Approve",
    message: "Are you sure you want to do this.",
    buttons: [
      {
        label: "Yes",
        onClick: () => {
          axios
    .post("https://pakdoctorsksa.com/api/Users/ApproveRequest",{email})
          toast.success('Successfully Approved',{position: toast.POSITION.TOP_RIGHT,autoClose: 2000  })
          setTimeout(function(){
            window.location.reload();
         }, 2000);
      }
      },
      {
        label: "No",
        onClick: () =>         navigate("/AllUsers")

      }
    ]
  });

  }

  
  return (
    <AuthCheck>
    {/* <div>AllUsers</div> */}
   

<div className=''>

<table class="w-full  text-xs  text-gray-500 dark:text-gray-400 table-auto  ">
        <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-4 px-2 border ">
                    UserName
                </th>
                <th scope="col" class="py-4 px-2 border">
                    Email
                </th>
                <th scope="col" class="py-4 px-2 border">
                   Gender
                </th>
                <th scope="col" class="py-4 px-2 border">
                Year Of Entry
                </th>
                <th scope="col" class="py-3 px-2 border">
                Hospital Post
                </th>
                
                <th scope="col" class="py-3 px-2 border">
                   Working Place
                </th>
                <th scope="col" class="py-3 px-2 border">
                SCFHS Post
                </th>
               
                <th scope="col" class="py-3 px-2 border">
                Hospital name with City
                </th>
                <th scope="col" class="py-3 px-2 border">
               Mobile
                </th>
                <th scope="col" class="py-3 -px-2 border">
               Qualifications
                </th>
                <th scope="col" class="py-3 px-2 border">
                Year Of All Post Graduation
                </th>
                <th scope="col" class="py-3 px-2 border ">
               Specification
                </th>
                <th scope="col" class="py-3 px-2 border">
                TransScript
                </th>
                
                <th scope="col" class="py-3 px-2 border">
                SCFHS Response
                </th>
                <th scope="col" class="py-3 px-2 border">
                Residency Duration
                </th>
                
                <th scope="col" class="py-3 px-2 border">
                Approve
                </th>
            </tr>
        </thead>
        <tbody>
               
       
            
  
        </tbody>
      

      <tbody>
      </tbody>
     
        <tbody className='showtable w-20'>
          {products.map((user,index) => (
            <>
          
                      
                      <tr  key={index} className="w-20 mt-10" > 
                                
                      <td className="py-4 px-2 border ">{user.name}</td>

                      <td className="py-4 px-2 border">{user.email}</td>
                      <td className="py-4 px-2 border">{user.gender}</td>
                      <td className="py-4 px-2 border">{user.yearOfEntry}</td>
                      <td className="py-4 px-2 border">{user.hospitalPost}</td>
                      <td className="py-4 px-2 border">{user.workingPlace}</td>
                      <td className="py-4 px-2 border">{user.SCFHSpost}</td>
                      <td className="py-4 px-2 border">{user.HosNameCity}</td>
                      <td className="py-4 px-2 border">{user.mobile}</td>

                 {/* <td className="py-4 px-2 border">{user.qualification}</td> */}
                 {/* <td className="py-4 px-2 border" style={{whiteSpace: "pre-wrap"}}>{user.qualification.split(",").join("\n")  }</td> */}
                        {/* {console.log( user.qualification.split(",").join("\n"))} */}
                        <td className="py-4 px-2 border"  style={{whiteSpace: "pre-wrap"}}>{user.qualification.replace(/,/g,'\n')}</td>
             
               

                     
                      <td className="py-4 px-2 border">{user.yoapgd}</td>
                      <td className="py-4 px-2 border"  style={{whiteSpace: "pre-wrap"}}>{user.speciality.replace(/,/g,'\n') }</td>
                      <td className="py-4 px-2 border">{user.transScript}</td>
                      <td className="py-4 px-2 border">{user.SCFHSresponse}</td>
                      <td className="py-4 px-2 border">{user.residencyDuration}</td>

                        <td className="py-4 px-2 border">  {
 
                            user.status==1&&user.role==1 ?(
                               <button onClick={
                            ()=>{
                              submit(user.email)
                            }
                          } class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"> Approve</button>
                         )
                       
                         : user.role==2 && user.status==2?(
                          <div  class="font-serif font-bold mt-5 text-blue-800">Approved</div>
                         ) 
                         : user.status==2?(
                          <div  class="font-serif font-bold mt-5 text-blue-800">Approved</div>
                         )        
                         : <div  >Not  Approved</div>         


                        // user.status==1   ?  (
                        //   <button onClick={
                        //     ()=>{
                        //       submit(user.email)
                        //     }
                        //   } class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"> Approve</button>
                        // ):(
                        //   <div  class="font-serif font-bold mt-5 text-blue-800">Approved</div>
                        // )
                      }
                      </td>
                     

                      </tr>
                      
            </>
          ))
          }
        </tbody>
    </table>


       <div className='mb-72 '></div>





    </div>

         
    </AuthCheck>
  )
}

export default AllUsers