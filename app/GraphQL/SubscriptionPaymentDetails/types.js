const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const subscriptionPaymentDetailsType = new GraphQLObjectType({
  name: 'SubscriptionPaymentDetails',
  fields: {
    id: { type: new GraphQLNonNull(BigInt) },
    subscription_id: { type: new GraphQLNonNull(BigInt) },
    data: { type: new GraphQLNonNull(GraphQLString) },
    attachment_url: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { subscriptionPaymentDetailsType };
