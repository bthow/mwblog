const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

    /*
type MarkdownRemarkFrontmatter {
      image: File
    }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }*/

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  await graphql(
    `
      {
        allMarkdownRemark(
         filter: {fileAbsolutePath: {regex: "/content/blog/"}}
         sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })

  const planSession = path.resolve(`./src/templates/plan-session.js`)
  await graphql(
    `
      {
        allMarkdownRemark(
         filter: {fileAbsolutePath: {regex: "/content/plans/"}}
         sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create reading plan session pages.
    const sessions = result.data.allMarkdownRemark.edges

    sessions.forEach((session, index) => {

      createPage({
        path: session.node.fields.slug,
        component: planSession,
        context: {
          slug: session.node.fields.slug
        },
      })
    })

    return null
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
