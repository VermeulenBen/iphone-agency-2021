module.exports = {
  siteMetadata: {
    title: "iPhone Agency",
    description: "iPhone Agency was founded in 2021 by Vermeulen Ben.",
    author: "@VermeulenBen",
    address: "Ellermanstraat 33, 2060 Antwerp",
    rpr: "RPR Antwerp 1234.467.890",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://iphone-agency.local/graphql`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/components/`
      },
    },
  ]
};