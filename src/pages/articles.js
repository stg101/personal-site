import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Articles</h1>
      <p>Welcome to articles</p>

      <div className="post-list">
        {posts.map(post => (
          <div
            key={post.node.id}
            className="post-list__item"
            style={{ margin: `40px` }}
          >
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
            <div className="post-list__excerpt">
              <p>{post.node.excerpt}></p>
            </div>
            <Link to={post.node.fields.slug}>Read More</Link>
          </div>
        ))}
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
