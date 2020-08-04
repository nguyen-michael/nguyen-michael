const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPage = path.resolve(`./src/templates/project.js`)
  const tagsPage = path.resolve(`./src/templates/tags.js`)

  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                pageKey
                tags
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const pages = result.data.allMdx.edges
    const tags = result.data.tagsGroup.group

    const posts = pages.filter(
      page => page.node.frontmatter.pageKey === "blog-post"
    )
    const projects = pages.filter(
      page => page.node.frontmatter.pageKey === "project"
    )

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    projects.forEach(project => {
      createPage({
        path: `projects${project.node.fields.slug}`,
        component: projectPage,
        context: {
          slug: project.node.fields.slug,
        },
      })
    })

    tags.forEach(tag => {
      createPage({
        path: `tags/${_.kebabCase(tag.fieldValue)}`,
        component: tagsPage,
        context: {
          tag: tag.fieldValue,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
