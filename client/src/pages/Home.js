import React, {useEffect, useState } from "react"
import HomeNav from "../components/HomeNav"
import "./css/Home.css"
import axios from "axios"

function Home(){

   const [searchby,setsearchby] = useState("");
   const [value,setvalue] = useState("");
   const [student,setstudent] = useState({Name:"",Roll:""})
   const [total,settotal] = useState([])
    const [show,setshow] = useState(0)

 const totalstudents = async()=>{
    await axios.get(`http://localhost:3001/students?checkout=${"--"}`).then((res)=>{
      settotal(res.data)
      setshow(1)
    })  
  }
  return(
  <>     
     <HomeNav/>
     <center>
      <div style={{marginTop:"100px"}}>  
            <select style={{padding:"5px",marginRight:"2px"}} onChange={(e)=>{
              setsearchby(e.target.value) }}>
                <option selected>search by</option>
                <option value="Name">Student Name </option>
                <option value="Roll">Roll Number</option>
              </select>

              <input style={{padding:"5px",marginRight:"2px"}}  type="search" onChange={(e)=>{
                setvalue(e.target.value)
              }}></input>   

              <button className="btn btn-primary" onClick={()=>{  
                if(searchby==="Name"){    
                  axios.get(`http://localhost:3001/students?Name=${value}`).then((res)=>{ 
                    if(res.data[0])
                    setstudent(res.data[0])
                  else
                  alert("Student Not Found")
                  })
                }
                else if(searchby==="Roll"){
                  axios.get(`http://localhost:3001/students?Roll=${value}`).then((res)=>{
                    if(res.data[0])
                    setstudent(res.data[0])
                    else
                    alert("Student Not Found")
                  })
                }
              }}>Search</button>
        </div>
   
        </center>
    {student.Roll === "" ?<div></div>:
       (
      <div style={{marginTop:"50px"}}>
      <center>
       <h5> Student Name: <span style={{color:"lightseagreen"}}>{student.Name}</span></h5>
        <h5>Student Roll :<span style={{color:"lightseagreen"}}>{student.Roll} </span></h5>
       <h5> Check-in Time : <span style={{color:"lightseagreen"}}>{student.checkin}</span></h5>
       <h5> Check-out Time : <span style={{color:"lightseagreen"}}>{student.checkout}</span></h5>
    
      </center>
       </div>
       )}
       <button className="btn btn-primary" style={{marginTop:"40px",marginLeft:"20px"}} onClick ={()=>{totalstudents()}} >NO OF STUDENTS PRESENT</button>
       <hr style={{ width: "350px", height: "2px",color:"rgb(0, 0, 0)" }}></hr>
      {show === 0 ?<div></div>:
      <div style={{marginTop:"20px"}}>
      <h5 style={{marginLeft:"20px"}}>Total Number Of Students Present Right Now Are : <span style={{color:"lightseagreen"}}>{total.length}</span></h5>
      <div className="container" style={{marginTop:"30px"}}>
      <div className="row">
      {total.map((item)=>{
        return(
          <div className="card col-md-3 col-sm-6" style={{marginLeft:"20px"}}>
          <h5>Student Name : <span style={{color:"lightseagreen"}}>{item.Name}</span></h5>
          <h5>Student Roll : <span style={{color:"lightseagreen"}}>{item.Roll}</span></h5>
          <h5>Check-in Time : <span style={{color:"lightseagreen"}}>{item.checkin}</span></h5>
          <h5>Check-out Time : <span style={{color:"lightseagreen"}}>{item.checkout}</span></h5>
          </div>
        )
      })
    }
    </div>
    </div>
      </div>
      }
</>
    );
}
export default Home