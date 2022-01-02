import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { container, title, picture, divPicture } from './iphone.module.css';

const IPhone = ({ iphone }) => {
    const image = getImage(iphone.iphoneMeta.headPicture.localFile);

    return (
        <Link className={container} to={`/iphones/${iphone.slug}`} key={iphone.id} >
            <div className={title} >{iphone.title}</div>
            <div className={divPicture} > <GatsbyImage className={picture} image={image} alt={iphone.iphoneMeta.headPicture.altText} /> </div>
        </Link>
    );
}

export default IPhone;