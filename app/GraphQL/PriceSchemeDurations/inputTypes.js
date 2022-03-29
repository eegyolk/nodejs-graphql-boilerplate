const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');

const createPriceSchemeDurationInputType = new GraphQLInputObjectType({
  name: 'CreatePriceSchemeDurationInput',
  fields: {
    price_scheme_id: { type: new GraphQLNonNull(GraphQLInt) },
    price_duration_id: { type: new GraphQLNonNull(GraphQLInt) },
    amount: { type: new GraphQLNonNull(GraphQLFloat) },
    discount: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createPriceSchemeDurationInputType };
