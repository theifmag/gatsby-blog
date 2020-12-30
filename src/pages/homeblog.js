import React from "react";
import Latestblogcard from "../components/cards/latestblogcard";
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
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Editorcard from "../components/cards/editorcard";
import Footer from "../components/footer";

const Homeblog = ({}) => {
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
            <div className="col-lg-6 col-md-6 col-sm-12 main-text-div">
              <h2
                style={{
                  fontSize: "30px",
                  color: "#ee4c7c",
                  fontFamily: "Bad Script"
                }}
              >
                {" "}
              </h2>
              {/* <h3>From our best <span>Curators</span></h3>  */}
              <h4
                style={{
                  marginTop: "5vh",
                  marginBottom: "2vh"
                }}
              >
                If we aren't intersectional, some of us, the most vulnerable,
                are going to fall through the cracks.
              </h4>
              <strong>-Kimberlé Williams Crenshaw</strong>
              <ul>
                <li>
                  <div className="ck_new_btn ">
                    <Link href="/about">Read More</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              style={{
                overflow: "hidden",
                objectFit: "contain"
              }}
            >
              <center>
                <img
                  src={require("../images/Homeimage2.jpg")}
                  alt="img"
                  style={{
                    maxWidth: "430px",
                    width: "100%"
                  }}
                />
              </center>
            </div>
          </div>
        </div>

        <div className="ck_bc_main_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="ck_heading_center_wrapper ck_heading_center_wrapper_bc float_left">
                  {/* <h4>Articles</h4> */}
                  <h3>Our Latest Articles</h3>
                </div>
              </div>
            </div>
          </div>

          <Latestblogcard />
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
                  <h3
                    style={{
                      color: "black"
                    }}
                  >
                    Editor's Choice
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <Editorcard style={{ zIndex: "100" }} />
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
        {/* <div className="ck_call_main_wrapper ">
          <div className="container">
            <div>
              <div className="ck_cll_icon ">
                <p>Your CTA Goes here...</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* cll wrapper End*/}
        {/* ck footer wrapper Start */}

        <Footer />

        {/* <div className="footer_wrapper float_left">
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
                    IF is a pioneer online magazine dedicated to intersectionality. 
                    <br/>
                    
                    We are ambitious and hope to be a significant entity in promoting a
                     better future through inclusivity and feminism for everyone, 
                     regardless of their identities.
                      <br />
                      <br/>
                      Because IF not now, then when?
                    </p>
                  </div>{" "}
                  <Link href="/about" className="blog_read">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                </div>
              </div>
         
              <div className="col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="footer_widget footer_useful_wrapper footer_widget2 float_left">
                  <h4>get in touch</h4>
                  <form name="contact" method="POST" data-netlify="true">
                  <div className="contect_form_footer float_left">
                    <input type="text" name="name" placeholder="john doe" />
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
                  </form>
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
                       href="https://www.facebook.com/theifmag" target="_blank"
                        style={{
                          flex: "1",
                        }}
                      >
                        <i className="fab fa-facebook" />
                      </a>

                  
                      <a
                        href="https://www.linkedin.com/company/theifmag"
                        target="_blank"
                        style={{
                          flex: "1",
                        }}
                      >
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                      </a>

                      <a
                       href="https://www.instagram.com/theifmag/" target="_blank"
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
        </div> */}
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
};

export default Homeblog;
