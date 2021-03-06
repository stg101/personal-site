import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

const Articles = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>

      <div className="post-list">
        {posts.map(post => (
          <div
            key={post.node.id}
            className="post-list__item"
            style={{ margin: `60px` }}
          >
            <Link to={post.node.fields.slug}>
              <h2>{post.node.frontmatter.title}</h2>
            </Link>

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

export default Articles

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
