const { createSubscriptionPaymentDetailInputType } = require('./inputTypes'),
  { createSubscriptionPaymentDetailResolver } = require('./resolvers'),
  { subscriptionPaymentDetailsType } = require('./types');

const createSubscriptionPaymentDetail = {
  type: subscriptionPaymentDetailsType,
  args: {
    input: { type: createSubscriptionPaymentDetailInputType },
  },
  resolve: async (source, args) =>
    await createSubscriptionPaymentDetailResolver(args),
};

module.exports = {
  createSubscriptionPaymentDetail,
};
