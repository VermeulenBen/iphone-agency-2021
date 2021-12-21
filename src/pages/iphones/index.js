import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import IPhone from "../../components/iphone";

const Iphones = ({ data: { wpPage: { title, iphonesPage }, allWpIPhone: { edges } } }) => {
  const pageHeaderImage = getImage(iphonesPage.headerIphones.bannerPicture.localFile);

  return (
    <Layout>

      <h1>{title}</h1>
      <GatsbyImage image={pageHeaderImage} alt={`image of ${title}-pageheader`} />
      <div>{iphonesPage.headerIphones.description}</div>

      <div>
        {edges.map(({ node }) => <IPhone iphone={node} />)}
      </div>

    </Layout>
  );
}

export default Iphones;

export const data = graphql`
query {
    wpPage(slug: {eq: "iphones"}) {
      id
      title
      iphonesPage {
        headerIphones {
          description
          bannerPicture {
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
    allWpIPhone {
      edges {
        node {
          title
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
          id
          slug
        }
      }
    }
  }
`;