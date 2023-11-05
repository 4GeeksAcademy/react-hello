
import React from 'react'


const Header = () => { 
    return (
<nav class="navbar navbar-expand-lg d-flex mb-3" style={{backgroundColor : 'black'}}>
  <div class="container-fluid" style={{maxWidth: '1320px'}}>
    <a class="navbar-brand" href="#" style={{color : 'white'}}>Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#" style={{color : 'white'}}>Home</a>
        <a class="nav-link" href="#" style={{color : 'grey'}}>About</a>
        <a class="nav-link" href="#" style={{color : 'grey'}}>Services</a>
        <a class="nav-link" href="#" style={{color : 'grey'}}>Contact</a>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Header;