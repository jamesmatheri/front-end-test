import React from 'react'
import Button from '../componets/button'
import styles from './logincomponent.module.css'


const logincomponent = () => {
  return (
    <>
    <div style={{width:"100%",height:"100%", display:"flex",flexDirection:"column",  placeItems:"center"}}>

     <div style={{marginTop:"210px"}}>
         <h1 style={{width:"100%", height:"56px",display:"grid", placeItems:"center"}}>Create an account</h1>
        <form action="">
             <div className={styles.inputs}>
               <label htmlFor="username">
                User Name:
                 <input type="text" id='name' placeholder='Type preferred User Name'/>
               </label>
            </div>
               <div  className={styles.inputs}>
               <label htmlFor="mail">
                Email:
                 <span style={{color:"red"}}><strong>*</strong></span>
                 <input type="text" id='mail' placeholder='Enter Email' required/>
               </label>
            </div>
               <div  className={styles.inputs}>
               <label htmlFor="password">
                  Password:
                <span style={{color:"red"}}><strong>*</strong></span>
                 <input type="password" id='password' placeholder='Password'/>
               </label>
            </div>
            <div style={{width:"100%", height: "38px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
              
             <button style={{background:"#00b4d8",width:"30%", border:"none", borderRadius:"5px",color:"black"}}>Register</button>
            </div>
          

        </form>
          <div style={{margin:"30px",width:"100%", height:"56px",display:"grid", placeItems:"center"}}>
               <p>Already have an account? <span style={{color:"#00b4d8"}}><strong><a>Login</a></strong></span></p>
            </div>
     </div>

    </div>
    </>
  )
}

export default logincomponent