const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const publicTransportsType = new GraphQLObjectType({
  name: 'PublicTransports',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { publicTransportsType };
