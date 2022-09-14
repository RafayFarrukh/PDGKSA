import React from 'react'
import AuthCheck from '../AuthCheck/AuthCheck'
import axios from "axios";

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
    window.reload()
    console.log("request approved")
  }
  return (
    <AuthCheck>
    <div>AllUsers</div>
   



<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    UserName
                </th>
                <th scope="col" class="py-3 px-6">
                    Email
                </th>
                <th scope="col" class="py-3 px-6">
                   Gender
                </th>
                <th scope="col" class="py-3 px-6">
                yearOfEntry
                </th>
                <th scope="col" class="py-3 px-6">
                Hospital Post
                </th>
                
                <th scope="col" class="py-3 px-6">
                   Working Place
                </th>
                <th scope="col" class="py-3 px-6">
                SCFHSpost
                </th>
               
                <th scope="col" class="py-3 px-6">
                HosNameCity
                </th>
                <th scope="col" class="py-3 px-6">
               Mobile
                </th>
                <th scope="col" class="py-3 px-6">
                Approve
                </th>
            </tr>
        </thead>
        <tbody>
               
       
            
  
        </tbody>
      

      <tbody>
      </tbody>

        <tbody>
          {products.map?.((user,index) => (
            <>
          

                      <tr  key={index} > 
                                
                      <td className="py-4 px-6">{user.name}</td>

                      <td className="py-4 px-6">{user.email}</td>
                      <td className="py-4 px-6">{user.gender}</td>
                      <td className="py-4 px-6">{user.yearOfEntry}</td>
                      <td className="py-4 px-6">{user.hospitalPost}</td>
                      <td className="py-4 px-6">{user.workingPlace}</td>
                      <td className="py-4 px-6">{user.SCFHSpost}</td>
                      <td className="py-4 px-6">{user.HosNameCity}</td>
                      <td className="py-4 px-6">{user.mobile}</td>
                      {user.status==1?(
                        <button  onClick={
                          ()=>{
                            Approve(user.email)
                            console.log(user.email);
                            console.log(user.status)
                            window.location.reload()
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
    </table>










         
    </AuthCheck>
  )
}

export default AllUsers