const { GraphQLList, GraphQLInt } = require('graphql');

const { paymentProvidersType } = require('./types'),
  {
    paymentProvidersResolver,
    getPaymentProviderResolver,
  } = require('./resolvers');

const paymentProviders = {
  type: new GraphQLList(paymentProvidersType),
  resolve: async (source, args, context, info) =>
    await paymentProvidersResolver(info),
};

const getPaymentProvider = {
  type: paymentProvidersType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPaymentProviderResolver(args.id, info),
};

module.exports = {
  paymentProviders,
  getPaymentProvider,
};
