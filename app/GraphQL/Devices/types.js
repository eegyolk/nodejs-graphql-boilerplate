const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { usersType } = require('../Users/types');

const devicesType = new GraphQLObjectType({
  name: 'Devices',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    user: {
      type: new GraphQLNonNull(usersType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.users.load(`${source.user_id}@${fields.join(',')}`);
      },
    },
    ip_address: { type: new GraphQLNonNull(GraphQLString) },
    user_agent: { type: new GraphQLNonNull(GraphQLString) },
    user_agent_md5: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { devicesType };
