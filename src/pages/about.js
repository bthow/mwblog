import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row } from 'reactstrap';
import SiteNav from "../components/nav"
import SEO from "../components/seo"
import SignUp from "../components/signup"
import Contact from "../components/contact"
import Header from "../components/header"
import ShowCase from "../components/showcase"
import MwLayout from "../components/mw-layout"
import Footer from "../components/footer"
import BackgroundImage from "gatsby-background-image"

class ChurchIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const bgImage = data.file.childImageSharp.fixed
    const bgContactImage = data.bgContact.childImageSharp.fixed
    const showCaseImages = []
    data.allFile.nodes.map(({childImageSharp}) => {
      showCaseImages.push(childImageSharp.fixed);
    })

    return (
      <div> 
        <SiteNav/>
          <Header location={this.props.location} 
                  title="About Us" 
                  subTitle="Redfern, Sydney" 
                  bgImage={bgImage}>
          <SEO title="church" />
        </Header>
        <section class="features-icons text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <p class="lead mb-0">
 The meanwhile project is a collaboration started by Ben Thow, Anne Marie Thow, Anderson Ku and others from our church and elsewhere who wanted to explore everyday discpleship today.  We're collaborating to produce tools and content that make the best spiritual practises more accessable.  Its been enjoyable work and in the process are spurring each other on to more healthy spiritual living.  We'd love your insights and encounagements. If you'd like to connect with us or find out about our church please get in touch.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
              <SignUp
                class="mr-auto ml-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="features-icons text-center">
          <div class="container">
            </div>
        </section>
        
        <section class="features-icons bg-light text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Our Team</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="features-icons-icon d-flex">
                    <i class="icon-screen-desktop m-auto text-primary"></i>
                  </div>
                  <h3>Ben Thow</h3>
                  <p class="lead mb-0">Christian Minister and Software Designer</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="features-icons-icon d-flex">
                    <i class="icon-layers m-auto text-primary"></i>
                  </div>
                  <h3>Anderson Ku</h3>
                  <p class="lead mb-0">Writer and Developer</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div class="features-icons-icon d-flex">
                    <i class="icon-check m-auto text-primary"></i>
                  </div>
                  <h3>Anne Marie Thow</h3>
                  <p class="lead mb-0">Editor and Academic</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        
        <section class="showcase">
          <div class="container-fluid p-0">
            <ShowCase
              title="Our Name"
              subtext="Behind the name 'Meanwhile' is the commitment to live with God. Our lives are wrapped up in a bigger, unfolding story that Jesus has revealled. Life today is complicated and confusing. Its easy to get side-tracked into living a story that revolves too much around our own needs and wants. Too often stories of defficit, woundedness, anxiety and inadeqacy get the better of us in the wrestle to stay emotional and spiritual healthy."
              bgImage={showCaseImages[1]}
              altpos={false} />

            <ShowCase
              title="Why Practices?"
              subtext="Healthy christian practices bring us back to the bigger story. They challenge our missconceptions when our story is too small and help us remeber God's presence. When we meet we break bread together, when we pray, when we study the bible, we remember. Our problems are reframed. We can be more prayerful, more thankful and more hopeful even when life is difficult."
              bgImage={showCaseImages[4]}
              altpos={true} />

            <ShowCase
              title="Living in harmony with God"
              subtext="The bigger story is essential because life is only ever truely lived when its done with its maker. Augustine said our hearts are restless until they are found in God. Our story is incomplete until we know its place in God's story. We were made to live in harmony with God, forgiven by God and partners with God in life. It's deeply good."
              bgImage={showCaseImages[0]}
              altpos={false} />
            
          </div>
        </section>

        <section class="features-icons bg-light text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 text-center">
                <h2 class="section-heading text-uppercase">Affiliation</h2>
                
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="features-icons-icon d-flex">
                    <i class="icon-screen-desktop m-auto text-primary"></i>
                  </div>
                  <h3>Baptist Churches of NSW ACT</h3>
                  <p class="lead mb-0"></p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="features-icons-icon d-flex">
                    <i class="icon-layers m-auto text-primary"></i>
                  </div>
                  <h3>Simple Church Network</h3>
                  <p class="lead mb-0"></p>
                </div>
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
