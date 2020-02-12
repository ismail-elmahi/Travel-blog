import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from '../components/Nav/index'
import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
     <main>
       <Nav />
       {children}
       
       </main>
    </>
  )
}
 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
