import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <div>
            

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
        </div>


        </div>
    )
}
