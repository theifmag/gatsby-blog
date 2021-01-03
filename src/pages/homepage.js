import React from "react";
import "../styles/homepage.css";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import Homeblog from "./homeblog";

export default function Homepage(props) {
  return (
    <Layout>
      <Helmet>
        <title>The Intersectional Feminist</title>
        <meta
          name="description"
          content={"The If Mag The Best Blogs on every topic"}
        />
      </Helmet>

      <Navbar />

      <div>
        <Homeblog />
      </div>
    </Layout>
  );
}
