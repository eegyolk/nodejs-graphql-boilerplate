const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const createEmailTypeInputType = new GraphQLInputObjectType({
  name: 'CreateEmailTypeInput',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

module.exports = { createEmailTypeInputType };
