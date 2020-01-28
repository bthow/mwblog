import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import {
  Collapse
   } from 'reactstrap';

function Footer({title}) {
 const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const siteTitle = site.siteMetadata.title
  return (
    <footer>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
<a class="navbar-brand" href="/">{siteTitle}</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <Link 
                    class="nav-link"
                    className="nav-link"
                    activeClaseName="nav-link selected"
                    to="/church/">
                      About Us
                  </Link>
    </li>
    <li class="nav-item">
      <Link 
                    class="nav-link"
                    className="nav-link"
                    activeClaseName="nav-link selected"
                    to="/appProject/">App Project</Link>
    </li>
    <li class="nav-item">
       <Link 
                    class="nav-link"
                    className="nav-link"
                    activeClaseName="nav-link selected"
                    to="/contact/">Contact</Link>
    </li>
  </ul>
</div>
</nav>
      {/*<nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Meanwhile</a>
        <div class="collapse navbar-collapse" id="navbarText">
          <span class="navbar-text">
            © 2019 Meanwhile Design by Ben Thow
          </span>
        </div>
      </nav>*/}
    </footer>
  )
}

export default Footer

