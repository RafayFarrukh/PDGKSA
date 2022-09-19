import React,{useReducer,useCallback,useState, useEffect, useRef} from 'react'
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import FormSubContainer from '../FormSubContainer/FormSubContainer';
import Input from '../Input/Input';
import RadioButton from '../RadioButton/RadioButton';
import M from 'materialize-css'
import Select from '../Select/Select';
import bcrypt from 'bcryptjs'
import "./Form.css";
import { ToastContainer,toast } from 'react-toastify'

import { FormControlLabel, Checkbox} from '@mui/material';
import axios from 'axios'
const salt = bcrypt.genSaltSync(10)

const reducerFunction=(state,action)=>{
	if(action.subName)
         return {...state,[action.name]:{...state[action.name],[action.subName]:action.value}}
    return{...state,[action.name]:action.value}
 

}




const initialValue={
    name:'', // input type text
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
    }
    // qualification:{MCPS:true,"hi you":true}
    // checkbox
    // userImresidencyDuration:'' // file picker for img 
}

const initialValueValidation={
    name:false, // input type text
    email:false, // input type e-mail
    qualification:false, //drop down select
    mobile:false, // input type date
    hospitalPost:false, //radio button
    residencyDuration:false, // input type number
    workingPlace:false,
    yearOfEntry:false,
    yoapgd:false,
    SCFHSpost:false,
    password:false,
    transScript:false,

    SCFHSresponse:false,

    residencyDuration:false,
    gender:false, // radio button
    qualification :false
    // qualification:{
    //     FCPS:false,
    //     MCPS:false,
    //     "Fellowship fromRoyal College of UK":true,
    //     "Fellowship from Royal College of Ireland":false,
    //     "Membership from Royal College of UK":false,
    //     "Membership from Royal College of Ireland":false,
    //     "Arab Board":false,
    //     "Saudi Board":false,
    //     "American Board Certification":false,
    //     "European diploma":false,
    //     "FCPS Part-1 (part 2 not yer finished)":false,
    //     "Other":false,
        
    // },
    // speciality:{
    //     ANAESTHESIOLOGY:false,
    //     "CARDIAC SURGERY":false,
    //     CARDIOLOGY:false,
    //     "CHEMICAL PATHOLOGY":false,
    //     "CLINICAL HAEMATOLOGY":false,
    //     "COMMUNITY MEDICINE":false,
    //     "Arab DERMATOLOGY":false,
    //     "DIAGNOSTIC RADIOLOGY":false,
    //     "EMERGENCY MEDICINE":false,
    //     "FAMILY MEDICINE":false,
    //     "FORENSIC MEDICINE":false,
    //     "GASTROENTEROLOGY":false,
    //     "GENERAL SURGERY":false,
    //     "HAEMATOLOGY":false,
    //     "HISTOPATHOLOGY":false,
    //     "INTERNAL MEDICINE":false,
    //     "MEDICINE":false,
    //     "MICROBIOLOGY":false,
    //     "Madical ONCOLOGY":false,
    //     "NEPHROLOGY":false,
    //     "NEUROLOGY":false,
    //     "NUCLEAR MEDICINE":false,
    //     "OBSTETRICS & GYNAECOLOGY":false,
    //     "Operative DENTISRY":false,
    //     "OPTHALMOLOGY":false,
    //     "ORAL & MANILLO- FACIAL SURGERY":false,
    //     "ORTHODONTICS":false,
    //     "ORTHOPAEDIC Surgery":false,
    //     "OTO- RHINO- LOGY ENT)":false,
    //     "PAEDIATRIC SURGERY":false,
    //     "PAEDIATRICS":false,
    // }
    // qualification:{MCPS:true,"hi you":true}
    // checkbox
    // userImresidencyDuration:false // file picker for img 
}


const reducerFunctionValidation=(state,action)=>{
	if(action.subName)
         return {...state,[action.name]:{...state[action.name],[action.subName]:action.value}}
    return{...state,[action.name]:action.value}
}



