import React,{useState} from "react";
import HomeNav from "../components/HomeNav";
import { useNavigate } from "react-router-dom";
import axios from "axios"
function Checkout() {
    const navigate = useNavigate();
    const [searchby,setsearchby] = useState("");
    const [value,setvalue] = useState("");
    const [student,setstudent] = useState({})

    const checkout = async(id)=>{
        var date = new Date();
        var h=date.getHours();  
        var m=date.getMinutes();   
        var time=h+":"+m;
       await axios.patch(`http://localhost:3001/students/${id}`,{"checkout":time}) 
       .then(navigate("/"))
       }
    

  return (
    <div>
        <HomeNav/>
        <center>

    <div style={{marginTop:"100px"}}>  
            <select style={{padding:"5px",marginRight:"2px"}} onChange={(e)=>{
                setsearchby(e.target.value) }}>
                <option selected>find by</option>
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
                          if((res.data[0].checkout !== "--")){
                              alert("Student Has Already Checked Out")
                            }
                        })
                    }
                    else if(searchby==="Roll"){
                        axios.get(`http://localhost:3001/students?Roll=${value}`).then((res)=>{
                            if(res.data[0])
                            setstudent(res.data[0])
                            else
                            alert("Student Not Found")
                            if(res.data[0].checkout !== "--"){
                                alert("Student Has Already Checked Out")
                            }
                        })
                    }
                }}>Search</button>
        </div>
       
        </center>
     {student.checkout !== "--" ? <div></div>:
       (
           <div style={{marginLeft:"80px",marginTop:"70px",float:"center"}}>  
            <div>
           <h5> Student Name: <span style={{color:"lightseagreen"}}>{student.Name}</span></h5>
            <h5>Student Roll :<span style={{color:"lightseagreen"}}>{student.Roll} </span></h5>
           <h5> Check-in Time : <span style={{color:"lightseagreen"}}>{student.checkin}</span></h5>
                <button style= {{marginTop:"10px",marginLeft:"30px"}}className="btn btn-danger" onClick={()=>checkout(student.id)} >Checkout</button> 
           </div>
         </div>
       )}
       </div>
  );
}
export default Checkout;