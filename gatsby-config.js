module.exports = {
  siteMetadata: {
    title: `Meanwhile`,
    author: `Ben Thow`,
    description: `Practical Spirituality`,
    siteUrl: `https://meanwhile.org.au`,
    social: {
     instagram: `meanwhile.org.au`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resources`,
        name: `resources`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
          },
	  {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
  	{
	    resolve: `gatsby-plugin-google-fonts`,
	    options: {
        fonts: [
        `Lora:400,700,400italic,700italic`,
        `Bree\+Serif:400`, // Meanwhile title
        `Open\+Sans\:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800` 
        ]
      }
    },
    `gatsby-plugin-feed`, //RSS Generator
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meanwhile Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon/mw_yellow_icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
      endpoint: 'https://thow.us3.list-manage.com/subscribe/post?u=473a81159c237f9843220f4ef&amp;id=fe5d985cb8', // add your MC list endpoint here; see instructions below
      }
    },
  ],
}
