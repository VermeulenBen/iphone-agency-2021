import React from "react";
import { Link } from "gatsby";
import { header, logo, shimmer, menubtn, menuicon, navicon, menu, activeHeader, logoImg } from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <div >
      <div className={header}>
        <Link to="/" className={`${logo} ${shimmer}`}>
          iPhone Agency
          <StaticImage className={logoImg} src="../images/iphoneLogo.png" />
        </Link>

        <input className={menubtn} type="checkbox" id="menu-btn" />
        <label className={menuicon} htmlFor="menu-btn"><span className={navicon}></span></label>

        <ul className={menu}>
          <li><Link activeClassName={activeHeader} to="/" >Home</Link></li>
          <li><Link activeClassName={activeHeader} to="/iphones" >iPhones</Link></li>
          <li><Link activeClassName={activeHeader} to="/shops" >Shops</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;