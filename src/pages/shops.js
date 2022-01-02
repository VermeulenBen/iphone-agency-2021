import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { iframe, options, label, select, shopsContainer, titleCss } from '../page.module.css';

const Shops = ({ data: { wpPage: { shopsPage: { locations }, title } } }) => {
  const [getLocation, setLocation] = React.useState();

  return (
    <Layout>
      <div className={shopsContainer}>
        <h1 className={titleCss} >{title}</h1>
        <div className={options} >

          < select className={select} defaultValue="Choose a location" onChange={(event) => setLocation(event.target.value)}>
            <option value="Choose a location" disabled>Choose a location</option>
            <option value={locations.location1.onmap}>{locations.location1.city} </option>
            <option value={locations.location2.onmap}>{locations.location2.city} </option>
            <option value={locations.location3.onmap}>{locations.location3.city} </option>
            <option value={locations.location4.onmap}>{locations.location4.city} </option>
            <option value={locations.location5.onmap}>{locations.location5.city} </option>
          </select>
        </div>

        {getLocation && <iframe className={iframe} src={getLocation} title="IphoneShopsIframe" ></iframe>}
      </div>
    </Layout>
  );
}

export default Shops;

export const data = graphql`
query {
    wpPage(slug: {eq: "shops"}) {
      title
      shopsPage {
        locations {
          location1 {
            city
            onmap
          }
          location2 {
            city
            onmap
          }
          location3 {
            city
            onmap
          }
          location4 {
            city
            onmap
          }
          location5 {
            city
            onmap
          }
        }
      }
    }
  }
`;