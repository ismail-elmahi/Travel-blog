import React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import "./contact.css"
const NotFond = () => {
  return (
    <Layout>
      <div className="contact__header"></div>
      <div className="contact__thanks">
        <h1>This Page Not Found .</h1>
        <button className="btn__med" onClick={() => navigate("/")}>
          Back to home
        </button>
      </div>
    </Layout>
  )
}

export default NotFond
