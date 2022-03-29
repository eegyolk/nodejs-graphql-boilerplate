const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const subscriptionConsumablesType = new GraphQLObjectType({
  name: 'SubscriptionConsumables',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    subscription_id: { type: new GraphQLNonNull(GraphQLInt) },
    price_scheme_feature_name: { type: new GraphQLNonNull(GraphQLString) },
    price_scheme_feature_value: { type: new GraphQLNonNull(GraphQLInt) },
    available_count: { type: new GraphQLNonNull(GraphQLInt) },
    used_count: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { subscriptionConsumablesType };
