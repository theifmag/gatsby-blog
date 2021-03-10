import React from "react";
import { Link } from "gatsby";

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
                    <h2 style={{ color: "#fff" }}>The IF Magazine</h2>
                  </a>
                </div>
                <div className="abotus_content">
                  <p>
                    IF is a pioneer online magazine dedicated to
                    intersectionality.
                    <br />
                    We are ambitious and hope to be a significant entity in
                    promoting a better future through inclusivity and feminism
                    for everyone, regardless of their identities.
                    <br />
                    <br />
                    Because IF not now, then when?
                  </p>
                </div>{" "}
                <Link to="/about" className="blog_read">
                  read more <i className="fas fa-long-arrow-alt-right" />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 col-sm-12">
              <div className="footer_widget footer_useful_wrapper footer_widget2 float_left">
                <h4>get in touch</h4>

                <form
                  name="contact-footer"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  style={{ textTransform: "lowercase !important" }}
                >
                  <input
                    type="hidden"
                    name="form-name-footer"
                    value="contact-footer"
                  />
                  <div className="contect_form_footer float_left">
                    <input
                      type="text"
                      name="person's name"
                      placeholder="your name"
                    />
                    <i className="fas fa-user-alt" />
                  </div>
                  <div className="contect_form_footer float_left">
                    <input
                      type="text"
                      name="person's Email"
                      placeholder="Email ID"
                    />
                    <i className="fas fa-comment" />
                  </div>
                  <div className="contect_form_footer float_left">
                    <textarea
                      name="person's message"
                      rows={4}
                      style={{ textTransform: "lowercase !important" }}
                      placeholder=" Message..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="footer_btn float_left">
                    <div className="ck_new_btn " style={{ marginTop: "-15px" }}>
                      <button
                        type="submit"
                        style={{
                          marginTop: "20px",
                          background: "#ee4c7c",
                          color: "white",
                          border: "none",
                          padding: "7px 10px"
                        }}
                      >
                        Send Message
                      </button>
                    </div>
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
                      <a
                        href="mailto:theifmag@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Email : theifmag@gmail.com
                      </a>
                      <br />
                    </p>
                  </li>

                  <h4>Follow Us </h4>

                  <h5
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "60%"
                    }}
                  >
                    <a
                      href="https://www.facebook.com/theifmag"
                      rel="noreferrer"
                      target="_blank"
                      style={{
                        flex: "1"
                      }}
                    >
                      <i className="fab fa-facebook" />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/theifmag"
                      rel="noreferrer"
                      target="_blank"
                      style={{
                        flex: "1"
                      }}
                    >
                      <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/theifmag/"
                      rel="noreferrer"
                      target="_blank"
                      style={{
                        flex: "1"
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
                  ©<span> The IF Magazine.</span> Designed and Developed by
                  <a
                    href="https://www.thebrandwick.com/"
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      color: "#ee4c7c"
                    }}
                  >
                    {" "}
                    The Brandwick
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
