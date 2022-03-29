const { createSubscriptionConsumableInputType } = require('./inputTypes'),
  { createSubscriptionConsumableResolver } = require('./resolvers'),
  { subscriptionConsumablesType } = require('./types');

const createSubscriptionConsumable = {
  type: subscriptionConsumablesType,
  args: {
    input: { type: createSubscriptionConsumableInputType },
  },
  resolve: async (source, args) =>
    await createSubscriptionConsumableResolver(args),
};

module.exports = {
  createSubscriptionConsumable,
};
