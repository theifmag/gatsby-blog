import React from "react";
import "../styles/homepage.css";
import Navbar from "../components/navbar/Navbar";
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
