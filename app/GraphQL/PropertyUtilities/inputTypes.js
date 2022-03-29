const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');

const createPropertyUtilityInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyUtilityInput',
  fields: {
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    utility_id: { type: new GraphQLNonNull(GraphQLInt) },
    fee: { type: new GraphQLNonNull(GraphQLFloat) },
  },
});

module.exports = { createPropertyUtilityInputType };
