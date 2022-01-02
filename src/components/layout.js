import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import { container, main } from './layout.module.css';

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
      <Header title={data.site.siteMetadata.title} />
      <main className={main} >{children}</main>
      <Footer siteMetadata={data.site.siteMetadata} />
    </div>
  )
}

export default Layout;
