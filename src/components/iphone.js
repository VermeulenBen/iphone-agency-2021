import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IPhone = ({ iphone }) => {
    const image = getImage(iphone.iphoneMeta.headPicture.localFile);

    return (
        <Link to={`/iphones/${iphone.slug}`} key={iphone.id} >
            <div>
                <div>{iphone.title}</div>
                <GatsbyImage image={image} alt={iphone.iphoneMeta.headPicture.altText} />
            </div>
        </Link>
    );
}

export default IPhone;