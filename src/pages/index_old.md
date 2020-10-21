<!--Row>

            <div class="jumbotron mt-2 p-4 p-md-5 text-white rounded bg-dark">
              <div> 
                <h1 class="display-4 font-italic">Spiritual Fitness Guide</h1>
                <p class="lead my-3">Three short guided sessions to take a step back and figure out how you can improve your walk with God.
We're dedicated to following Jesus together.  Figure out your shape and calling. And get smart about where you spend your energy and find encouragement. Times have changed with new media and devices. Today more than ever have we can devote time to the walk of faith. </p>
                <p class="lead mb-0 contend-right">
                  <Link 
                    class="btn btn-primary"
                    className="btn btn-primary"
                    to="#">
                    Sign-up
                  </Link></p>
              </div>
            </div>            
            </Row-->
            <!--Row> 
              <h1 class="my-4">
                <small>GROUP RESOURCES</small>
              </h1>
            </Row> 
             <Row>
            
                {resources.map(({ node }) => {
                const thumbnail = node.frontmatter.thumbnail
                const cardImage = ( thumbnail ? thumbnail.childImageSharp.fixed : null )
                return (
                 <CardResource
                    title={node.frontmatter.title}
                    desc={node.frontmatter.description}
                    image={cardImage}
                    url={node.fields.slug}/> 
                 )
                })}

            </Row--> 
            <!--Row> 
              <h1 class="my-4">
                <small>RECENT POSTS</small>
              </h1>
            </Row> 
           {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const desc = node.frontmatter.description || node.excerpt
              const youtubeId = node.frontmatter.youtubeId || null 

              return (  
                <CardPost
                  title={title}
                  desc={desc}
                  youtubeId={youtubeId}
                  url={node.fields.slug}
                  date={node.frontmatter.date}/> 
              )    
            })}
            -->
            
