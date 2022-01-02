import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { threePicsAside, allFourPics, smallPic, bigPic, specs, picsAndSpecs, formPart, formPartLeft } from '../../page.module.css';

const IPhonePage = ({ data: { wpIPhone: { title, iphoneMeta: iphone } } }) => {

  const headPicture = getImage(iphone.headPicture.localFile);
  const picture1 = getImage(iphone.pictures.picture1.localFile);
  const picture2 = getImage(iphone.pictures.picture2.localFile);
  const picture3 = getImage(iphone.pictures.picture3.localFile);

  //De laatste 5 in onderstaande array zijn niet required in de backend. Alle andere wel.
  //Bij de eerste iPhone op de pagina's van iPhones (Apple iPhone 7 32gb BLACK) zijn
  //de laatste 5 velden bewust niet ingevuld. Deze 5 velden zullen dus  ook niet verschijnen
  //in de front-end (hier => op de detailpagina van een iphone).
  let oneiPhoneDetailInformationArray = [
    { name: "Battery", content: iphone.battery },
    { name: "Camera", content: iphone.camera },
    { name: "Front camera", content: iphone.frontCamera },
    { name: "Operating system", content: iphone.operatingSystem },
    { name: "Price", content: iphone.price },
    { name: "Processorcores", content: iphone.processorCores },
    { name: "Ram memory", content: iphone.ramMemory },
    { name: "Screen size", content: iphone.screenSize },
    { name: "Storage", content: iphone.storage },
    { name: "Video resolution", content: iphone.videoResolution },

    { name: "Wireless charging", content: iphone.wirelessCharging },
    { name: "Simcard lock", content: iphone.simcardLock },
    { name: "Dual sim", content: iphone.dualSim },
    { name: "Wifi", content: iphone.wifi },
    { name: "Bluetooth", content: iphone.bluetooth }
  ];

  return (
    <Layout>

      <h1>{title}</h1>
      <div >{iphone.description}</div> <br />

      <div className={picsAndSpecs} >
        <div className={allFourPics} >
          <div className={threePicsAside} >
            <GatsbyImage className={smallPic} image={picture1} alt={`image of ${title}`} />
            <GatsbyImage className={smallPic} image={picture2} alt={`image of ${title}`} />
            <GatsbyImage className={smallPic} image={picture3} alt={`image of ${title}`} />
          </div>
          <GatsbyImage className={bigPic} image={headPicture} alt={`image of ${title}`} />
        </div>

        <div className={specs} ><b><u>Specs:</u></b>
          {oneiPhoneDetailInformationArray.map((info, index) =>
            info.content &&
            <div key={index} className={formPart} >
              <div className={formPartLeft} >{info.name}:</div>
              <div>{info.content}</div>
            </div>
          )}
        </div>
      </div>

    </Layout>
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
`;