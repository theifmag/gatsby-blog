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
           Not Anymore...
          </p>
          <button className="cta-style">Explore</button>
        </div>
        <div className="rightcontainer">
   
        {/* <img src={'https://images.unsplash.com/photo-1524940341013-28b7a45da417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80'} loading="lazy" /> */}

        <img src={'https://images.unsplash.com/photo-1579117517382-78401a144da5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'} loading="lazy" />





          
        </div>
      </div>
    </Layout>
  );
}
