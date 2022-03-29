const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createSubscriptionConsumableInputType = new GraphQLInputObjectType({
  name: 'CreateSubscriptionConsumableInput',
  fields: {
    subscription_id: { type: new GraphQLNonNull(BigInt) },
    price_scheme_feature_name: { type: new GraphQLNonNull(GraphQLString) },
    price_scheme_feature_value: { type: new GraphQLNonNull(GraphQLInt) },
    available_count: { type: new GraphQLNonNull(GraphQLInt) },
    used_count: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createSubscriptionConsumableInputType };
