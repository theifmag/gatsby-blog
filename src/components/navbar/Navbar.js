import React from 'react' ;
import './Navbar.css'

import { Link } from 'gatsby';

class Navbar extends React.Component{


openMenu = () =>{

  var navmenu = document.getElementById('navmenu') ;
  var hamburger = document.getElementById('burger') ;
  hamburger.classList.toggle('hamburger-open') ;
  navmenu.classList.toggle('open') ;
}

closeMenu = () =>{

  var navmenu = document.getElementById('navmenu') ;
  var hamburger = document.getElementById('burger') ;
  hamburger.classList.toggle('hamburger-open') ;
  navmenu.classList.toggle('open') ;
}


render(){
    return (
      <nav style={{position : 'relative' , zIndex : 99 , top : 0 ,}} className="my-nav">
        <div className="logo-div"><Link to="/">The IfMag</Link></div>
        <div className="nav-menu" id="navmenu">
          <ul>
            <li>
              <Link to='/'> Home</Link>
            </li>

            <li>
              <Link to='/bloglist'>Opinions & Stories</Link>
            </li>


            <li>
              <Link to='/bloglist'>Podcast</Link>
            </li>

            <li>
              <Link to='/bloglist'>Series</Link>
            </li>


            <li>
              <Link to='/bloglist'>Explore By Topic</Link>
            </li>

            <li>
              <Link to='/bloglist'>Get Involved</Link>
            </li>

            <li>
              <Link to="/about" onClick={this.closeMenu}>About</Link>
            </li>


            <li>
            <Link to="/contact">Contact</Link>
            </li>





          </ul>
        </div>

        <div className="hamburger-2" id="burger" onClick={this.openMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    );
}

}

export default Navbar ;