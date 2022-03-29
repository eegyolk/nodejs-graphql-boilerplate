const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { subscriptionPaymentDetailsType } = require('./types'),
  {
    subscriptionPaymentDetailsResolver,
    getSubscriptionPaymentDetailResolver,
  } = require('./resolvers');

const subscriptionPaymentDetails = {
  type: new GraphQLList(subscriptionPaymentDetailsType),
  resolve: async (source, args, context, info) =>
    await subscriptionPaymentDetailsResolver(info),
};

const getSubscriptionPaymentDetail = {
  type: subscriptionPaymentDetailsType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getSubscriptionPaymentDetailResolver(args.id, info),
};

module.exports = {
  subscriptionPaymentDetails,
  getSubscriptionPaymentDetail,
};
