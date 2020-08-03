/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Site config here */
  siteMetadata: {
    title: "In Home K9 Training",
    titleTemplate: "%s",
    description: "Dorner Canine Training. Professional, Personal, Proven.",
    siteUrl: "http://inhomek9training.com", // No trailing slash allowed!
    image: "/images/favicon.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat\:300,400,500,600,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `http://inhomek9training.com`,
        sitemap: `http://inhomek9training.com/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
