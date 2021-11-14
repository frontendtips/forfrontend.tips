const path = require('path')
const root = path.join(process.cwd())

module.exports = {
  /**
   * /src
   */
  root,
  /**
   * data/blog
   */
  dataBlog: path.join(root, 'data/blog/'),
  /**
   * data/authors
   */
  dataAuthors: path.join(root, 'data/authors/'),
  /**
   * data/layouts
   */
  layouts: path.join(root, 'layouts'),
}
