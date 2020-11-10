import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Nav from "../components/nav"
import Share from "../components/share"
import Footer from "../components/footer"
import { rhythm, scale } from "../utils/typography"


class PlanSessionTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const postUrl = this.props.data.site.siteMetadata.siteUrl + post.fields.slug

    return (
      <div>
        <Nav/>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.description}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.frontmatter.passage }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Share 
            url={postUrl}
            title={post.frontmatter.title} />
          <Contact 
            title="Your thoughts..."
            commentType="Post"
            slug={post.fields.slug} />
        </Layout>
       <Footer/>
     </div>
    )
  }
}

export default PlanSessionTemplate

export const pageQuery = graphql`
  query PlanSessionsBySlugX($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        passage
      }
      fields {
        slug
      }
      fileAbsolutePath
      }
  }
`
