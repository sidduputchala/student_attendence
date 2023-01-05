import {React} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import './css/HomeNav.css'

const HomeNav = (props) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
  <a class="navbar-brand" >Student<span style={{color:"lightseagreen"}}>Attendence</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{"font-size":"18px","margin-right":"30px"}}>
      <ul style={{"margin-right":"35px"}} className="navbar-nav ms-auto mb-2 mb-lg-0">
    
        <li className="nav-item">
         <Link to="/"> <a className="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/checkin"><a className="nav-link" aria-current="page">check-in</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/checkout"><a className="nav-link" aria-current="page">check-out</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default HomeNav