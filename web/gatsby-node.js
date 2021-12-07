const { node } = require("prop-types")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(
    `
      query MyQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `
  )

  const { createPage } = actions
  data.allMarkdownRemark.nodes.forEach(element => {
    createPage({
      path: element.frontmatter.slug,
      component: require.resolve("./src/templates/Details.js"),
      context: { slug: element.frontmatter.slug },
    })
  })
}
