import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className= 'navbar'>
        <h1 className = 'logo' >
          <Link to="/"> 
          SJ
          </Link>
          </h1>
        <div className= 'navbar-list'>
          <Link to ="/">Home</Link>
          <Link to ="/contact">Contact</Link>
          <Link to ="/about">About</Link>
          <Link to ="/project">Project</Link>
          
          
             {/* <a href = "">Home</a>
            <a href = "">Project</a>
            <a href = "">Contact</a>
            <a href = "">About</a> */}
            
        </div>
        <div>
          <button>
          <Link to ="/login">
            Login
            </Link>
            </button>
        </div>
      
    </div>
  )
}

export default Navbar
