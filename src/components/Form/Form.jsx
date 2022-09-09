import React,{useReducer,useCallback,useState, useEffect, useRef} from 'react'
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
// import FilePicker from '../FilePicker/FilePicker';
import FormHeader from '../FormHeader/FormHeader';
import FormSubContainer from '../FormSubContainer/FormSubContainer';
import Input from '../Input/Input';
import RadioButton from '../RadioButton/RadioButton';
import Select from '../Select/Select';
import bcrypt from 'bcryptjs'
import "./Form.css";
import axios from 'axios'
const salt = bcrypt.genSaltSync(10)


const reducerFunction=(state,action)=>{
	if(action.subName)
         return {...state,[action.name]:{...state[action.name],[action.subName]:action.value}}
    return{...state,[action.name]:action.value}
}

const initialValue={
    username:'', // input type text
    email:'', // input type e-mail
    qualification:'', //drop down select
    dateOfBirth:'', // input type date
    maritalStatus:'', //radio button
    age:'', // input type number
    hospitalname:"",
    entryksa:"",
    password:"",
    SCFHS:"",
    laptopOwnStatus:'', // radio button
    preferredFavouriteTravel:{
        FCPS:false,
        MCPS:false,
        "Fellowship fromRoyal College of UK":true,
        "Fellowship from Royal College of Ireland":false,
        "Membership from Royal College of UK":false,
        "Membership from Royal College of Ireland":false,
        "Arab Board":false,
        "Saudi Board":false,
        "American Board Certification":false,
        "European diploma":false,
        "FCPS Part-1 (part 2 not yer finished)":false,
        "Other":false,
        
    },
    speciality:{
        ANAESTHESIOLOGY:true,
        "CARDIAC SURGERY":true,
        CARDIOLOGY:true,
        "CHEMICAL PATHOLOGY":true,
        "CLINICAL HAEMATOLOGY":false,
        "COMMUNITY MEDICINE":false,
        "Arab DERMATOLOGY":false,
        "DIAGNOSTIC RADIOLOGY":false,
        "EMERGENCY MEDICINE":false,
        "FAMILY MEDICINE":false,
        "FORENSIC MEDICINE":false,
        "GASTROENTEROLOGY":false,
        "GENERAL SURGERY":false,
        "HAEMATOLOGY":false,
        "HISTOPATHOLOGY":false,
        "INTERNAL MEDICINE":false,
        "MEDICINE":false,
        "MICROBIOLOGY":false,
        "Madical ONCOLOGY":false,
        "NEPHROLOGY":false,
        "NEUROLOGY":false,
        "NUCLEAR MEDICINE":false,
        "OBSTETRICS & GYNAECOLOGY":false,
        "Operative DENTISRY":false,
        "OPTHALMOLOGY":false,
        "ORAL & MANILLO- FACIAL SURGERY":false,
        "ORTHODONTICS":false,
        "ORTHOPAEDIC Surgery":false,
        "OTO- RHINO- LOGY ENT)":false,
        "PAEDIATRIC SURGERY":false,
        "PAEDIATRICS":false,
    }
    // preferredFavouriteTravel:{MCPS:true,"hi you":true}
    // checkbox
    // userImage:'' // file picker for img 
}

const initialValueValidation={
    username:false, // input type text
    email:false, // input type e-mail
    qualification:false, //drop down select
    dateOfBirth:false, // input type date
    maritalStatus:false, //radio button
    age:false, // input type number
    hospitalname:false,
    entryksa:false,
    SCFHS:false,
    password:false,

    laptopOwnStatus:false, // radio button
    preferredFavouriteTravel:{
        FCPS:false,
        MCPS:false,
        "Fellowship fromRoyal College of UK":true,
        "Fellowship from Royal College of Ireland":false,
        "Membership from Royal College of UK":false,
        "Membership from Royal College of Ireland":false,
        "Arab Board":false,
        "Saudi Board":false,
        "American Board Certification":false,
        "European diploma":false,
        "FCPS Part-1 (part 2 not yer finished)":false,
        "Other":false,
        
    },
    speciality:{
        ANAESTHESIOLOGY:true,
        "CARDIAC SURGERY":true,
        CARDIOLOGY:true,
        "CHEMICAL PATHOLOGY":true,
        "CLINICAL HAEMATOLOGY":false,
        "COMMUNITY MEDICINE":false,
        "Arab DERMATOLOGY":false,
        "DIAGNOSTIC RADIOLOGY":false,
        "EMERGENCY MEDICINE":false,
        "FAMILY MEDICINE":false,
        "FORENSIC MEDICINE":false,
        "GASTROENTEROLOGY":false,
        "GENERAL SURGERY":false,
        "HAEMATOLOGY":false,
        "HISTOPATHOLOGY":false,
        "INTERNAL MEDICINE":false,
        "MEDICINE":false,
        "MICROBIOLOGY":false,
        "Madical ONCOLOGY":false,
        "NEPHROLOGY":false,
        "NEUROLOGY":false,
        "NUCLEAR MEDICINE":false,
        "OBSTETRICS & GYNAECOLOGY":false,
        "Operative DENTISRY":false,
        "OPTHALMOLOGY":false,
        "ORAL & MANILLO- FACIAL SURGERY":false,
        "ORTHODONTICS":false,
        "ORTHOPAEDIC Surgery":false,
        "OTO- RHINO- LOGY ENT)":false,
        "PAEDIATRIC SURGERY":false,
        "PAEDIATRICS":false,
    }
    // preferredFavouriteTravel:{MCPS:true,"hi you":true}
    // checkbox
    // userImage:false // file picker for img 
}


const reducerFunctionValidation=(state,action)=>{
	if(action.subName)
         return {...state,[action.name]:{...state[action.name],[action.subName]:action.value}}
    return{...state,[action.name]:action.value}
}



function Form(){

    const selectOptions=['B.E','M.E','BSC','B.TECH','M.TECH','B.COM','OTHER'];

    const [formData,dispatchFunction]=useReducer(reducerFunction,initialValue);


    
    // validation support state
    const [invalidObject,setInvalidObject]=useReducer(reducerFunctionValidation,initialValueValidation);
    const [initialValueObject,setInitialValueObject]=useReducer(reducerFunctionValidation,initialValueValidation);
    const refObject=useRef({});

   
    const {username,email,dateOfBirth,maritalStatus,age,hospitalname ,laptopOwnStatus,preferredFavouriteTravel,entryksa ,speciality, SCFHS,password,
         hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') ,
    
    
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
        dispatchFunction({'name':'preferredFavouriteTravel','subName':event.target.name,value:!preferredFavouriteTravel[event.target.name]})
    },[preferredFavouriteTravel]);
    const updatespecialityBox=useCallback((event)=>{
        dispatchFunction({'name':'speciality','subName':event.target.name,value:!speciality[event.target.name]})
    },[speciality]);
   
    const clearFormFunction=()=>{
        for (const [key, value] of Object.entries(initialValue)) 
        {
            if(key==='preferredFavouriteTravel')
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

        // setUserImageUrl('');

    }

    const submitHandler=(event)=>{
		event.preventDefault();
        // password= bcrypt.hashSync(password,10)
        console.log(formData);
        clearFormFunction();
        axios
        // .post("http://localhost:5000/api/user/register", {
        .post("https://pakdoctorsksa.com/api/Users/SignUp", {
          username:username,
          email:email,
          password:hashedPassword,
        })
        .then((resp) => console.log(resp))
        // .then(navigate("/login"))
        .catch((err) => console.log(err));

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

            <FormHeader title='Contact Details Form'/>

            <FormSubContainer title="Name"  isRequired={true} invalid={invalidObject['name']}>
                <Input
                placeholder='your name please'
                type='text'
                name='username'
                value={username}
                inputFocusEvent={inputFocusEvent}
                inputRef={ref=> refObject.current['name'] = ref}
                onChange={updateFormData}
                />
            </FormSubContainer>


            <FormSubContainer title="Gender" isRequired={true} invalid={false}>
                <RadioButton
                    title="Male"
                    value="hiii"
                    name="laptopOwnStatus"
                    checked={laptopOwnStatus}
                    onChange={updateFormData}
                />
                <RadioButton
                    title="female"
                    value="no"
                    checked={laptopOwnStatus}
                    name="laptopOwnStatus"
                    onChange={updateFormData}
                />
            </FormSubContainer>

            <FormSubContainer title="QUALIFICATIONS"  isRequired={true} invalid={false}>
                {
                    Object.keys(preferredFavouriteTravel).map((key,index)=>
                        <CheckBox
                            key={index}
                            title={key}
                            checked={preferredFavouriteTravel[key]}
                            name={key}
                            value={key}
                            onChange={updateCheckBox}
                            />
                    )
                }
            </FormSubContainer>


            <FormSubContainer title="SPECIALITY"  isRequired={true} invalid={false}>
                {
                    Object.keys(speciality).map((key,index)=>
                        <CheckBox
                            key={index}
                            title={key}
                            checked={speciality[key]}
                            name={key}
                            value={key}
                            onChange={updatespecialityBox}
                            />
                    )
                }
            </FormSubContainer>

            <FormSubContainer title="YEARS OF ALL POST GRADUATION"
      
 isRequired={true} invalid={invalidObject['age']}>
                <Input
                placeholder='Your Answer'
                type='number'
                name='age'
                value={age}
                inputFocusEvent={inputFocusEvent}
                inputRef={ref=> refObject.current['age'] = ref}
                onChange={updateFormData}
                />
            </FormSubContainer>

            <FormSubContainer title="Working Place (City/ Region) " isRequired={true} invalid={invalidObject['qualification']}>
                <Select
                selectOptions={selectOptions}
                name="qualification"
                onChange={updateFormData}
                selectRef={ref=> refObject.current['qualification'] = ref}
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
                     name='hospitalname'
                     value={hospitalname}
                     inputFocusEvent={inputFocusEvent}
                    //  inputRef={ref=> refObject.current['hospital'] = ref}
                     onChange={updateFormData}
                     />
                 </FormSubContainer>

                           
            <FormSubContainer title="YEAR of Entry in KSA."
              isRequired={true} invalid={invalidObject['age']}>
                     <Input
                     placeholder='Your Answer'
                     type='text'
                     name='entryksa'
                     value={entryksa}
                     inputFocusEvent={inputFocusEvent}
                    //  inputRef={ref=> refObject.current['ksa'] = ref}
                     onChange={updateFormData}
                     />
                 </FormSubContainer>
             
                 <FormSubContainer title="POST IN HOSPITAL" isRequired={true} invalid={false}>
                <RadioButton
                    title="ConsultanProfessor"
                    value="ConsultanProfessor"
                    name="maritalStatus"
                    checked={maritalStatus}
                    onChange={updateFormData}
                />
                <RadioButton
                    title="Senior Rgistrar / Associate Consultant! A P"
                    value="Senior Rgistrar / Associate Consultant! A P"
                    checked={maritalStatus}
                    name="maritalStatus"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Rgistrar / Assisstant Consultant / Specialist"
                    value="Rgistrar / Assisstant Consultant / Specialist"
                    checked={maritalStatus}
                    name="maritalStatus"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Resident"
                    value="Resident"
                    checked={maritalStatus}
                    name="maritalStatus"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="House Physician / General Practitioner"
                    value="House Physician / General Practitioner"
                    checked={maritalStatus}
                    name="maritalStatus"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Other:"
                    value="Other:"
                    checked={maritalStatus}
                    name="maritalStatus"
                    onChange={updateFormData}
                />
            </FormSubContainer>




           
             
                 <FormSubContainer title="POST IN SCFHS" isRequired={true} invalid={false}>
                <RadioButton
                    title="Consultant"
                    value="Consultant"
                    name="SCFHS"
                    checked={SCFHS}
                    onChange={updateFormData}
                />
                <RadioButton
                    title="Senior Registrar"
                    value="Senior Registrar"
                    checked={SCFHS}
                    name="SCFHS"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Registrar"
                    value="Registrar"
                    checked={SCFHS}
                    name="SCFHS"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="General Practitioner"
                    value="General Practitioner"
                    checked={SCFHS}
                    name="SCFHS"
                    onChange={updateFormData}
                />
                 <RadioButton
                    title="Resident"
                    value="Resident"
                    checked={SCFHS}
                    name="SCFHS"
                    onChange={updateFormData}
                />
               
            </FormSubContainer>
             
            <FormSubContainer title="E-mail Id"  isRequired={true} invalid={invalidObject['email']}>
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

            <FormSubContainer title="Mobile Number Saudi Local Contact 05......."  isRequired={true} invalid={invalidObject['dateOfBirth']}>
                <Input
                placeholder='Your Answer'
                type='number'
                name='dateOfBirth'
                value={dateOfBirth}
                inputFocusEvent={inputFocusEvent}
                // inputRef={ref=> refObject.current['dateOfBirth'] = ref}
                onChange={updateFormData}
                />
            </FormSubContainer>

          



           

          
          
          
            <div className='form-submit-container'>
                <Button type="button" classProp="clear-button" clickHandler={clearFormFunction}>
                    Clear Form
                </Button>
                <Button type="submit" disabled={
                   !( username!=='' && email!=='' && dateOfBirth!=='' && maritalStatus!=='' && age!=='' && laptopOwnStatus!=='' )
                } classProp="button">
                    Submit
                </Button>
            </div>
        </form>
    )
}

export default React.memo(Form)