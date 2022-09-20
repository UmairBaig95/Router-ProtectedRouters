import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-center">
    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
        <Link className="nav-link" to="/about">About Page</Link>
      </div>
      <div>
      <Link to="/login" className="btn btn-success mx-4" role="button">Log in</Link>
      <Link to="/" className="btn btn-danger" role="button">Log Out</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
