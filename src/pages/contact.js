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
              name="contact" method="POST" data-netlify="true"
            >
              <input
                placeholder="First Name"
                type="text"
                className={contactStyles.formInput}
              />
              <input
                placeholder="youremail@gmail.com"
                type="email"
                className={contactStyles.formInput}
              />
              <input
                placeholder="your Message"
                type="textarea"
                className={contactStyles.formInput}
              />
              <button className={contactStyles.sendButton}>SEND</button>
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
              </div>
            </div>
          </div>

          <div className={contactStyles.rightContainer}>
            <img
              src={require("../../static/assets/Messaging fun.gif")}
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
