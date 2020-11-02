import React from "react"
import { graphql } from "gatsby"
import SiteNav from "../components/nav"
import SEO from "../components/seo"
import SignUp from "../components/signup"
import Contact from "../components/contact"
import Header from "../components/header"
import ShowCase from "../components/showcase"
import Footer from "../components/footer"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

class AboutIndex extends React.Component {
  render() {
    const { data } = this.props
    /*const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges */
    const bgImage = data.file.childImageSharp.fixed
    const logoBaptist = data.logoBaptist.childImageSharp.fixed
    const logoSCN = data.logoSCN.childImageSharp.fixed
    const bgContactImage = data.bgContact.childImageSharp.fixed
    const showCaseImages = []
    data.allFile.nodes.map(({childImageSharp}) => {
      showCaseImages.push(childImageSharp.fixed);
      return null;
    })
    const headshots = []
    data.headshots.edges.map(({node}) => {
      headshots.push(node.childImageSharp.fixed);
      return null;
    })

    return (
      <div> 
        <SiteNav/>
          <Header location={this.props.location} 
                  title="About Us" 
                  subTitle="We're collaborating to produce tools and content that make the best spiritual practises more accessable" 
                  bgImage={bgImage}>
          <SEO title="About" />
        </Header>
        <section class="features-icons text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <p class="lead mb-0">
We're a group of Christians collaborating to produce content for living a healthy life spiritually. The project started in our church in Redfern, Sydney, exploring together practical spirituality. This project is about simple but powerful actions and behaviours to get more out of the everyday. Its been enjoyable work and in the process we are spurring each other on to more healthy spiritual living.  We'd love others to participate and look forward to your insights and encounagements. If you'd like to connect with us or find out about our church please get in touch.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        <section class="features-icons text-center bg-secondary">
          <div class="container">
            <div class="row justify-content-md-center ">
              <div class="col-lg-6">
                <h3 class="section-heading text-uppercase mb-4">Get Our updates</h3>
                <SignUp/>
              </div>
            </div>
            </div>
        </section>
        
        <section class="features-icons bg-light text-center">
          <div class="container">
            <div class="row mb-4">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Our Team</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="d-flex justify-content-center">
                    <Image
                      fixed={headshots[0]}
                      style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        minWidth: 50,
                        borderRadius: `100%`,
                        
                      }}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    />
                  </div>
                  <h3>Ben Thow </h3>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="d-flex justify-content-center">
                    <Image
                      fixed={headshots[1]}
                      style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        minWidth: 50,
                        borderRadius: `100%`,
                      }}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    />
                  </div>
                  <h3>Anne Marie Thow</h3>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div class="d-flex justify-content-center">
                    <Image
                      fixed={headshots[2]}
                      style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        minWidth: 50,
                        borderRadius: `100%`,
                      }}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    />
                  </div>
                  <h3>Anderson Ku</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section class="showcase">
          <div class="container-fluid p-0">
            <ShowCase
              title="Our Name"
              subtext="Behind the name 'Meanwhile' is the commitment to live with God. Our lives are wrapped up in a bigger, unfolding story that Jesus has revealled. Life today is complicated and can be confusing. Its easy to get side-tracked into living a story that revolves too much around our own needs and wants. Too often stories of defficit, woundedness, anxiety and inadeqacy get the better of us in the wrestle to stay emotionally and spiritually healthy." 
              bgImage={showCaseImages[0]}
              altpos={false} />
          </div>
        </section>

        <section class="features-icons text-center ">
          <div class="container">
            <div class="row mb-4">
              <div class="col-sm text-center">
                <h2 class="section-heading text-uppercase">Affiliations</h2>
                
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                      <Image 
                        fixed={logoBaptist} 
                        alt="Baptist Churches of NSW & ACT" />
              </div>
              <div class="col-sm">
                    <Image fixed={logoSCN} 
                      alt="Simple Church Network"
                    />
              </div>
            </div>
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
              desc="We'd love to hear from you. If youre interested in the project or our church, let us know.  We meet Sunday morning in and around the Redfern area."/>
          </div>
        </BackgroundImage>
        <Footer/>
      </div>
    )
  }
}
export default AboutIndex
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
          fixed(width: 1240, duotone: { highlight: "#040e18", shadow: "#000000", opacity: 70 }) {
            ...GatsbyImageSharpFixed
          }
      }
    }
   headshots: allFile(filter: {dir: {regex: "/headshots/"}, 
      extension: {eq: "png"}}, 
      sort: {fields: [name]}) {
        edges {
          node {
            childImageSharp {
              fixed(width: 130, grayscale: true) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
    }
  logoBaptist: file(absolutePath: {regex: "/logo_baptist/"}) {
    childImageSharp {
      fixed(width: 340) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  logoSCN: file(absolutePath: {regex: "/logo_scn/"}) {
    childImageSharp {
      fixed(width: 240) {
        ...GatsbyImageSharpFixed
      }
    }
  }
    allFile(filter: {absolutePath: {regex: "/walkGuitar/"}}) {
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
