const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const createPropertyTypeInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyTypeInput',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createPropertyTypeInputType };
