import React from 'react'
import { Link } from 'react-router-dom'

const HeaderResto = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">RESTOBUZZ</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link"  to="/">ADD DISH</Link>
              <Link class="nav-link"  to="/search">SEARCH DISH</Link>
              <Link class="nav-link"  to="/delete">DELETE DISH</Link>
              <Link class="nav-link"  to="/view">VIEW DISH</Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderResto