const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const createAccommodationTypeInputType = new GraphQLInputObjectType({
  name: 'CreateAccommodationTypeInput',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createAccommodationTypeInputType };
