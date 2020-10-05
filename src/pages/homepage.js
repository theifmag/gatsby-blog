import React from "react";
import "../styles/homepage.css";
import Navbar from "../components/navbar/Navbar";
import Helmet from "react-helmet";
import Layout from "../components/layout";

import Homeblog from "./Homeblog";
import Topbanner from '../components/Topbanner'

export default function Homepage() {
  return (
    <Layout>
      <Helmet>
        <title>The IfMag</title>
        <meta
          name="description"
          content={"Myblog The Best Blogs on every topic"}
        />
      </Helmet>


<Topbanner />
<Navbar />
     

      <div
        style={{
          marginTop: "2vh",
        }}
      >
        <Homeblog />
      </div>
    </Layout>
  );
}
