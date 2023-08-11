/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["article", "company", "author", "project"],
  singleTypes: [],
  remoteFileHeaders: {
    Referer: "https://madstone.dev",
  },
};

module.exports = {
  siteMetadata: {
    title: `MadStoneDev`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-BCL5N11Y48"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    "gatsby-plugin-postcss",
  ],
};
