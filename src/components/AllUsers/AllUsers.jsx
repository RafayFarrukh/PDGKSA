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
      



        for (let i = 0; i < 4; i++) {
          // var r =res.data.data[i].data
          var r =res.data.data[i].data
          var b=JSON.parse(r)
          //  setProducts(JSON.parse(r));
          // setProducts(res.data.data);
          // console.log(b);
          console.log(b)
          setProducts(b);
          setProducts(res.data.data);

        }
          // setProducts(res.data.data);
        
         
    
      
     

      })
     
      .catch((err) => {
        console.log(err);
        // setHasError(true);
      });
  };
  React.useEffect(function () {
 
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
    {/* {products.map?.((user) => (



          <tr>
         <td className="py-4 px-6">{user.email}</td>
         <td className="py-4 px-6">{user.data}</td>
         <td className="py-4 px-6">
          

          {user.status==1?(
                    <button onClick={
                      ()=>{
                        Approve(user.email)
                        console.log(user.email);
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
        ))} */}



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
                    qualification
                </th>
                <th scope="col" class="py-3 px-6">
                   speciality
                </th>
                <th scope="col" class="py-3 px-6">
                workingPlace
                </th>
                <th scope="col" class="py-3 px-6">
                yearOfEntry
                </th>
                <th scope="col" class="py-3 px-6">
                yearOfEntry
                </th>
                <th scope="col" class="py-3 px-6">
                yearOfEntry
                </th>
                <th scope="col" class="py-3 px-6">
                yearOfEntry
                </th>
                <th scope="col" class="py-3 px-6">
                Approve
                </th>
            </tr>
        </thead>
        <tbody>
        {
        products.map?.((user) => (
          <tr>
            {/* <td className="py-4 px-6">{user.data}</td> */}
            <td className="py-4 px-6">{user.email}</td>
            <td className="py-4 px-6">{user.password}</td>
            <td className="py-4 px-6">{user.name}</td>
       
            {user.status==1?(
                    <button onClick={
                      ()=>{
                        Approve(user.email)
                        console.log(user.email);
                        console.log(user.status)
                      }
                      }
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Approve
                  </button>
                            )  :(
                              <div></div>
                            )}      

       
            <td className='flex'>

         
            </td>
          </tr>
        ))}
       
       
      
        </tbody>
    </table>










         
    </AuthCheck>
  )
}

export default AllUsers