import React from "react";
import "./navbar.css";

import { Link } from "gatsby";

const Navbar = (props) =>{

  function openMenu() {
    var navmenu2 = document.getElementById("navmenu");
    var hamburger2 = document.getElementById("burger");
     hamburger2.classList.toggle("hamburger-open");
     navmenu2.classList.toggle("open");
  }

  return (
    <div>
     

     <div className="et_top_header_wrapper">
        <div
          className="container-fluid"
          style={{
            paddingLeft: "7vw",
            paddingRight: "3vw",
          }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
              <div className="et_left_side_warpper">
                <div className="et_top_contect">
                  <p>
                    <i className="fa fa-envelope" />{" "}
                    <a href="#">Email@example.com</a>
                  </p>
                  <p className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                    <i className="fa fa-phone" /> +123456789
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
              <div className="et_right_side_main_warpper">
                <div className="et_right_side_warpper">
                  <ul>
                    <li className="hidden-xs">
                      <div className="plumb_top_socialicon">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-pinterest-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <nav
        style={{ position: "relative", zIndex: 99, top: 0 }}
        className="my-nav"
      >
        <div className="logo-div">
          <Link to="/">
            <img
              src={require("../../images/logo-main.png")}
              style={{
                width: "90px",
              }}
            />
          </Link>
        </div>
        <div className="nav-menu" id="navmenu">
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>

            <li>
              <Link to="/about" >
                About
              </Link>
            </li>

            <li>
              <Link to="/bloglist">Explore </Link>
            </li>

            <li>
              <Link to="/bloglist">Series</Link>
            </li>

            {/* <li>
              <Link to='/bloglist'>Opinions & Stories</Link>
            </li> */}

            {/* <li>
              <Link to='/bloglist'>Series</Link>
            </li> */}

            <li>
              <Link to="/bloglist">Get Involved</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="hamburger-2" id="burger" onClick={()=>openMenu()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </div>
  )
}

export default  Navbar ;