const { createSubscriptionInputType } = require('./inputTypes'),
  { createSubscriptionResolver } = require('./resolvers'),
  { subscriptionsType } = require('./types');

const createSubscription = {
  type: subscriptionsType,
  args: {
    input: { type: createSubscriptionInputType },
  },
  resolve: async (source, args) => await createSubscriptionResolver(args),
};

module.exports = {
  createSubscription,
};
