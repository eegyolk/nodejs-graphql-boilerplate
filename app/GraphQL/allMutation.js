const fs = require('fs');
const { GraphQLObjectType } = require('graphql');

const files = fs.readdirSync(__dirname, { withFileTypes: true });
const mutations = {};

files.forEach((item) => {
  if (item.isDirectory()) {
    const mutationFile = `./${item.name}/mutations`;

    if (fs.existsSync(`${__dirname}/${mutationFile}.js`)) {
      Object.assign(mutations, require(`./${item.name}/mutations`));
    }
  }
});

module.exports = new GraphQLObjectType({
  name: 'Mutations',
  fields: mutations,
});
