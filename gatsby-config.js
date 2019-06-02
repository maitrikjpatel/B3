
const siteInfo = require("./src/utilities/config/siteInfo");

module.exports = {
  siteMetadata: {
    title: siteInfo.siteTitle,
    author: siteInfo.siteName,
    description: siteInfo.siteDescription,
    siteUrl: siteInfo.siteUrl,
    image: siteInfo.siteImage,
  },

  plugins: [
    // HTML SEO Head
    `gatsby-plugin-react-helmet`,
    
    // SASS 
    'gatsby-plugin-sass',
    
    // 'gatsby-plugin-offline'
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: ['300', '400', '500', '600', '700']
          },
          {
            family: `Work Sans`,
            variants: ['300', '400', '500', '600', '700']
          }
        ],
      },
    },
    
    // Manifest 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteInfo.siteTitle,
        short_name: siteInfo.manifestShortName,
        start_url: siteInfo.pathPrefix,
        background_color: siteInfo.manifestBackgroundColor,
        theme_color: siteInfo.manifestThemeColor,
        display: siteInfo.manifestDisplay,
        icon: siteInfo.siteLogo,
        icons: [
          {
            src: "/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    }, 
    
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: siteInfo.googleAnalyticsID,
      },
    }, 

    // Site work offline
    `gatsby-plugin-offline`,
    
    // Site map
    `gatsby-plugin-sitemap`,

    // FullStory 
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: siteInfo.fullstoryID,
      },
    },  
  ],
}
