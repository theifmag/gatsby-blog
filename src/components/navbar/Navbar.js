import React from 'react' ;
import './Navbar.css'
import { Link } from 'gatsby';
import { graphql,useStaticQuery } from "gatsby"
import ThemeChanger from '../themeChanger'


function Navbar(){

const data = useStaticQuery(graphql`

query{
  
    site {
      siteMetadata {
        title
      }
    }
  } `)

  const data2 = data.site.siteMetadata ;


const openMenu = () =>{

  var navmenu = document.getElementById('navmenu') ;
  var hamburger = document.getElementById('burger') ;
  hamburger.classList.toggle('hamburger-open') ;
  navmenu.classList.toggle('open') ;
}

    return (
      <nav>
        <div className="logo-div"><a href="/"> MyBlog</a></div>
        <div className="nav-menu" id="navmenu">
          <ul>
          
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About </Link>
          </li>

            <li>
              <Link to="/bloglist">Blog</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            {/* <li>
              <ThemeChanger />
            </li> */}

          </ul>
        </div>

        <div className="hamburger" id="burger" onClick={openMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    );
}



export default Navbar ;