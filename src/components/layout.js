import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import { container, withoutFooter } from './layout.module.css';
import { graphql, useStaticQuery } from "gatsby";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        address
        author
        description
        facebook
        instagram
        rpr
        twitter
      }
    }
  }  
  `);

  return (
    <div className={container} >

      <div className={withoutFooter} >
        <Header title={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>

      <Footer siteMetadata={data.site.siteMetadata} />

    </div>
  )
}

export default Layout;
