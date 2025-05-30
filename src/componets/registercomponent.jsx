import React, { useState } from 'react'
import { validatePipeline } from '../scripts/validation'
import styles from './logincomponent.module.css'
import { Link } from 'react-router-dom';


const RegisterComponent = () => {


   const [formData, setFormData] = useState({username:"",mail: "",password: ""});
   const [mailErrors,setMailErrors] = useState([]);
   const [userNameErrors,setUserNameErrors] = useState([]);
   const [passwordErrors,setPasswordErrors] = useState([])

   const [formError, setFormError] = useState()

async function handleSubmit(event) {

   event.preventDefault();   
    try {
        const response = await fetch('https://back-end-test-n0ma.onrender.com/auth/register', {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        
           if(response.ok)  return window.location.href = "/login"
       
        
    } catch (err) {
        new Error("Error:", err);
      

    }
}
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  




    const mailRules = [
    {
      validate: (input) => typeof input === "string",
      message: "Input must be a string.",
    },
    {
      validate: (input) => input.length >= 5,
      message: "Input must be at least 5 characters long.",
    },
    {
      validate: (input) => /@/.test(input),
      message: "Input must be a valid email",
    }
  ];


   const rules = [
    {
      validate: (input) => typeof input === "string",
      message: "Input must be a string.",
    },
    {
      validate: (input) => input.length >= 5,
      message: "Input must be at least 5 characters long.",
    }
  ];
    const passwordRules = [
    {
      validate: (input) => typeof input === "string",
      message: "Input must be a string.",
    },
    {
      validate: (input) => input.length >= 5,
      message: "Input must be at least 5 characters long.",
    },
    {
      validate: (input) => /\d/.test(input),
      message: "password must include a number",
    }
  ];
  
  
  const  applyValidationRules = (event,input) => {
  

  
   if(event.target.name === "username"){
  
    setUserNameErrors ( validatePipeline(input,rules).errors)

   }else if(event.target.name === "mail"){

      setMailErrors(validatePipeline(input,mailRules).errors)

   }else if(event.target.name === "password"){
 
    setPasswordErrors(validatePipeline(input,passwordRules).errors)

    }
   
  
   
  }
  return (
    <>
    <div style={{width:"100%",height:"100%", display:"flex",flexDirection:"column",  placeItems:"center"}}>

     <div style={{marginTop:"210px"}}>
         <h1 style={{width:"100%", height:"56px",display:"grid", placeItems:"center"}}>Create an account</h1>
        <form action="">
             <div className={styles.inputs}>
               <label htmlFor="username">
                User Name:
                 <input type="text" id='username' name="username" placeholder='Type preferred User Name' value = {formData.username} onChange={handleChange} onBlur={(event) =>  applyValidationRules(event,formData.username) }/>
             <div style={{display:"flex", flexDirection:"column"}}>
                     { userNameErrors? (
                    userNameErrors.map(( error,index )=> (
                       <span key= {index} style={{color:"red"}}>{error}</span>
                    ))
                     
                  ):null} 
                  </div>
               </label>
            </div>
               <div  className={styles.inputs}>
               <label htmlFor="mail">
                Email:
                 <span style={{color:"red"}}><strong>*</strong></span>
                 <input type="text" id='mail' name="mail" placeholder='Enter Email' value = {formData.mail} onChange={handleChange} onBlur={(event) => applyValidationRules(event,formData.mail) } required/>
                  <div style={{display:"flex", flexDirection:"column"}}>
                    { mailErrors? (
                    mailErrors.map(( error,index )=> (
                       <span key= {index} style={{color:"red"}}>{error}</span>
                    ))
                     
                  ):null} 
                  </div>
               </label>
            </div>
               <div  className={styles.inputs}>
               <label htmlFor="password">
                  Password:
                <span style={{color:"red"}}><strong>*</strong></span>
                 <input type="password" id='password' name="password" placeholder='Password' value = {formData.password} onChange={handleChange} onBlur={(event) =>  applyValidationRules(event,formData.password) } />
               <div style={{display:"flex", flexDirection:"column"}}>
                     { passwordErrors? (
                    passwordErrors.map(( error,index )=> (
                       <span key= {index} style={{color:"red"}}>{error}</span>
                    ))
                     
                  ):null}
                  </div> 
               </label>
            </div>
            <div style={{width:"100%", height: "38px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
              
             <button style={{background:"#00b4d8",width:"30%", border:"none", borderRadius:"5px",color:"black"}} onClick={handleSubmit}>Register</button>
            </div>
                       <div  style={{width:"100%", height: "38px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
    { formError? (
                       <span style={{color:"red"}}>{formError}</span>                  
                     
                  ):null} 
      
  </div>
          

        </form>
          <div style={{margin:"30px",width:"100%", height:"56px",display:"grid", placeItems:"center"}}>

               <p>Already have an account? <span style={{color:"#00b4d8"}}><strong><Link to="/login" >Login</Link></strong></span></p>

            </div>
     </div>

    </div>
    </>
  )
}

export default RegisterComponent