import React from "react";
import "../styles/homepage.css";
import Helmet from "react-helmet";


import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar'
import Homeblog from './homeblog'


export default function Homepage(props) {
  return (
    <Layout>
      <Helmet>
        <title>The IfMag</title>
        <meta
          name="description"
          content={"Myblog The Best Blogs on every topic"}
        />
      </Helmet>



<Navbar />

      

<div>
        <Homeblog />
       
      </div>
    </Layout>
  );
}
