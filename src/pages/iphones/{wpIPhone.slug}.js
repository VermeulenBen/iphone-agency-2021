import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IPhonePage = ({ data: { wpIPhone: { title, iphoneMeta: iphone } } }) => {

  const headPicture = getImage(iphone.headPicture.localFile);
  const picture1 = getImage(iphone.pictures.picture1.localFile);
  const picture2 = getImage(iphone.pictures.picture2.localFile);
  const picture3 = getImage(iphone.pictures.picture3.localFile);

  return (
    <div>
      <Layout>
        <h1>{title}</h1>

        <GatsbyImage image={headPicture} alt={`image of ${title}`} />
        <GatsbyImage image={picture1} alt={`image of ${title}`} />
        <GatsbyImage image={picture2} alt={`image of ${title}`} />
        <GatsbyImage image={picture3} alt={`image of ${title}`} />

        <div>{iphone.description}</div> <br />

        <div><b>Specs:</b></div>
        <div>Battery: {iphone.battery}</div>
        <div>Camera: {iphone.camera}</div>

        <div>Front camera:{iphone.frontCamera}</div>
        <div>Operating system: {iphone.operatingSystem}</div>
        <div>Price: {iphone.price}</div>
        <div>Processorcores: {iphone.processorCores}</div>
        <div>Ram memory: {iphone.ramMemory}</div>
        <div>Screen size: {iphone.screenSize}</div>
        <div>Storage: {iphone.storage}</div>
        <div>Video resolution: {iphone.videoResolution}</div>

        {iphone.wirelessCharging && <div>Wireless charging: {iphone.wirelessCharging}</div>}
        {iphone.simcardLock && <div>Simcard lock: {iphone.simcardLock}</div>}
        {iphone.dualSim && <div>Dual sim: {iphone.dualSim}</div>}
        {iphone.wifi && <div>Wifi: {iphone.wifi}</div>}
        {iphone.bluetooth && <div>Bluetooth: {iphone.bluetooth}</div>}

      </Layout>
    </div>
  );
}

export default IPhonePage;

export const data = graphql`
query MyQuery ($id: String) {
    wpIPhone(id: {eq: $id}) {
      iphoneMeta {
        battery
        bluetooth
        camera
        description
        dualSim
        frontCamera
        headPicture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        operatingSystem
        price
        processorCores
        processorType
        ramMemory
        screenSize
        simcardLock
        storage
        videoResolution
        wifi
        wirelessCharging
        pictures {
          picture1 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture2 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture3 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
      title
    }
  }
`