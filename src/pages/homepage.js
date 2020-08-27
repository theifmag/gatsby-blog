import React from "react";
import "../styles/homepage.css";
import Navbar from "../components/navbar/Navbar";
import Helmet from 'react-helmet' ;
import Layout from "../components/layout";

export default function Homepage() {
  return (
    <Layout>

<Helmet>
        <title>MyBlog</title>
        <meta name="description" content={"Myblog The Best Blogs on every topic"} />
      </Helmet>

      <Navbar />
      <div className="homecontainer">
        <div className="leftcontainer">
          <h1 className="mainheading">The Future is Feminist.</h1>
          <div className="line-home"></div>
          <p className="mainpara">
            My existence is not about how desirable you find me.
           Not Anymore.
          </p>
          <button className="cta-style">Explore</button>
        </div>
        <div className="rightcontainer">
          {/* <img src={require('../../static/assets/home2.png')} /> */}
          <img src={require('../../static/assets/OK.gif')} />
        </div>
      </div>
    </Layout>
  );
}
