import React from "react";
import { facebook, instagram, twitter, footer, socialMedia } from './footer.module.css';

const Footer = ({ siteMetadata }) => {
    return (
        <div className={footer} >
            Copyright © {new Date().getFullYear()} {siteMetadata.title} - {siteMetadata.address} - {siteMetadata.rpr} -

            <div className={socialMedia} >
                <a className={facebook} href={siteMetadata.facebook} target="_blank" />
                <a className={instagram} href={siteMetadata.instagram} target="_blank" />
                <a className={twitter} href={siteMetadata.twitter} target="_blank" />
            </div>
        </div>

    );
}

export default Footer;