const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const createPriceSchemeFeatureInputType = new GraphQLInputObjectType({
  name: 'CreatePriceSchemeFeatureInput',
  fields: {
    price_scheme_id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    str_value: { type: new GraphQLNonNull(GraphQLString) },
    int_value: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createPriceSchemeFeatureInputType };