function Form(){

    const selectOptions=['Green Acre','Lahore','Karachi','Islamabaad','Multan','Naran','Peshawar'];
  

    const [formData,dispatchFunction]=useReducer(reducerFunction,initialValue);


    
    // validation support state
    const [invalidObject,setInvalidObject]=useReducer(reducerFunctionValidation,initialValueValidation);
    const [initialValueObject,setInitialValueObject]=useReducer(reducerFunctionValidation,initialValueValidation);
    const refObject=useRef({});

   
    const {name,email,mobile,hospitalPost,residencyDuration,transScript,workingPlace,yoapgd ,SCFHSresponse,gender,qualification,yearOfEntry ,speciality, SCFHSpost,password,
         hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 
    
    
    } = formData;


  
    const updateFormData=useCallback((event)=>{
        // console.log(event.target.name+" "+event.target.value)
        if(event.target.value==='')
            setInvalidObject({name:event.target.name,value:true});
        else
            setInvalidObject({name:event.target.name,value:false});
		dispatchFunction({'name':event.target.name,'value':event.target.value});
	},[])

    const updateCheckBox=useCallback((event)=>{
       
	
        dispatchFunction({'name':'qualification','subName':event.target.value,value:!qualification[event.target.name]})
        
     
        

    },[qualification]);
    const updatespecialityBox=useCallback((event)=>{
        dispatchFunction({'name':'speciality','subName':event.target.name,value:!speciality[event.target.name]})
    },[speciality]);
   
    const clearFormFunction=()=>{
        for (const [key, value] of Object.entries(initialValue)) 
        {
            if(key==='qualification')
            {
                for(let secondKey in value)
                {
                    dispatchFunction({'name':key,subName:secondKey,value:value[secondKey]});
                    setInitialValueObject({'name':key,subName:secondKey,value:initialValueValidation[key][secondKey]});
                }
                setInvalidObject({name:key,})
            }
            else{
                dispatchFunction({'name':key,'value':value})
                setInvalidObject({name:key,value:initialValueValidation[value]});
            }
        }


    }

    const submitHandler=(event)=>{
		event.preventDefault();
        // password= bcrypt.hashSync(password,10)
        clearFormFunction();
      
        // console.log("original", JSON.stringify(formData));

        // window.location.reload()

        formData.qualification =  Object.keys(formData.qualification).filter(z => formData.qualification[z] == true) 
        formData.speciality =  Object.keys(formData.speciality).filter(z => formData.speciality[z] == true) 

        // console.log( formData);
        // console.log( formData.qualification.join());
        // console.log(formData.selectOptions);

        axios
        .post("https://pakdoctorsksa.com/api/Users/SignUp", {
          name:name,
          email:email,
          password:hashedPassword,
          mobile:mobile,
          hospitalPost:hospitalPost,
          residencyDuration:residencyDuration,
          workingPlace:workingPlace,
          HosNameCity:formData.selectOptions,
          gender:gender,
          transScript:transScript,
          qualification: formData.qualification.join(),
          yearOfEntry:yearOfEntry,
          yoapgd:yoapgd,
          SCFHSresponse:SCFHSresponse,
          speciality: formData.speciality.join(),
          SCFHSpost:SCFHSpost
        },formData)
        
      

       
        .then( (resp)=>{
         
            console.log(resp.data.success)

           
            if(resp.data.success==true){

                toast.success('Successfully  SignedUp',{position: toast.POSITION.TOP_RIGHT,autoClose: 1500})
            }
            else if(resp.data.success==false){
                toast.error('A user with this email already exists',{position: toast.POSITION.TOP_RIGHT ,autoClose: 1500})

            }
               setTimeout(function(){
                window.location.reload();
             }, 1500);
                
         
            
            
            
        })
        
       
        

        
      
        .catch((err) => {
          
            
          
            // setTimeout(function(){
            //     window.location.reload();
            //  }, 2000);
         
         
         });

    }
    
    

    const handleMouseEvent=useCallback((event)=>{
        for(let key in refObject.current)
            if(!refObject.current[key].contains(event.target) && initialValueObject[key] && formData[key]==='')
            {
                setInvalidObject({name:key,value:true});
            }
    },[formData,initialValueObject,refObject]);

    const inputFocusEvent=(name)=>{
        if(!initialValueObject[name])
        {
            setInitialValueObject({name:name,value:true});
        }
    }

 
    useEffect(()=>{
        window.addEventListener('mouseup',handleMouseEvent);
        return ()=> window.removeEventListener('mouseup',handleMouseEvent);
    },[handleMouseEvent])
    
   
      
    return(
        <form className='form-container' onSubmit={submitHandler}>


            <FormSubContainer title="Name"  isRequired={true} >
                <Input
                placeholder='your name please'
                type='text'
                name='name'
                value={name}
                inputFocusEvent={inputFocusEvent}
                inputRef={ref=> refObject.current['name'] = ref}
                onChange={updateFormData}
                />
            </FormSubContainer>


            <FormSubContainer title="Gender" class="form-radio mt-10" isRequired={true} >
                <RadioButton
                    title="Male"
                    value="Male"
                    name="gender"
                    checked={gender}
                    onChange={updateFormData}
                />
                <RadioButton
                    title="female"
                    value="Female"
                    checked={gender}
                    name="gender"
                    onChange={updateFormData}
                />
            </FormSubContainer>

            <FormSubContainer title="QUALIFICATIONS"  isRequired={true} >
                
         
            {         
                           

                    Object.keys(qualification).map((key,index)=>
                        <CheckBox
                            key={index}
                            title={key}
                            checked={qualification[key]==true}
                            name={key}
                            value={key}
                            onChange={updateCheckBox}
                            />
                    )
                            
                }


                                   
                                
                                     
                
            </FormSubContainer>


        <FormSubContainer title="Speciality">
        {         
                           

                           Object.keys(speciality).map((key,index)=>
                               <CheckBox
                                   key={index}
                                   title={key}
                                   checked={speciality[key]==true}
                                   name={key}
                                   value={key}
                                   onChange={updatespecialityBox}
                                   />
                           )
                                   
                       }
        </FormSubContainer>

            <FormSubContainer title="YEARS OF ALL POST GRADUATION"
      
 isRequired={true} invalid={invalidObject['yoapgd']}>
                <Input
                placeholder='Your Answer'
                type='text'
                name='yoapgd'
                value={yoapgd}
                inputFocusEvent={inputFocusEvent}
                inputRef={ref=> refObject.current['yoapgd'] = ref}
                onChange={updateFormData}
                />
            </FormSubContainer>

            <FormSubContainer title="Working Place (City/ Region) " isRequired={true} >
                <Select
                selectOptions={selectOptions}
                name="selectOptions"
                onChange={updateFormData}
                // selectRef={ref=> refObject.current['qualification'] = ref}
                />
            </FormSubContainer>
                  
            <FormSubContainer title="WORKING PLACE HOSPITAL NAME WITH CITY

"
      
      isRequired={true}
    //    invalid={invalidObject['name']}
       >
                     <Input
                     placeholder='Your Answer'
                     type='text'
                     name='workingPlace'
                     value={workingPlace}
                     inputFocusEvent={inputFocusEvent}
                    //  inputRef={ref=> refObject.current['hospital'] = ref}
                     onChange={updateFormData}
                     />
                 </FormSubContainer>

                           
       
             
                 <FormSubContainer title="POST IN HOSPITAL" isRequired={true} invalid={false}>
                <RadioButton
                    title="ConsultanProfessor"
                    value="ConsultanProfessor"
                    name="hospitalPost"
                    checked={hospitalPost}
                    onChange={updateFormData}
                />
                <RadioButton
                    title="Senior Rgistrar / Associate Consultant! A P"
                    value="Senior Rgistrar / Associate Consultant! A P"
                    checked={hospitalPost}
                    name="hospitalPost"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Rgistrar / Assisstant Consultant / Specialist"
                    value="Rgistrar / Assisstant Consultant / Specialist"
                    checked={hospitalPost}
                    name="hospitalPost"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Resident"
                    value="Resident"
                    checked={hospitalPost}
                    name="hospitalPost"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="House Physician / General Practitioner"
                    value="House Physician / General Practitioner"
                    checked={hospitalPost}
                    name="hospitalPost"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Other:"
                    value="Other:"
                    checked={hospitalPost}
                    name="hospitalPost"
                    onChange={updateFormData}
                />
            </FormSubContainer>



            <FormSubContainer title="YEAR of Entry in KSA."
              isRequired={true} >
                     <Input
                     placeholder='Your Answer'
                     type='text'
                     name='yearOfEntry'
                     value={yearOfEntry}
                     inputFocusEvent={inputFocusEvent}
                    //  inputRef={ref=> refObject.current['ksa'] = ref}
                     onChange={updateFormData}
                     />
                 </FormSubContainer>
             
                 <FormSubContainer title="Residency Duration" isRequired={true} invalid={false}>
                <RadioButton
                    title="Three Years"
                    value="Three Years"
                    name="residencyDuration"
                    checked={residencyDuration}
                    onChange={updateFormData}
                />
                <RadioButton
                    title="Four Years"
                    value="Four Years"
                    checked={residencyDuration}
                    name="residencyDuration"

                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Five Years"
                    value="Five Years"
                    checked={residencyDuration}
                    name="residencyDuration"

                    onChange={updateFormData}
                />
                
            </FormSubContainer>

                    
        
             
                 <FormSubContainer title="What was the response of SCFHS about your application for Re Classification ? " isRequired={true} invalid={false}>
                <RadioButton
                    title="Not applied"
                    value="Not applied"
                    name="SCFHSresponse"
                    checked={SCFHSresponse}
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Rejected"
                    value="Rejected"
                    name="SCFHSresponse"
                    checked={SCFHSresponse}
                    onChange={updateFormData}
                />
               <RadioButton
                    title="No Reply"
                    value="No Reply"
                    name="SCFHSresponse"
                    checked={SCFHSresponse}
                    onChange={updateFormData}
                />
                  <RadioButton
                    title="Accepted"
                    value="Accepted"
                    name="SCFHSresponse"
                    checked={SCFHSresponse}
                    onChange={updateFormData}
                />
                
            </FormSubContainer>



            <FormSubContainer title="Do you have  Transcript from CPSP ?" isRequired={true} invalid={false}>
                <RadioButton
                    title="Yes"
                    value="Yes"
                    name="transScript"
                    checked={transScript}
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="No"
                    value="No"
                    name="transScript"
                    checked={transScript}
                    onChange={updateFormData}
                />
              
                
            </FormSubContainer>


               
           
             
                 <FormSubContainer title="POST IN SCFHSpost" isRequired={true} invalid={false}>
                <RadioButton
                    title="Consultant"
                    value="Consultant"
                    name="SCFHSpost"
                    checked={SCFHSpost}
                    onChange={updateFormData}
                />
                <RadioButton
                    title="Senior Registrar"
                    value="Senior Registrar"
                    checked={SCFHSpost}
                    name="SCFHSpost"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Registrar"
                    value="Registrar"
                    checked={SCFHSpost}
                    name="SCFHSpost"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="General Practitioner"
                    value="General Practitioner"
                    checked={SCFHSpost}
                    name="SCFHSpost"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Resident"
                    value="Resident"
                    checked={SCFHSpost}
                    name="SCFHSpost"
                    onChange={updateFormData}
                />
               
            </FormSubContainer>
             
            <FormSubContainer title="E-mail Id"  isRequired={true} >
                <Input
                placeholder='your email-id please'
                type='email'
                name='email'
                value={email}
                inputFocusEvent={inputFocusEvent}
                inputRef={ref=> refObject.current['email'] = ref}
                onChange={updateFormData}
                />
            </FormSubContainer>

            <FormSubContainer title="Password"  isRequired={true} >
                <Input
                placeholder='Enter Password'
                type='password'
                name='password'
                value={password}
                inputFocusEvent={inputFocusEvent}
                // inputRef={ref=> refObject.current['email'] = ref}
                onChange={updateFormData}
                />
            </FormSubContainer>

            <FormSubContainer title="Mobile Number Saudi Local Contact 05......."  isRequired={true} >
                <Input
                placeholder='Your Answer'
                type='number'
                name='mobile'
                value={mobile}
                inputFocusEvent={inputFocusEvent}
                // inputRef={ref=> refObject.current['mobile'] = ref}
                onChange={updateFormData}
                />
            </FormSubContainer>

          



           

          
          
          
            <div className='form-submit-container'>
                <Button type="button" classProp="clear-button" clickHandler={clearFormFunction}>
                    Clear Form
                </Button>
                <Button type="submit"  classProp="button"  disabled={
                   !( name!=='' && email!=='' && mobile!=='' && hospitalPost!=='' && residencyDuration!=='' && gender!=='' && transScript!=='' && password!==''  && workingPlace!=='' && SCFHSresponse!=='' && speciality!=='' && password!=='' && SCFHSpost!=='' && yoapgd!=='')
                } >
                    Submit
                </Button>
            </div>
        </form>
    )
    //name,email,mobile,hospitalPost,residencyDuration,transScript,workingPlace,yoapgd ,SCFHSresponse,gender,qualification,yearOfEntry ,speciality, SCFHSpost,password
}

export default React.memo(Form)