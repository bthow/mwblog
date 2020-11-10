import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Card, CardText } from 'reactstrap';
import Nav from "../components/nav"
import Footer from "../components/footer"
import CardPost from "../components/card-post"
import SEO from "../components/seo"

class PlansPage extends React.Component {
  render() {
    const { data } = this.props
    const plans = data.plans.edges

    return (
      <div> 
        <Nav/>
        <SEO title="Meanwhile|Reading Plan" />
        <Container py="5">    
          <Row> 
            <h1 class="my-4">
              <small>10 Day Reading Plan - The life and teaching of Jesus</small>
            </h1>
          </Row> 
          <Row>
             {plans.map(({ node }) => {
                  return (
                    <Link to={node.fields.slug}>
                      <Card>                    
                      {node.frontmatter.title}
                      <CardText>
                      {node.frontmatter.description}
                      </CardText>
                     
                  </Card></Link> 
                   )
                  }) }

           </Row>         
        </Container>
        <Footer/>
      </div>
    )
  }
}
export default PlansPage

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  plans: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/plans/"}}) {
    edges {
      node {
        id
        fileAbsolutePath
        html
        fields {
          slug
        }
        frontmatter {
          title
          description
        }
      }
    }
  }
}
`

