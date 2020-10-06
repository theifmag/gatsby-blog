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
                    <i
                      className="fa fa-envelope"
                      style={{
                        color: "gray",
                      }}
                    />
                    <a href="#">Email : theifmag@gmail.com</a>
                  </p>
                  {/* <p className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                    <i className="fa fa-phone" /> +123456789
                  </p> */}
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
                              <i className="fab fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fab fa-linkedin" aria-hidden="true"></i>
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
              <Link to="/about">About</Link>
            </li>

            <li>
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle dropdown-menu-pd"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  
                >
                  Explore
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                  Justice & law
                  </a>
                  <a class="dropdown-item" href="#">
                  Politics
                  </a>
                  <a class="dropdown-item" href="#">
                  Health
                  </a>
                  <a class="dropdown-item" href="#">
                  Economy
                  </a>
                  <a class="dropdown-item" href="#">
                  Education
                  </a>
                  <a class="dropdown-item" href="#">
                  Arts & Media
                  </a>
                  <a class="dropdown-item" href="#">
                  Environment
                  </a>
                  <a class="dropdown-item" href="#">
                  Violence & Harrasement
                  </a>
                  <a class="dropdown-item" href="#">
                  Casteism
                  </a>
                  <a class="dropdown-item" href="#">
                  Colorism & Racism
                  </a>
                  <a class="dropdown-item" href="#">
                  Sports
                  </a>
                </div>
              </div>
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

        <div className="hamburger-2" id="burger" onClick={() => openMenu()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </div>
  );
}

export default  Navbar ;