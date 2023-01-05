import React, {useState } from "react"
import HomeNav from "../components/HomeNav";
import { useNavigate } from "react-router-dom";
import axios from "axios"
function Checkin() {
  const [name,setname] = useState("");
  const [roll,setroll] = useState("");
  const navigate = useNavigate(); 
  const checkin = async()=>{
    var date = new Date();
    var h=date.getHours();  
    var m=date.getMinutes();   
    var time=h+":"+m;
    await axios.post('http://localhost:3001/students',{Name:name,Roll:roll,checkin:time,checkout:"--"})
    .then(navigate("/"))
    }
  return (
    <>
        <HomeNav/>
<div style={{marginTop:"80px",marginLeft:"30px"}}>

  <div class="col-md-4" >
    <label for="name" class="form-label">Name</label>
    <input onChange={(e)=>{ setname(e.target.value)}}type="text" class="form-control" id="name"/>
  </div>
  <br></br>
  <br></br>
  <div class="col-4">
    <label for="roll" class="form-label">Roll</label>
    <input onChange={(e)=>{setroll(e.target.value)}} type="text" class="form-control" id="roll"/>
  </div>

  <div class="col-12" style={{marginTop:"50px"}}>
    <button class="btn btn-success" onClick={()=>{checkin()}}>Check in</button>
  </div>

</div>
   </>
  );
}
export default Checkin;