/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./navbar/navbar"
import SideDrawer from './navbar/mobile/sideDrawer'
// import Header from "./header"

import "./layout.css"
// import styles from "../styles/stylesheet.module.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const [showSideDrawer, setShowSideDrawer] = useState(false);

const sideDrawerClosedHandler = () => {
  setShowSideDrawer( false );
}


const sideDrawerToggleHandler = () => {
  setShowSideDrawer( !showSideDrawer );
}
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
      // style={{height:'100vh'}}
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `0 1.0875rem 1.45rem`,
      // }}
      >
        <main className="main">
          <script src="/__/firebase/init.js"></script>
          <NavBar open={showSideDrawer} closed={sideDrawerClosedHandler} drawerToggleClicked={sideDrawerToggleHandler} />
          <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout