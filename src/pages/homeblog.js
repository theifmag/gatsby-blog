import React from "react";

import "../styles/css/style.css";
import "../styles/css/animate.css";
import "../styles/css/bootstrap.min.css";
import "../styles/css/fonts.css";
import "../styles/css/flaticon2.css";
import "../styles/css/font-awesome.css";
import "../styles/css/fullpage.min.css";
import "../styles/css/demo.css";
import "../styles/css/owl.carousel.css";
import "../styles/css/owl.theme.default.css";
import "../styles/css/magnific-popup.css";
import "../styles/css/style_V.css";
import "../styles/css/responsive_V.css";
import { Link } from 'gatsby'

const Homeblog = (props) => {

  return (
    <div>
      <div>
        {/* ET top header Start */}

        {/* ET top header End */}
        {/* ck header wrapper Start */}

        {/* <div className="ck_slider_main_wrapper float_left" >
          <div className="ck_top_life_effect" />
          <div className="ck_top_right_effect" />
          <div className="ck_bot_life_effect" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
                <div
                  className="ck_slider_top_content float_left"
                  style={{
                    marginTop: "-30vh",
                  }}
                >
                  <h2>The words of Feminist</h2>
                  <h3>From our best <span>Curators</span></h3> 
                  <h5 style={{
                    marginTop : '5vh',
                    marginBottom : '2vh',
                  }}>
                    If we aren't intersectional, some of us, the most
                    vulnerable, are going to fall through the cracks.
                  </h5>
                  <strong>-Kimberlé Williams Crenshaw</strong>
                  <ul>
                    <li>
                      <a href="#">read more</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 align-self-center d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="ck_main_slider_img float_left">
                  <img src="images/header_ladi.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              style={{
                marginTop: "20vh",
                paddingLeft: "5vw",
              }}
            >
              <h2
                style={{
                  fontSize: "30px",
                  color: "#ee4c7c",
                  fontFamily: "Bad Script",
                }}
              >
                {" "}
              </h2>
              {/* <h3>From our best <span>Curators</span></h3>  */}
              <h4
                style={{
                  marginTop: "5vh",
                  marginBottom: "2vh",
                }}
              >
                If we aren't intersectional, some of us, the most vulnerable,
                are going to fall through the cracks.
              </h4>
              <strong>-Kimberlé Williams Crenshaw</strong>
              <ul>
                <li>
                  <div className="ck_new_btn ">
                    <a href="#">Read More</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={require("../images/header_ladi.png")} alt="img" />
            </div>
          </div>
        </div>

        {/* ck slider wrapper End */}
        {/* <div className="ck_about_main_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="ck_about_img_wrapper float_left">
                  <img src="images/ice8.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
                <div className="ck_about_img_cont_wrapper float_left">
                  <div className="ck_heading_wrapper ck_heading_wrapper2">
                    <h4>what we offer</h4>
                    <h3>Who we are?</h3>
                  </div>
                  <p>We are focused on giving you what is trending and needful for your online presence and so we focus on building powerful tools, features and plugins that are actually need for your business.
                    <br />
                    <br />These will make you enjoy all the benefits of installing a powerful theme with functional codes through an easy to build WordPress tool kit.These will make you enjoy all the benefits of installing a tool kit.</p>
                  <div className="ck_new_btn">	<a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* ck cake wrapper Start */}
        {/* <div class="ck_our_cake_wrapper float_left">
		<div class="ck_our_cake_img_overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="ck_heading_center_wrapper ck_heading_center_wrapper_ok float_left">
						<h4>our Cakes</h4>
						<h3>What is Cakes Store?</h3>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
					<div class="ck_ok_main_box float_left">	<i class="flaticon-delivery-truck"></i>
						<h3><a href="#">Free Shipping</a></h3>
						<p>With $100 or more orders.
							<br>Go to Oars Store,</p>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
					<div class="ck_ok_main_box float_left">	<i class="flaticon-certificate"></i>
						<h3><a href="#">Organic Certified</a></h3>
						<p>With $100 or more orders.
							<br>Go to Oars Store,</p>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
					<div class="ck_ok_main_box float_left">	<i class="flaticon-block"></i>
						<h3><a href="#">Secure Payment</a></h3>
						<p>With $100 or more orders.
							<br>Go to Oars Store,</p>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
					<div class="ck_ok_main_box float_left">	<i class="flaticon-conversation"></i>
						<h3><a href="#">Friendly Support</a></h3>
						<p>With $100 or more orders.
							<br>Go to Oars Store,</p>
					</div>
				</div>
			</div>
		</div>
	</div> */}
        {/* ck cake wrapper End */}
        {/* ck best cake wrapper Start */}

        <div className="ck_bc_main_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="ck_heading_center_wrapper ck_heading_center_wrapper_bc float_left">
                  <h4>Blogs</h4>
                  <h3>Our Latest Blogs</h3>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="et_left_news_wrapper">
                  <div className="et_left_img_news2">
                    <div className="et_left_img_overlay" />
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p>
                          <i>News, Delivery</i>
                        </p>
                        <div className="heart_box">
                          {" "}
                          <a href="#">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        <h4>29-Jan-2019</h4>
                      </div>
                    </div>
                  </div>
                  <div className="et_left_cont_news">
                    <h4>News</h4>
                    <h3>Services - 2019</h3>
                    <h5>29-Jan-2019</h5>
                    <p>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet.
                    </p>
                    <h2>
                      <a href="#">Read More</a>{" "}
                      <i className="fa fa-angle-double-right" />{" "}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="et_left_news_wrapper">
                  <div className="et_left_img_news2">
                    <div className="et_left_img_overlay" />
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p>
                          <i>News, Delivery</i>
                        </p>
                        <div className="heart_box">
                          {" "}
                          <a href="#">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        <h4>29-Jan-2019</h4>
                      </div>
                    </div>
                  </div>
                  <div className="et_left_cont_news">
                    <h4>News</h4>
                    <h3>Services - 2019</h3>
                    <h5>29-Jan-2019</h5>
                    <p>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet.
                    </p>
                    <h2>
                      <a href="#">Read More</a>{" "}
                      <i className="fa fa-angle-double-right" />{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="et_left_news_wrapper">
                  <div className="et_left_img_news2">
                    <div className="et_left_img_overlay" />
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p>
                          <i>News, Delivery</i>
                        </p>
                        <div className="heart_box">
                          {" "}
                          <a href="#">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        <h4>29-Jan-2019</h4>
                      </div>
                    </div>
                  </div>
                  <div className="et_left_cont_news">
                    <h4>News</h4>
                    <h3>Services - 2019</h3>
                    <h5>29-Jan-2019</h5>
                    <p>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet.
                    </p>
                    <h2>
                      <a href="#">Read More</a>{" "}
                      <i className="fa fa-angle-double-right" />{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="et_left_news_wrapper">
                  <div className="et_left_img_news2">
                    <div className="et_left_img_overlay" />
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p>
                          <i>News, Delivery</i>
                        </p>
                        <div className="heart_box">
                          {" "}
                          <a href="#">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        <h4>29-Jan-2019</h4>
                      </div>
                    </div>
                  </div>
                  <div className="et_left_cont_news">
                    <h4>News</h4>
                    <h3>Services - 2019</h3>
                    <h5>29-Jan-2019</h5>
                    <p>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet.
                    </p>
                    <h2>
                      <a href="#">Read More</a>{" "}
                      <i className="fa fa-angle-double-right" />{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="et_left_news_wrapper">
                  <div className="et_left_img_news2">
                    <div className="et_left_img_overlay" />
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p>
                          <i>News, Delivery</i>
                        </p>
                        <div className="heart_box">
                          {" "}
                          <a href="#">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        <h4>29-Jan-2019</h4>
                      </div>
                    </div>
                  </div>
                  <div className="et_left_cont_news">
                    <h4>News</h4>
                    <h3>Services - 2019</h3>
                    <h5>29-Jan-2019</h5>
                    <p>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet.
                    </p>
                    <h2>
                      <a href="#">Read More</a>{" "}
                      <i className="fa fa-angle-double-right" />{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="et_left_news_wrapper">
                  <div className="et_left_img_news2">
                    <div className="et_left_img_overlay" />
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p>
                          <i>News, Delivery</i>
                        </p>
                        <div className="heart_box">
                          {" "}
                          <a href="#">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        <h4>29-Jan-2019</h4>
                      </div>
                    </div>
                  </div>
                  <div className="et_left_cont_news">
                    <h4>News</h4>
                    <h3>Services - 2019</h3>
                    <h5>29-Jan-2019</h5>
                    <p>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet.
                    </p>
                    <h2>
                      <a href="#">Read More</a>{" "}
                      <i className="fa fa-angle-double-right" />{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="ck_new_btn ck_new_btn_bc">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ck best cake wrapper End */}
        {/* ck cake wrapper Start */}
        {/* <div class="ck_offer_service_wrapper float_left">
		<div class="ck_offer_service_img_overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
					<div class="ck_offer_img_cont_wrapper float_left">
						<div class="ck_heading_wrapper float_left">
							<h4>special offer</h4>
							<h3>what we offer</h3>
						</div>
						<div class="ck_offer_mian_box_wrapper ck_offer_mian_box_wrapper_first float_left">
							<div class="ck_offer_icon_wrapper">	<i class="flaticon-beverage"></i>
							</div>
							<div class="ck_offer_icon_cont_wrapper">
								<h3>Always Fresh</h3>
								<p>We Understant behind every good products, it's also have to be accessi- bleeasily. Our intention is to get you started</p>
							</div>
						</div>
						<div class="ck_offer_mian_box_wrapper ck_offer_mian_box_wrapper_second float_left">
							<div class="ck_offer_icon_wrapper">	<i class="flaticon-rice-cooker"></i>
							</div>
							<div class="ck_offer_icon_cont_wrapper">
								<h3>Healthy Cakes</h3>
								<p>We Understant behind every good products, it's also have to be accessi- bleeasily. Our intention is to get you started</p>
							</div>
						</div>
						<div class="ck_offer_mian_box_wrapper ck_offer_mian_box_wrapper_second float_left">
							<div class="ck_offer_icon_wrapper">	<i class="flaticon-spaghetti"></i>
							</div>
							<div class="ck_offer_icon_cont_wrapper">
								<h3>100% Fresh</h3>
								<p>We Understant behind every good products, it's also have to be accessi- bleeasily. Our intention is to get you started</p>
							</div>
						</div>
						<div class="ck_offer_btn float_left">	<a href="#">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
					<div class="ck_special_img_wrapper float_left">
						<img src="images/ice9.png" alt="img">
					</div>
				</div>
			</div>
		</div>
	</div> */}
        {/* ck_obc_main_wrapper Start */}
        {/* <div class="ck_obc_main_wrapper float_left">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="ck_heading_center_wrapper ck_heading_center_wrapper_bc float_left">
						<h4>Trending Blogs</h4>
					
					</div>
				</div>
				<div class="col-md-12">
					<div class="ck_team_slider_wrapper float_left">
						<div class="owl-carousel owl-theme">
							<div class="item">
								<div class="ck_elem_slide_img_wrapper float_left">
									<div class="ck_elem_slide_img float_left">
										<img src="images/cake1.png" alt="img">
										<h5>Categorey</h5>
									</div>
									<div class="ck_elem_slide_img_cont float_left">
										<div class="ck_elem_star">	<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
										</div>
										<h3>Cherry Vanilla</h3>
										<p>Aenean sollicitudin, lorem quis</p>
										<div class="ck_bc_btn float_left">	<a href="#">Read More</a>
										</div>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="ck_elem_slide_img_wrapper float_left">
									<div class="ck_elem_slide_img float_left">
										<img src="images/cake2.png" alt="img">
										<h5>Categorey</h5>
									</div>
									<div class="ck_elem_slide_img_cont float_left">
										<div class="ck_elem_star">	<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
										</div>
										<h3>Cherry Vanilla</h3>
										<p>Aenean sollicitudin, lorem quis</p>
										<div class="ck_bc_btn float_left">	<a href="#">Read More</a>
										</div>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="ck_elem_slide_img_wrapper float_left">
									<div class="ck_elem_slide_img float_left">
										<img src="images/cake3.png" alt="img">
										<h5>Categorey</h5>
									</div>
									<div class="ck_elem_slide_img_cont float_left">
										<div class="ck_elem_star">	<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
										</div>
										<h3>Cherry Vanilla</h3>
										<p>Aenean sollicitudin, lorem quis</p>
										<div class="ck_bc_btn float_left">	<a href="#">Read More</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> */}
        {/* ck_obc_main_wrapper End */}
        {/* ck cake wrapper Start */}
        <div className="ck_client_cake_wrapper float_left">
          <div className="ck_client_cake_img_overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="ck_heading_center_wrapper ck_heading_center_wrapper_ok float_left">
                  <h4>Members</h4>
                  <h3>Our Team</h3>
                </div>
              </div>
              <div className="col-md-12">
                <div className="ck_team_slider_wrapper ck_team_slider_wrapper2 float_left">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="ck_team_img_wrapper float_left">
                        <img src="images/t1.png" alt="img" />
                        <div className="ck_team_img_cont_wrapper float_left">
                          <h3>
                            <a href="#">John Smith</a>
                          </h3>
                          <p>
                            Currently in her fourth year in law school, gowri
                            has been deeply interested in gender and law.....
                          </p>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="ck_team_img_wrapper float_left">
                        <img src="images/t1.png" alt="img" />
                        <div className="ck_team_img_cont_wrapper float_left">
                          <h3>
                            <a href="#">John Smith</a>
                          </h3>
                          <p>
                            Currently in her fourth year in law school, gowri
                            has been deeply interested in gender and law.....
                          </p>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="ck_team_img_wrapper float_left">
                        <img src="images/t1.png" alt="img" />
                        <div className="ck_team_img_cont_wrapper float_left">
                          <h3>
                            <a href="#">John Smith</a>
                          </h3>
                          <p>
                            Currently in her fourth year in law school, gowri
                            has been deeply interested in gender and law.....
                          </p>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="ck_team_slider_wrapper ck_team_slider_wrapper2 float_left">
                  <div className="owl-carousel">
                    <div className="item">
                      <div className="ck_team_img_wrapper float_left">
                        <img src="images/t1.png" alt="img" />
                        <div className="ck_team_img_cont_wrapper float_left">
                          <h3>
                            <a href="#">John Smith</a>
                          </h3>
                          <p>
                            Currently in her fourth year in law school, gowri
                            has been deeply interested in gender and law.....
                          </p>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="ck_team_img_wrapper float_left">
                        <img src="images/t1.png" alt="img" />
                        <div className="ck_team_img_cont_wrapper float_left">
                          <h3>
                            <a href="#">John Smith</a>
                          </h3>
                          <p>
                            Currently in her fourth year in law school, gowri
                            has been deeply interested in gender and law.....
                          </p>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="ck_team_img_wrapper float_left">
                        <img src="images/t1.png" alt="img" />
                        <div className="ck_team_img_cont_wrapper float_left">
                          <h3>
                            <a href="#">John Smith</a>
                          </h3>
                          <p>
                            Currently in her fourth year in law school, gowri
                            has been deeply interested in gender and law.....
                          </p>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-google-plus-g" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ck_obc_main_wrapper Start */}
        {/* ck_testi_main_wrapper Start */}
        {/* <div class="ck_testi_main_wrapper float_left">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="ck_heading_center_wrapper ck_heading_center_wrapper_bc float_left">
						<h4>Check out our client’s</h4>
						<h3>Testimonial Words</h3>
					</div>
				</div>
				<div class="col-md-12">
					<div class="ck_testi_slider_wrapper float_left">
						<div class="owl-carousel owl-theme">
							<div class="item">
								<div class="ck_testi_slider_main_box_wrapper float_left">
									<div class="ck_testi_slide_img_wrapper">
										<img src="images/testi_img.jpg" alt="img">
									</div>
									<div class="ck_testi_slide_img_cont_wrapper">
										<h4>Victoria Porter <span>[ Director ]</span></h4>
										<p>In collaboration with public partners, lBusiness connects local businesses and job-seeking residents withresources. Our range of programs offers every service from talent recruiting and career development to clinical case mancollaboration</p>
										<img src="images/testi_sig3.png" alt="img">
										<div class="ck_testi_title_line">
											<img src="images/quote3.png" alt="img">
										</div>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="ck_testi_slider_main_box_wrapper float_left">
									<div class="ck_testi_slide_img_wrapper">
										<img src="images/testi_img2.jpg" alt="img">
									</div>
									<div class="ck_testi_slide_img_cont_wrapper">
										<h4>Victoria Porter <span>[ Director ]</span></h4>
										<p>In collaboration with public partners, lBusiness connects local businesses and job-seeking residents withresources. Our range of programs offers every service from talent recruiting and career development to clinical case mancollaboration</p>
										<img src="images/testi_sig3.png" alt="img">
										<div class="ck_testi_title_line">
											<img src="images/quote3.png" alt="img">
										</div>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="ck_testi_slider_main_box_wrapper float_left">
									<div class="ck_testi_slide_img_wrapper">
										<img src="images/testi_img3.jpg" alt="img">
									</div>
									<div class="ck_testi_slide_img_cont_wrapper">
										<h4>Victoria Porter <span>[ Director ]</span></h4>
										<p>In collaboration with public partners, lBusiness connects local businesses and job-seeking residents withresources. Our range of programs offers every service from talent recruiting and career development to clinical case mancollaboration</p>
										<img src="images/testi_sig3.png" alt="img">
										<div class="ck_testi_title_line">
											<img src="images/quote3.png" alt="img">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> */}
        {/* ck_testi_main_wrapper End */}
        {/* ck blog wrapper Start */}
        <div className="ck_blog_cake_wrapper float_left">
          <div className="ck_blog_cake_img_overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="ck_heading_center_wrapper ck_heading_center_wrapper_ok float_left">
                  <h4>Check out Blog</h4>
                  <h3>Trending</h3>
                </div>
              </div>
              <div className="col-md-12">
                <div className="ck_blog_slider_wrapper float_left">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="et_left_news_wrapper">
                        <div className="et_left_img_news2">
                          <div className="et_left_img_overlay" />
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p>
                                <i>News, Delivery</i>
                              </p>
                              <div className="heart_box">
                                {" "}
                                <a href="#">
                                  <i className="far fa-heart" />
                                </a>
                              </div>
                              <h4>29-Jan-2019</h4>
                            </div>
                          </div>
                        </div>
                        <div className="et_left_cont_news">
                          <h4>News</h4>
                          <h3>Services - 2019</h3>
                          <h5>29-Jan-2019</h5>
                          <p>
                            This is Photoshop's version of Lorem Ipsum. Proin
                            gravida nibh vel velit auctor aliquet.
                          </p>
                          <h2>
                            <a href="#">Read More</a>{" "}
                            <i className="fa fa-angle-double-right" />{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="et_left_news_wrapper">
                        <div className="et_left_img_news2 et_left_img_news22">
                          <div className="et_left_img_overlay" />
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p>
                                <i>News, Delivery</i>
                              </p>
                              <div className="heart_box">
                                {" "}
                                <a href="#">
                                  <i className="far fa-heart" />
                                </a>
                              </div>
                              <h4>29-Jan-2019</h4>
                            </div>
                          </div>
                        </div>
                        <div className="et_left_cont_news">
                          <h4>News</h4>
                          <h3>Services - 2019</h3>
                          <h5>29-Jan-2019</h5>
                          <p>
                            This is Photoshop's version of Lorem Ipsum. Proin
                            gravida nibh vel velit auctor aliquet.
                          </p>
                          <h2>
                            <a href="#">Read More</a>{" "}
                            <i className="fa fa-angle-double-right" />{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="et_left_news_wrapper">
                        <div className="et_left_img_news2 et_left_img_news23">
                          <div className="et_left_img_overlay" />
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p>
                                <i>News, Delivery</i>
                              </p>
                              <div className="heart_box">
                                {" "}
                                <a href="#">
                                  <i className="far fa-heart" />
                                </a>
                              </div>
                              <h4>29-Jan-2019</h4>
                            </div>
                          </div>
                        </div>
                        <div className="et_left_cont_news">
                          <h4>News</h4>
                          <h3>Services - 2019</h3>
                          <h5>29-Jan-2019</h5>
                          <p>
                            This is Photoshop's version of Lorem Ipsum. Proin
                            gravida nibh vel velit auctor aliquet.
                          </p>
                          <h2>
                            <a href="#">Read More</a>{" "}
                            <i className="fa fa-angle-double-right" />{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="ck_offer_btn ck_service_btn ck_client_btn float_left">
                  {" "}
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ck blog wrapper End */}
        {/* partner wrapper Start*/}
        {/* <div class="ck_partner_inner_main_wrapper float_left">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="ck_heading_center_wrapper ck_heading_center_wrapper_bc float_left">
						<h4>Our Partners</h4>
						<h3>Partners Words</h3>
					</div>
				</div>
				<div class="col-md-12">
					<div class="lr_prt_slider_wrapper">
						<div class="owl-carousel owl-theme">
							<div class="item">
								<div class="lr_prt_img_wrapper">
									<img src="images/p1.jpg" alt="partner_img">
								</div>
							</div>
							<div class="item">
								<div class="lr_prt_img_wrapper">
									<img src="images/p2.jpg" alt="partner_img">
								</div>
							</div>
							<div class="item">
								<div class="lr_prt_img_wrapper">
									<img src="images/p3.jpg" alt="partner_img">
								</div>
							</div>
							<div class="item">
								<div class="lr_prt_img_wrapper">
									<img src="images/p4.jpg" alt="partner_img">
								</div>
							</div>
							<div class="item">
								<div class="lr_prt_img_wrapper">
									<img src="images/p5.jpg" alt="partner_img">
								</div>
							</div>
							<div class="item">
								<div class="lr_prt_img_wrapper">
									<img src="images/p6.jpg" alt="partner_img">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> */}
        {/* partner wrapper End*/}
        {/* cll wrapper Start*/}
        <div className="ck_call_main_wrapper ">
          <div className="container">
            <div className>
              <div className="ck_cll_icon ">
                <p>Your CTA Goes here...</p>
              </div>
            </div>
          </div>
        </div>
        {/* cll wrapper End*/}
        {/* ck footer wrapper Start */}
        <div className="footer_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_about_wrapper float_left">
                  <div className="wrapper_first_image">
                    <a href="index">
                      <h2 style={{ color: "#fff" }}>theifmag</h2>
                    </a>
                  </div>
                  <div className="abotus_content">
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Donec id
                      elit non mi porta gravida at eget metus. Aenean lacinia
                      bibendum nulla sed consectetur.
                      <br />
                      <br />
                      Vestibulum id ligula porta felis euismod semper. pharetra
                      augue. Maecenas faucibus interdum...
                    </p>
                  </div>{" "}
                  <a href="#" className="blog_read">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_blog_wrapper footer_widget3 float_left">
                  <h4>recent posts</h4>
                  <div className="ft_blog_wrapper1">
                    <div className="ft_blog_image">
                      <img src="images/blg1.jpg" className="img-responsive" alt="img" />
                    </div>
                    <div className="ft_blog_text">
                      <p><a href="#">Donec id elit non mi porta gravida </a>
                      </p>
                      <div className="ft_blog_date">22 april, 2019</div>
                    </div>
                  </div>
                  <div className="ft_blog_wrapper1">
                    <div className="ft_blog_image">
                      <img src="images/blg3.jpg" className="img-responsive" alt="img" />
                    </div>
                    <div className="ft_blog_text">
                      <p><a href="#">elit non mi porta  Donec id gravida </a>
                      </p>
                      <div className="ft_blog_date">11 april, 2019</div>
                    </div>
                  </div>
                  <div className="ft_blog_wrapper2">
                    <div className="ft_blog_image">
                      <img src="images/blg2.jpg" className="img-responsive" alt="img" />
                    </div>
                    <div className="ft_blog_text">
                      <p><a href="#">Donec id elit non elit non mi porta </a>
                      </p>
                      <div className="ft_blog_date">12 april, 2019</div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_useful_wrapper footer_widget2 float_left">
                  <h4>get in touch</h4>
                  <div className="contect_form_footer float_left">
                    <input type="text" name="name" placeholder="joahn doe" />
                    <i className="fas fa-user-alt" />
                  </div>
                  <div className="contect_form_footer float_left">
                    <input type="text" name="Email" placeholder="Email ID" />
                    <i className="fas fa-comment" />
                  </div>
                  <div className="contect_form_footer float_left">
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your Message..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="footer_btn float_left">

                    <a href="#">send message</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_contact_wrapper footer_widget2 float_left">
                  <h4>contact info </h4>
                  <ul>
                    <li>
                      <span>email: </span>
                      <p>
                        <a href="#"> theifmag@gmail.com</a>
                        <br />
                      </p>
                    </li>


                    <h4>Follow Us </h4>

                    <h5 style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                      <a
                        href="#"
                        style={{
                          flex: "1",
                        }}
                      >
                        <i className="fab fa-facebook" />
                      </a>

                      <a
                        href="#"
                        style={{
                          flex: "1",
                        }}
                      >
                        <i className="fab fa-twitter" />
                      </a>

                      <a
                        href="#"
                        style={{
                          flex: "1",
                        }}
                      >
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                      </a>

                      <a
                        href="#"
                        style={{
                          flex: "1",
                        }}
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </h5>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2_bottom_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="btm_foter_box">
                  <p>
                    Copyright © 2020 <a href="#"> Theifmag</a> Designed and
                    Developed by<a href="#"> The Brandwick</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* st login wrapper Start */}

        {/* <div className="modal fade st_pop_form_wrapper" id="myModa3" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal">×</button>
              <div className="st_pop_form_heading_wrapper float_left">
                <h3>Sign Up</h3>
              </div>
              <div className="st_profile_input float_left">
                <input type="text" placeholder="Email / Mobile Number" />
              </div>
              <div className="st_profile_input st_profile__pass_input_pop float_left">
                <input type="password" placeholder="Password" />
              </div>
              <div className="st_form_pop_fp float_left">
                <h3><a href="#" data-toggle="modal" data-target="#myModa2" target="_blank">Forgot Password?</a></h3>
              </div>
              <div className="st_form_pop_or_btn float_left">
                <h4>or</h4>
              </div>
              <div className="st_form_pop_facebook_btn float_left">	<a href="#"><i className="fab fa-facebook-f" /> Connect with Facebook</a>
              </div>
              <div className="st_form_pop_gmail_btn float_left">	<a href="#"><i className="fab fa-google-plus-g" /> Connect with Google</a>
              </div>
              <div className="st_form_pop_signin_btn st_form_pop_signin_btn_signup float_left">
                <h5>I agree to the <a href="#">Terms &amp; Conditions</a> &amp; <a href="#">Privacy Policy</a></h5>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Homeblog;