const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const priceSchemeFeaturesType = new GraphQLObjectType({
  name: 'PriceSchemeFeatures',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    price_scheme_id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    str_value: { type: new GraphQLNonNull(GraphQLString) },
    int_value: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { priceSchemeFeaturesType };
