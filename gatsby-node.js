const path = require("path")
const slugify = require('slugify')

const uniqueSlug = require('unique-slug')


module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.

  if (node.internal.type === "MarkdownRemark") {
    let slug = path.basename(node.fileAbsolutePath, ".md")
    // slug = slugify(slug)
    console.log(slug, "************ \n")

    

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // QUERY TO GET MARKDOWN
  // const res = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // res.data.allMarkdownRemark.edges.forEach(edge => {
  //   let slug = slugify(edge.node.fields.slug, {
  //     replacement: '-',    // replace spaces with replacement
  //     remove: null,        // regex to remove characters
  //     lower: true          // result in lower case
  //   })
  //   console.log(slug, 'slug')
  //   createPage({
  //     component: blogTemplate,
  //     path: `/blog/${slug}`,
  //     context: {
  //       slug: slug,
  //     },
  //   })
  // })

  // CONTENFUL QUERY
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  console.log(res.data.allContentfulBlogPost.edges)

  

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    // let slug = uniqueSlug(edge.node.slug)
    // let slug = edge.node.slug
    // console.log(slug, 'slug')
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  
}
