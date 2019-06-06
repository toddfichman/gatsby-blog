import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import blogTemplateStyles from "./blog.module.scss"

// MARKDOWN QUERY
// export const query = graphql`
//   query($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// CONTENTFUL QUERY
export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  // telling documentToReactComponents how to present certain elements
  const options = {
    renderNode: {
      "embedded-assest-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  console.log(props.data)
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> */}

      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p className={blogTemplateStyles.date}>{props.data.contentfulBlogPost.publishedDate}</p>
      <div className={blogTemplateStyles.content}>

        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json, 
          options
        )}
      </div>
    </Layout>
  )
}

export default Blog
