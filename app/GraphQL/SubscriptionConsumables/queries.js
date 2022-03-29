const { GraphQLList, GraphQLInt } = require('graphql');

const { subscriptionConsumablesType } = require('./types'),
  {
    subscriptionConsumablesResolver,
    getSubscriptionConsumableResolver,
  } = require('./resolvers');

const subscriptionConsumables = {
  type: new GraphQLList(subscriptionConsumablesType),
  resolve: async (source, args, context, info) =>
    await subscriptionConsumablesResolver(info),
};

const getSubscriptionConsumable = {
  type: subscriptionConsumablesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getSubscriptionConsumableResolver(args.id, info),
};

module.exports = {
  subscriptionConsumables,
  getSubscriptionConsumable,
};
