const path = require(`path`)

exports.createPages = async ({actions }) => {
  const { createPage } = actions

  createPage({
    path: 'page-1',
    component: path.resolve(`./src/templates/page.js`),
    context: {
      title: "Página especial"
    }
  })
}