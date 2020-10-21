import React from "react"
import { graphql } from "gatsby"
import SiteNav from "../components/nav"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Header from "../components/header"
import ShowCase from "../components/showcase"
import Footer from "../components/footer"
import BackgroundImage from "gatsby-background-image"

class ChurchIndex extends React.Component {
  render() {
    const { data } = this.props
    const bgImage = data.file.childImageSharp.fixed
    const bgContactImage = data.bgContact.childImageSharp.fixed
    const showCaseImages = []
    data.allFile.nodes.map(({childImageSharp}) => {
      showCaseImages.push(childImageSharp.fixed);
      return null;
    })

    return (
      <div> 
        <SiteNav/>
          <Header location={this.props.location} 
                  title="Meanwhile Church" 
                  subTitle="Redfern, Sydney " 
                  bgImage={bgImage}>
          <SEO title="church" />
        </Header>
        <section class="features-icons bg-light text-center">
          <div class="container">

          </div>
        </section>
        <section class="features-icons bg-light text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="features-icons-icon d-flex">
                    <i class="icon-screen-desktop m-auto text-primary"></i>
                  </div>
                  <h3>Learning</h3>
                  <p class="lead mb-0">We learn together from the scriptures.</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="features-icons-icon d-flex">
                    <i class="icon-layers m-auto text-primary"></i>
                  </div>
                  <h3>Processing</h3>
                  <p class="lead mb-0">We process how our faith intersects with life.</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div class="features-icons-icon d-flex">
                    <i class="icon-check m-auto text-primary"></i>
                  </div>
                  <h3>Prayer</h3>
                  <p class="lead mb-0">We pray together and reflect on the goodness and greatness of God.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="showcase">
          <div class="container-fluid p-0">
            <ShowCase
              title="Loving Redfern"
              subtext="A ministry in the streets of Redfern Sydney. Investing in the local community through friendship and as volunteers"
              bgImage={showCaseImages[1]}
              altpos={false} />

            <ShowCase
              title="Table fellowship"
              subtext="An all ages church community (church like a family dinner) "
              bgImage={showCaseImages[4]}
              altpos={true} />

            <ShowCase
              title="Responding to God"
              subtext="Doing life with faith: switched on to Gods presence, processing life, and learning together"
              bgImage={showCaseImages[0]}
              altpos={false} />
            
          </div>
        </section>
        
        <BackgroundImage Tag="section"
           className="masthead text-white text-center"
           fluid={bgContactImage}
           backgroundColor={`#040e18`}
        >
 
          <div class="">
            <Contact 
              title="Contact us" 
              desc="We'd love to hear from you, or plan a visit with us.  We meet Sunday morning in and around the Redfern area."/>
          </div>
        </BackgroundImage>
        <Footer/>
      </div>
    )
  }
}
export default ChurchIndex
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    file(absolutePath: { regex: "/bg-church-table.jpg/" }) {
      childImageSharp {
          fixed(width: 1240) {
            ...GatsbyImageSharpFixed
          }
      }
    }
    bgContact: file(absolutePath: { regex: "/map2/" }) {
      childImageSharp {
          fixed(width: 1240) {
            ...GatsbyImageSharpFixed
          }
      }
    }
    allFile(filter: {absolutePath: {regex: "/showcase/"}}) {
    totalCount
    nodes{
      childImageSharp {
          fixed(width: 620) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  }
  }
`
