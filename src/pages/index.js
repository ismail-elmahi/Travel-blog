import React from "react"
import {Link} from "gatsby"
import './index.css'
import Featured from '../components/Featured/index'
import Home from '../components/Home/index';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/footer/'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Featured />
    <Home />
    <Link to="/blog/all" className="viewmore">View More</Link>
    <Footer />
  </Layout>
)

export default IndexPage
