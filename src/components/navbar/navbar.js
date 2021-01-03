import React from 'react'
import './navbar.css'

import { Link } from 'gatsby'

const Navbar = () => {
	// function openMenu() {
	// 	var navmenu2 = document.getElementById('navmenu')
	// 	var hamburger2 = document.getElementById('burger')
	// 	hamburger2.classList.toggle('hamburger-open')
	// 	navmenu2.classList.toggle('open')
	// }

	return (
		<div>
			<div className='et_top_header_wrapper'>
				<div
					className='container-fluid'
					style={{
						paddingLeft: '7vw',
						paddingRight: '3vw',
					}}>
					<div className='row'>
						<div className='col-lg-6 col-md-6 col-sm-6 col-12 '>
							<div className='et_left_side_warpper'>
								<div className='et_top_contect'>
									<p>
										<i
											className='fa fa-envelope'
											style={{
												color: 'gray',
											}}
										/>
										<a
											href='mailto:theifmag@gmail.com'
											rel='noreferrer'
											target='_blank'>
											Email : theifmag@gmail.com
										</a>
									</p>
									{/* <p className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                    <i className="fa fa-phone" /> +123456789
                  </p> */}
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-sm-6 col-6 '>
							<div className='et_right_side_main_warpper'>
								<div className='et_right_side_warpper'>
									<ul>
										<li className='hidden-xs'>
											<div className='plumb_top_socialicon'>
												<ul>
													<li>
														<a
															rel='noreferrer'
															href='https://www.facebook.com/theifmag'
															target='_blank'>
															<i className='fab fa-facebook' />
														</a>
													</li>

													<li>
														<a
															rel='noreferrer'
															href='https://www.linkedin.com/company/theifmag'
															target='_blank'>
															<i
																className='fab fa-linkedin'
																aria-hidden='true'></i>
														</a>
													</li>
													<li>
														<a
															rel='noreferrer'
															href='https://www.instagram.com/theifmag/'
															target='_blank'>
															<i className='fab fa-instagram' />
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

			{/* <nav
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
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle dropdown-menu-pd"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  
                >
                  Explore
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                  Justice & law
                  </a>
                  <a className="dropdown-item" href="#">
                  Politics
                  </a>
                  <a className="dropdown-item" href="#">
                  Health
                  </a>
                  <a className="dropdown-item" href="#">
                  Economy
                  </a>
                  <a className="dropdown-item" href="#">
                  Education
                  </a>
                  <a className="dropdown-item" href="#">
                  Arts & Media
                  </a>
                  <a className="dropdown-item" href="#">
                  Environment
                  </a>
                  <a className="dropdown-item" href="#">
                  Violence & Harrasement
                  </a>
                  <a className="dropdown-item" href="#">
                  Casteism
                  </a>
                  <a className="dropdown-item" href="#">
                  Colorism & Racism
                  </a>
                  <a className="dropdown-item" href="#">
                  Sports
                  </a>
                </div>
              </div>
            </li>

            <li>
              <Link to="/bloglist">Series</Link>
            </li>


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
      </nav> */}
			<nav className='navbar navbar-expand-lg navbar-light custom-color'>
				<Link className='navbar-brand' to='/'>
					<img
						alt='main logo'
						src={require('../../images/logo-main-3.png')}
						style={{
							width: '150px',
							marginLeft: '5vw',
						}}
					/>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavDropdown'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item active'>
							<Link className='nav-link' to='/'>
								Home <span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>

						<li className='nav-item dropdown'>
							<div
								className='nav-link dropdown-toggle'
								id='navbarDropdownMenuLink'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								Explore
							</div>
							<div
								className='dropdown-menu'
								aria-labelledby='navbarDropdownMenuLink'>
								<Link
									className='dropdown-item'
									to='/bloglist?Category=Arts&Media'>
									Arts & Media
								</Link>

								<Link
									className='dropdown-item'
									to='/bloglist?Category=Casteism'>
									Casteism
								</Link>

								<Link
									className='dropdown-item'
									to='/bloglist?Category=colorism&Racism'>
									Colorism & Racism
								</Link>

								<Link className='dropdown-item' to='/bloglist?Category=Economy'>
									Economy
								</Link>

								<Link
									className='dropdown-item'
									to='/bloglist?Category=Education'>
									Education
								</Link>

								<Link
									className='dropdown-item'
									to='/bloglist?Category=Environment'>
									Environment
								</Link>

								<Link className='dropdown-item' to='/bloglist?Category=Health'>
									Health
								</Link>

								<Link
									className='dropdown-item'
									to='/bloglist?Category=justice&law'>
									Justice & Law
								</Link>
								<Link
									className='dropdown-item'
									to='/bloglist?Category=Politics'>
									Politics
								</Link>

								<Link className='dropdown-item' to='/bloglist?Category=Sports'>
									Sports
								</Link>

								<Link
									className='dropdown-item'
									to='/bloglist?Category=Violence&Harrasement'>
									Violence & Harrassment
								</Link>
							</div>
						</li>

						<li className='nav-item dropdown'>
							<div
								className='nav-link dropdown-toggle'
								id='navbarDropdownMenuLink'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								Series
							</div>
							<div
								className='dropdown-menu'
								aria-labelledby='navbarDropdownMenuLink'>
								<Link className='dropdown-item' to='/bloglist?Category=Opinion'>
									Opinions & Stories
								</Link>

								<Link
									className='dropdown-item'
									to='/bloglist?Category=Podcasts'>
									Podcasts
								</Link>

								<Link
									className='dropdown-item'
									to='/bloglist?Category=Rendezvous'>
									Rendezvous
								</Link>
							</div>
						</li>

						<li className='nav-item'>
							<Link className='nav-link' to='/comingsoon'>
								Get Involved
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
