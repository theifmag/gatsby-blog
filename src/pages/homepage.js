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
            <h1 className="mainheading">Tropical Plants</h1>


            <div className="line-home"></div>

            <p className="mainpara">
                Tropical Rainforest are the homes to half of the flora & Fauna of the world.
                Let's learn about them more today.
            </p>

            <button className="cta-style">Explore</button>

            </div>
            <div className="rightcontainer">

            </div>
        </div>
        </Layout>
     
       
    )
}
