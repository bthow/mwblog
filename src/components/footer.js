import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <footer class="mwFooter mt-4">
      <div class="container d-flex">
         <ul class="mx-auto" id="services">
            <li> 
             <div class="instagram">
                <a href="https://instagram.com/meanwhile.org.au?r=nametag/">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </div> 
            </li>
            <li>
              <div class="youtube">
                <a href="https://youtube.com/channel/UCGfc1hXKSU0-H469pLDdcyg">
                  <i class="fab fa-youtube" aria-hidden="true"></i>
                </a>
              </div> 
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center"> 
          <span class="mwLogoFont navbar-brand" href="/">© {siteTitle}, All Rights Reserved.</span>
        </div>
        	
  
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

