
import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styles from './main.module.css'



  

const Main = () => {


      const [growthRateData, setGrowthRateData] = useState([]);
      const [stanbicEdit, setstanbicEdit] = useState(false);
      const [equityEdit, setEquityEdit] = useState(false);
      const [edits, setEdits] = useState({});


  async function updateData(){
        try {
          const response = await fetch('https://back-end-test-n0ma.onrender.com/growthrate/update', {
             method: "POST",
            headers: {
               "Content-Type": "application/json",
          },
           body: JSON.stringify(edits),
     });

    if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
       }
       const result = await response.json()
       location.reload();
       console.log("Success:", result);
      // Handle successful response here (e.g., redirect, show message)
        
 } catch (err) {
        new Error("Error:", err);
      
   }

    
  }
  



const handleChange = (e, index) => {
  const { value } = e.target;
  
  setEdits(prev => ({
    ...prev,
    [index]: {  
      ...prev[index],  
      index:index,
      value: value     
    }
  }));
};



const handleEquityEdit = () => {
    setstanbicEdit(false)
    setEquityEdit(true)
    setEdits({})
}
const handleStanbicEdit = () => {
     setEquityEdit(false)
    setstanbicEdit(true)
     setEdits({})
   
}


  useEffect(() => {
    const fetchData = async () => {
      try {
       

         const response = await fetch("https://back-end-test-n0ma.onrender.com/growthrate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
            const res = await response.json();
          

        setGrowthRateData(res.data);
      
      } catch (err) {
       throw new Error(err)
      } 
    };

    fetchData();
  }, []);
 

const EquityGrowthRate = growthRateData.filter(item => item.institution === "Equity Bank").map(item => item.growthrate);
const StanbicGrowthRate = growthRateData.filter(item => item.institution === "Stanbic Bank").map(item => item.growthrate)


const options = {
   chart: {
        type: 'line'
    },
    title: {
        text: 'Average Growth rate'
    },
    subtitle: {
        text: 'Source: ' + 'Sample figures'
            
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ]
    },
    yAxis: {
        title: {
            text: 'Growth Rate(%)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Stanbic Bank',
        data:StanbicGrowthRate
    }, {
        name: 'Equity',
        data: EquityGrowthRate
    }]
};

  return (
  <>

  <div className={styles.container}>
    <div className={styles.userContainer}></div>
    <div className={styles.tableContainer}>
       <div style = {{width:"95%", marginTop:"20px"}}>
         <table style={{width:"100%"}}>
              <tr>
   <th style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Months:</th>
    <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Jan</td>
    <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Feb</td>
     <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Mar</td>
    <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Apr</td>
    <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>MAy</td>
     <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Jun</td>
      <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Jul</td>
    <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Aug</td>
     <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Sep</td>
      <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Oct</td>
    <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Nov</td>
     <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Dec</td>
      <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px",display:"grid", placeItems:"center" }}><strong>Actions</strong></td>    
  </tr>

  <tr>
   <th style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px" }}>Stanbic Bank:</th>
   
       {
      growthRateData.filter(item => item.institution === "Stanbic Bank" ).map((item,index) => (
          <td key={index} style={{border:"1px solid #dddddd", textAlign: "left",width:"96px" }}><input required onBlur={(e) => handleChange(e,(index+1)) }  disabled={!stanbicEdit}  style={{margin:"0px",border:"none",height:"24px",width:"96px" }} name={item.month} type="number" placeholder={item.growthrate} /></td>
      ))
    }
    <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px",display: "flex", flexDirection: "row",gap:"5px" }}>
        <button className={styles.deleteBtn}>Delete</button>
          <button onClick={handleStanbicEdit}  className={styles.editBtn}>Edit</button>
    <button onClick={updateData}  className={styles.updateBtn}>Update</button>
        
        </td>
  </tr>
  <tr>
    <th style={{border:"1px solid #dddddd",background:"#dddddd", textAlign: "left",padding:"8px" }}>Equity Bank:</th>
    {
      growthRateData.filter(item => item.institution === "Equity Bank" ).map((item,index) => (
          <td key ={index} style={{border:"1px solid #dddddd",background:"#dddddd", textAlign: "left",width:"96px" }}><input required onBlur={(e) => handleChange(e,(index+13))} disabled={!equityEdit}  style={{margin:"0px",border:"none",height:"24px",width:"96px" }}name={item.month} type="number" placeholder={item.growthrate} /></td>
      ))
    }
  
    
    <td style={{border:"1px solid #dddddd", textAlign: "left",padding:"8px",display: "flex", flexDirection: "row",gap:"5px",background:"#dddddd" }}>
        <button className={styles.deleteBtn}>Delete</button>
          <button  onClick={handleEquityEdit}  className={styles.editBtn}>Edit</button>
    <button  onClick={updateData}  className={styles.updateBtn}>Update</button>
        
        </td>
  </tr>
</table>


<div  style={{}}>

     <form style={{width:"80%"}} action="">
         <table >
         <tr>

   
    <th style={{border:"1px solid #dddddd", textAlign: "left",height:"24px",width:"200px",padding:"0px" }}  ><input  style={{font:"bold",margin:"0px",border:"none",height:"24px",width:"200px" }} type="text" placeholder='Institution' /></th>
              {
      growthRateData.filter(item => item.institution === "Equity Bank" ).map(item => (
        
              <td style={{border:"1px solid #dddddd", textAlign: "left",height:"24px",width:"96px",padding:"0px" }}  ><input  style={{margin:"0px",border:"none",height:"24px",width:"96px" }}name={item.month} type="number" placeholder={item.month} /></td>
      ))
    }

   
     
   
    <td><button className={styles.createBtn}>Create New</button></td>
  </tr>
       </table>
     </form>
</div>


       </div>
     


    </div>
    <div className={styles.chartContainer}>

      <div className={styles.chart}>
            <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
    
  </div>
=======

  </>
  )
}

export default Main