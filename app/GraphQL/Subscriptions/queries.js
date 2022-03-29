const { GraphQLList, GraphQLInt } = require('graphql');

const { subscriptionsType } = require('./types'),
  { subscriptionsResolver, getSubscriptionResolver } = require('./resolvers');

const subscriptions = {
  type: new GraphQLList(subscriptionsType),
  resolve: async (source, args, context, info) =>
    await subscriptionsResolver(info),
};

const getSubscription = {
  type: subscriptionsType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getSubscriptionResolver(args.id, info),
};

module.exports = {
  subscriptions,
  getSubscription,
};
