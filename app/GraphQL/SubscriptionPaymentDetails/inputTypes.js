const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createSubscriptionPaymentDetailInputType = new GraphQLInputObjectType({
  name: 'CreateSubscriptionPaymentDetailInput',
  fields: {
    subscription_id: { type: new GraphQLNonNull(BigInt) },
    data: { type: new GraphQLNonNull(GraphQLString) },
    attachment_url: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createSubscriptionPaymentDetailInputType };
