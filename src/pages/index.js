import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import IPhone from "../components/iphone";

const IndexPage = ({ data: { wpPage: { homePage } } }) => {
  const image = getImage(homePage.headerHome.bannerPicture.localFile);

  return (
    <Layout>

      <h1>{homePage.headerHome.title}</h1>
      <div>{homePage.headerHome.description}</div>
      <div> <GatsbyImage image={image} alt={homePage.headerHome.bannerPicture.altText} /> </div>

      <h1>Newest iPhones</h1>
      <h1>{homePage.newestIphones.title}</h1>
      <div>{homePage.newestIphones.description}</div>
      <div>{homePage.newestIphones.iphones.map(iphone => <IPhone iphone={iphone} />)}</div>

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
