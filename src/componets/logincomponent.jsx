import React from 'react'
import Button from '../componets/button'
import styles from './logincomponent.module.css'


const logincomponent = () => {
  return (
    <>
    <div style={{width:"100%",height:"100%", display:"flex",flexDirection:"column",  placeItems:"center"}}>

     <div style={{marginTop:"210px"}}>
         <h1 style={{width:"100%", height:"56px",display:"grid", placeItems:"center"}}>Login</h1>
        <form action="">
         
               <div  className={styles.inputs}>
               <label htmlFor="mail">
                Email:
               
                 <input type="text" id='mail' placeholder='Enter Email' required/>
               </label>
            </div>
               <div  className={styles.inputs}>
               <label htmlFor="password">
                  Password:
             
                 <input type="password" id='password' placeholder='Password'/>
               </label>
            </div>
            <div style={{width:"100%", height: "38px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
              
             <button style={{background:"#00b4d8",width:"30%", border:"none", borderRadius:"5px",color:"black"}}>Login</button>
            </div>
          

        </form>
         
     </div>

    </div>
    </>
  )
}

export default logincomponent