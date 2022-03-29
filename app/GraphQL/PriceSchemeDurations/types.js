const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require('graphql');

const priceSchemeDurationsType = new GraphQLObjectType({
  name: 'PriceSchemeDurations',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    price_scheme_id: { type: new GraphQLNonNull(GraphQLInt) },
    price_duration_id: { type: new GraphQLNonNull(GraphQLInt) },
    amount: { type: new GraphQLNonNull(GraphQLFloat) },
    discount: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { priceSchemeDurationsType };
