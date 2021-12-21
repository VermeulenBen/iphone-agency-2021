import React from "react";
import { facebook, instagram, twitter, footer } from './footer.module.css';

const Footer = ({ siteMetadata }) => {
    return (
        <div className={footer} >
            Copyright © {new Date().getFullYear()} {siteMetadata.title} - {siteMetadata.address} - {siteMetadata.rpr}

            <a className={facebook} href={siteMetadata.facebook} />
            <a className={instagram} href={siteMetadata.instagram} />
            <a className={twitter} href={siteMetadata.twitter} />
        </div>

    );
}

export default Footer;