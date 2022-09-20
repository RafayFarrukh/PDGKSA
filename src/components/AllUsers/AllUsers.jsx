import React from 'react'
import AuthCheck from '../AuthCheck/AuthCheck'
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify'

const AllUsers = () => {
  const [products, setProducts] = React.useState([]);
  const getData = () => {
    axios
      .get("https://pakdoctorsksa.com/api/Users/GetAllDoctors"
      )
      .then((res) => {

          setProducts((res.data.data).map(a => {
                          return {
                              status: a.status,
                              ...(JSON.parse(a.data))
                          }
                      }))
        
         console.log(res.data.data)
        
      })
     
      .catch((err) => {
        console.log(err);
       
      });
  };
  React.useEffect(function () {
 
    getData();
    
  }, []);

  const Approve=(email)=>{
    axios
    .post("https://pakdoctorsksa.com/api/Users/ApproveRequest",{email})
    toast.success('Successfully Approved',{position: toast.POSITION.TOP_RIGHT,autoClose: 2000  })
    // window.location.reload(4000)
    console.log("request approved")
  }

  return (
    <AuthCheck>
    {/* <div>AllUsers</div> */}
   



<table class="w-full  text-xs  text-gray-500 dark:text-blue-400 table-auto ">
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
                yearOfEntry
                </th>
                <th scope="col" class="py-3 px-2 border">
                Hospital Post
                </th>
                
                <th scope="col" class="py-3 px-2 border">
                   Working Place
                </th>
                <th scope="col" class="py-3 px-2 border">
                SCFHSpost
                </th>
               
                <th scope="col" class="py-3 px-2 border">
                HosNameCity
                </th>
                <th scope="col" class="py-3 px-2 border">
               Mobile
                </th>
                <th scope="col" class="py-3 -px-2 border">
               qualifications
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
                SCFHSresponse
                </th>
                <th scope="col" class="py-3 px-2 border">
                residencyDuration
                </th>
                
                <th scope="col" class="py-3 px-2 border">
                Approve
                </th>
            </tr>
        </thead>
        <tbody className='text-xs bg-red-900' >
               
        {products.map?.((user,index) => (
            <>
          
                       {console.log(user.qualification[0+1])}
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
                      <td className="py-4 px-2 border">{user.qualification}</td>
               

                     
                      <td className="py-4 px-2 border">{user.yoapgd}</td>
                      <td className="py-4 px-2 border ">{user.speciality}</td>
                      <td className="py-4 px-2 border">{user.transScript}</td>
                      <td className="py-4 px-2 border">{user.SCFHSresponse}</td>
                      <td className="py-4 px-2 border">{user.residencyDuration}</td>
                      {user.status==1?(
                        <button  onClick={
                          ()=>{

                            Approve(user.email)
                            setTimeout(function(){
                              window.location.reload();
                           }, 2000);
                          }

                            }
                          
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
                      Approve
                      </button>
                                )  :(
                                  <div  class="font-serif font-bold mt-5 text-blue-800">Approved</div>
                                )}  
                      </tr>
                      
            </>
          ))}
            
  
        </tbody>
      

    

        <tbody className='showtable w-20'>
        
        </tbody>
    </table>










         
    </AuthCheck>
  )
}

export default AllUsers