module.exports = {
  siteMetadata: {
    title: "BakeBatterButter",
    author: "Maitrik Patel",
    description: "Bake Custom Cake"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
  ],
}
