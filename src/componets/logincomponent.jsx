
import { validatePipeline } from '../scripts/validation'
import styles from './logincomponent.module.css'
import { useAuth } from './use-auth';
import { useState } from 'react';



const LoginComponent = () => {

 const [formData, setFormData] = useState({mail: "",password: ""});
 const [errors,setErrors] = useState([])
 const [formError, setFormError] = useState()



const auth = useAuth();
 async function handleSubmit(event) {
     event.preventDefault()

     await auth.loginAction(formData)

  
 
}




// async function handleSubmit(event) {

//    event.preventDefault();   
//     try {
//         const response = await fetch('http://localhost:3000/auth/login', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result = await response.json()
//         console.log("Success:", result);
//         // Handle successful response here (e.g., redirect, show message)
        
//     } catch (err) {
//         new Error("Error:", err);
//         // Handle error (show error message to user)
//     }
// }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const rules = [
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
  },
];


const  applyValidationRules = (input) => {
  let validationResult =  validatePipeline(input,rules);

 
   setErrors(validationResult.errors)
 
}
 



  return (
    <>
    <div style={{width:"100%",height:"100%", display:"flex",flexDirection:"column",  placeItems:"center"}}>

     <div style={{marginTop:"210px"}}>
         <h1 style={{width:"100%", height:"56px",display:"grid", placeItems:"center"}}>Login</h1>
        <form >
         
               <div  className={styles.inputs}>
               <label htmlFor="mail">
                Email:
               
                 <input type="text" id='mail' name="mail" value = {formData.mail} placeholder='Enter Email' onChange={handleChange} onBlur={() =>  applyValidationRules(formData.mail) } required/>
                <div style={{display:"flex", flexDirection:"column"}}>

                  { errors? (
                    errors.map(( error,index )=> (
                       <span key= {index} style={{color:"red"}}>{error}</span>
                    ))
                     
                  ):null} 
                </div>
               </label>
            </div>
               <div  className={styles.inputs}>
               <label htmlFor="password">
                  Password:
             
                 <input type="password" id='password' name= "password" value= {formData.password} onChange={handleChange} placeholder='Password'/>
               </label>
            </div>
            <div style={{width:"100%", height: "38px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
              
             <button onClick={handleSubmit} style={{background:"#00b4d8",width:"30%", border:"none", borderRadius:"5px",color:"black"}}>Login</button>
            </div>
              <div  style={{width:"100%", height: "38px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
    { formError? (
                       <span style={{color:"red"}}>{formError}</span>                  
                     
                  ):null} 
      
  </div>
          

        </form>

         
     </div>

    </div>
    </>
  )
}

export default LoginComponent