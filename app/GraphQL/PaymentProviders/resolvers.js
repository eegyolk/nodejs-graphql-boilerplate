const graphqlFields = require('graphql-fields');

const PaymentProvidersRepository = require('../../Repositories/PaymentProvidersRepository');

const paymentProvidersResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PaymentProvidersRepository.paymentProviders(fields.join(','));
};

const getPaymentProviderResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PaymentProvidersRepository.getPaymentProvider(
    id,
    fields.join(',')
  );
};

const createPaymentProviderResolver = async (args) => {
  return await PaymentProvidersRepository.createPaymentProvider(args.input);
};

module.exports = {
  paymentProvidersResolver,
  getPaymentProviderResolver,
  createPaymentProviderResolver,
};
