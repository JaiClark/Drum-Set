import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


class NavBar extends React.PureComponent {
    render() {
        return(
        <div>

  <nav class="navbar navbar-expand-lg  navbar-dark bg-dark"><Link to='/'>
    <a class="navbar-brand" ><img class='.img2' src="https://uploads-ssl.webflow.com/5694022711a368f064b1b788/5694022811a368f064b1b7c5_Icon-music.png" width= "35px" height="35px"></img></a></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
       
      <li class="nav-item active">
      <Link to="/"><a class="nav-link"> Home </a></Link>
      </li>
      <li class="nav-item active">
      <Link to="/Shop"><a class="nav-link">Shop</a></Link>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Gallery</a>
      </li>
      <li class="nav-item active">
        <Link to='./contact'><a class="nav-link">Contact</a></Link>
      </li>
      <li class="nav-item active justify-content-end">
       <Link to="./signup"><a class="nav-link">Login</a></Link>
      </li> 
    </ul>
  </div>
</nav>
        </div>
        );
    }
}

export default NavBar;