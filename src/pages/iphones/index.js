import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import IPhone from "../../components/iphone";
import { allPhones, paddingTop, titleCss, description, headImage } from '../../page.module.css';


const Iphones = ({ data: { wpPage: { title, iphonesPage }, allWpIPhone: { edges } } }) => {
  const pageHeaderImage = getImage(iphonesPage.headerIphones.bannerPicture.localFile);

  return (
    <Layout>
      <h1 className={titleCss} >{title}</h1>
      <GatsbyImage className={headImage} image={pageHeaderImage} alt={`image of ${title}-pageheader`} />

      <div className={`${description} ${paddingTop}`} >{iphonesPage.headerIphones.description}</div>

      <div className={allPhones} > {edges.map(({ node }) => <IPhone key={node.id} iphone={node} />)} </div>
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