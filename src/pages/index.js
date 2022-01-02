import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import IPhone from "../components/iphone";
import { titleCss, description, imagesInRow, headImage } from '../page.module.css';

const IndexPage = ({ data: { wpPage: { homePage } } }) => {
  const image = getImage(homePage.headerHome.bannerPicture.localFile);

  return (
    <Layout>
      <h1 className={titleCss} >{homePage.headerHome.title}</h1>
      <div className={description} >{homePage.headerHome.description}</div>
      <GatsbyImage className={headImage} image={image} alt={homePage.headerHome.bannerPicture.altText} />

      <h1 className={titleCss}>Newest iPhones</h1>
      <h2 className={titleCss}>{homePage.newestIphones.title}</h2>
      <div className={description}>{homePage.newestIphones.description}</div>
      <div className={imagesInRow} >{homePage.newestIphones.iphones.map(iphone => <IPhone key={iphone.id} iphone={iphone} />)}</div>
    </Layout>
  );
}

export default IndexPage;

export const data = graphql` 
{
  wpPage(slug: {eq: "home"}) {
    homePage {
      headerHome {
        bannerPicture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        description
        title
      }
      newestIphones {
        description
        title
        iphones {
          ... on WpIPhone {
            id
            title
            slug
            iphoneMeta {
              headPicture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
