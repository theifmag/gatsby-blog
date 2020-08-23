import React from 'react'
import '../styles/homepage.css'
import Navbar from '../components/navbar/Navbar'
import Layout from "../components/layout"

export default function Homepage() {
    return (
<Layout>
   <Navbar />
        <div className="homecontainer">
            <div className="leftcontainer">
            <h1 className="mainheading">The Future is Feminist.</h1>


            <div className="line-home"></div>

            <p className="mainpara">
            It's not my responsibility to be beautiful. I'm not alive for that purpose. My existence is not about how desirable you find me.
            </p>

            <button className="cta-style">Explore</button>

            </div>
            <div className="rightcontainer">

            </div>
        </div>
        </Layout>
     
       
    )
}
