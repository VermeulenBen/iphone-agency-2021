import React from "react";
import { Link } from "gatsby";
import { header, headerName, shimmer, activeLink } from "./header.module.css"

const Header = ({ title }) => {
  return (
    <div className={header}>
      <div className={`${headerName} ${shimmer}`}>{title}</div>
      <ul>
        <li><Link to="/" activeClassName={activeLink}>Home</Link></li>
        <li><Link to="/iphones" activeClassName={activeLink}>iPhones</Link></li>
      </ul>
    </div>
  );
}

export default Header;