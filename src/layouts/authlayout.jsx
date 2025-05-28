import React from 'react'
import styles from './authlayout.module.css';
import { Outlet } from 'react-router-dom';
import '../App.css'


const login = ({children}) => {
  return (
    <div className='container'>
        <div className={styles.innerContainer}>
          <div className={styles.loginLayout}  >
            <div className={styles.detailsSection}>
               <div style={{width:"100%", height:"56px"}}>
              <div  style={{ marginLeft:"20px",width:"45px",height:"45px",background:"white",border:"none",borderRadius:"50%"}}>
                <h1>JM</h1>
              </div>
            </div>

              <div style={{marginTop:"160px",color:"white",textAlign:"left"}}>

                 <div style={{margin:"30px",width:"100%", height:"56px"}}>
                   <h2 style={{color:"white"}}>Developed using</h2>
            
                 </div>
               
              
                <div className={styles.card}>
                  <ul>
                    Front End:
                    <li>React</li>
                  </ul>
                  <ul>
                    Back End:
                    <li>Node.js</li>
                  </ul>
                  <ul>
                    Database:
                    <li>PostgreSQL</li>
                  </ul>
                  <ul>
                    Charts:
                    <li>Highcharts </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className={styles.authContainer}>
              {children}
            </div>
          </div>

        </div>

    </div>
  )
}

export default login