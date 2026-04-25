import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `RizkyDarm Portfolio`,
    siteUrl: `https://rizkydarm.github.io`,
    description: 'All about Rizky Darmawan portfolio',
    author: `Rizky Darmawan`,
  },
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RizkyDarm Portfolio`,
        short_name: `RizkyDarm-Port`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#19D9B6`,
        icon: `static/favicon.png`,
      },
    },
  ],
}

export default config
