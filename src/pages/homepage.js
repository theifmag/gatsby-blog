import React from "react";
import "../styles/homepage.css";
import navbar from '../components/navbar/navbar'
import Helmet from "react-helmet";
import layout from "../components/layout";
import homeblog from "./homeblog";


export default function homepage() {
  return (
    <Layout>
      <Helmet>
        <title>The IfMag</title>
        <meta
          name="description"
          content={"Myblog The Best Blogs on every topic"}
        />
      </Helmet>

      
      <navbar />

      <div
        style={{
          marginTop: "2vh",
        }}
      >
        <homeblog />
      </div>
    </Layout>
  );
}
