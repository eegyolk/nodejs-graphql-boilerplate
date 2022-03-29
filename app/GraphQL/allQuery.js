const fs = require('fs');
const { GraphQLObjectType } = require('graphql');

const files = fs.readdirSync(__dirname, { withFileTypes: true });
const queries = {};

files.forEach((item) => {
  if (item.isDirectory()) {
    const queryFile = `./${item.name}/queries`;

    if (fs.existsSync(`${__dirname}/${queryFile}.js`)) {
      Object.assign(queries, require(`./${item.name}/queries`));
    }
  }
});

module.exports = new GraphQLObjectType({
  name: 'Queries',
  fields: queries,
});
