import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "@reach/router"
import blogStyles from "./blog.module.scss"
import Head from '../components/head';

const BlogPage = () => {
  // MARKDOWN QUERY
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  let content = data.allContentfulBlogPost.edges.map(edge => {
    return (
      <li key={edge.node.title} className={blogStyles.post}>
        <Link to={`/blog/${edge.node.slug}`}>
          <h2>{edge.node.title}</h2>
          <p>{edge.node.publishedDate}</p>
        </Link>
      </li>
    )
  })

  return (
    <Layout>
      <Head title="Blog"/>
      <div>
        <h1>Blog Posts</h1>
        <ol className={blogStyles.posts}>{content}</ol>
      </div>
    </Layout>
  )
}

export default BlogPage
