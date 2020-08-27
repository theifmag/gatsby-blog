import React from 'react'
import Layout from "../components/layout"
import Navbar from '../components/navbar/Navbar'
import Helmet from 'react-helmet'

export default function about() {
    return (
        <Layout>
            <Helmet>
        <title>MyBlog || About Us</title>
        <meta name="description" content={"About us page of Myblog"} />
      </Helmet>
            <Navbar />
            <div >
            <h3> This is about page </h3>
            </div>
      </Layout>
    )
}
