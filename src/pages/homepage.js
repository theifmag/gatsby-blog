import React from "react";
import "../styles/homepage.css";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/layout";

export default function Homepage() {
  return (
    <Layout>
      <Navbar />
      <div className="homecontainer">
        <div className="leftcontainer">
          <h1 className="mainheading">The Future is Feminist.</h1>
          <div className="line-home"></div>
          <p className="mainpara">
            My existence is not about how desirable you find me.
            It's about me.
          </p>
          <button className="cta-style">Explore</button>
        </div>
        <div className="rightcontainer">
          <img src={require('../../static/assets/home2.png')} />
        </div>
      </div>
    </Layout>
  );
}
