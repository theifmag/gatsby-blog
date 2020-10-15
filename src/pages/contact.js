import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import contactStyles from "../styles/contactStyles.module.scss";
import Footer from '../components/footer' ;

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      
      <Navbar />
      <div className={contactStyles.divider}></div>

      <div className={contactStyles.mainContainer}>
        {/* <div className={contactStyles.imageContainer}>
          <img src="https://image.freepik.com/free-vector/protesting-women-fighting-rights_74855-7830.jpg" />
        </div> */}

        <div className={contactStyles.innerContainer}>
          <div className={contactStyles.leftContainer}>
            <h3 className={contactStyles.formHeading}>Send us a message</h3>
            <form
              className={contactStyles.form}
              style={{
                marginTop: "5vh",
              }}
              name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
              <input
                placeholder="Your Name"
                name="your name"
                type="text"
                className={contactStyles.formInput}
              />
              <input
                placeholder="Email ID"
                name="email"
                type="email"
                className={contactStyles.formInput}
              />
              <input
                placeholder="Your Message..."
                type="textarea"
                name="Message"
                className={contactStyles.formInput}
              />
              <button className={contactStyles.sendButton} type="submit">SEND</button>
            </form>

            <div className={contactStyles.contactInfoDiv}>
              <div className={contactStyles.textSection}>
                <h4 className={contactStyles.textHeading}>Email</h4>
                <h6 className={contactStyles.textInnerText}>
                  theifmag@gmail.com
                </h6>
                {/* <h6 className={contactStyles.textInnerText}>myblog@example.com</h6> */}
              </div>

              <div className={contactStyles.textSection}>
                <h4 className={contactStyles.textHeading}>Social Media</h4>
                <h5 className={contactStyles.iconBox}>
                  <a
                    href="https://www.facebook.com/theifmag"
                    target="_blank"
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
                    href="https://www.instagram.com/theifmag/"
                    target="_blank"
                    style={{
                      flex: "1",
                    }}
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div className={contactStyles.rightContainer}>
            <img
              src={require("../images/contact2.jpeg")}
              loading="lazy"
            />
          </div>






        </div>
      </div>
<Footer />

    </Layout>
  );
};



export default ContactPage;

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
