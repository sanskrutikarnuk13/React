import { Link } from "react-router-dom"
import  Layout  from "../components/Layout"
import image from "../images/banner1.avif"
import "../styles/Home.css"

import React from 'react'

const Home = () => {
  return (
  <div>
      <Layout>
        <div className="home" style={{backgroundImage:`url(${image})`}}>
          <div className="homeContainer">
            <h1>Food Website</h1>
            <p>Best Food in India</p>
            <Link to={"/menu"}><button>Order Now</button></Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home