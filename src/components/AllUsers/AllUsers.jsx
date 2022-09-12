import React from 'react'
import AuthCheck from '../AuthCheck/AuthCheck'
import  { useState } from 'react';
import axios from "axios";

const AllUsers = () => {
  const [products, setProducts] = React.useState([]);
  const getData = () => {
    axios
      .get("https://pakdoctorsksa.com/api/Users/GetAllDoctors")
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);

      })
     
      .catch((err) => {
        console.log(err);
        // setHasError(true);
      });
  };
  React.useEffect(function () {
    // console.log("Sending Ajax call");
    getData();
    
  }, []);

  const Approve=(email)=>{
    axios
    .post("https://pakdoctorsksa.com/api/Users/ApproveRequest",{email})
    console.log("request approved")
  }
  return (
    <AuthCheck>
    <div>AllUsers</div>
    {products.map?.((user) => (
      <tr>
         <td className="py-4 px-6">{user.email}</td>
         <td className="py-4 px-6">{user.data}</td>
         <td className="py-4 px-6">
          

          {user.status==1?(
  <button onClick={
    ()=>{
      Approve(user.email)
      console.log(user.email);
      // window.location.reload();
      console.log(user.status)
    }
    }
     class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Approve
</button>
          )  :(
            <div></div>
          )}
        

</td>

        
         </tr>
        ))}
    </AuthCheck>
  )
}

export default AllUsers