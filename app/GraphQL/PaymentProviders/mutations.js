const { createPaymentProviderInputType } = require('./inputTypes'),
  { createPaymentProviderResolver } = require('./resolvers'),
  { paymentProvidersType } = require('./types');

const createPaymentProvider = {
  type: paymentProvidersType,
  args: {
    input: { type: createPaymentProviderInputType },
  },
  resolve: async (source, args) => await createPaymentProviderResolver(args),
};

module.exports = {
  createPaymentProvider,
};
