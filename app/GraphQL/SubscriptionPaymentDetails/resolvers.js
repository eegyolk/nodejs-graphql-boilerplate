const graphqlFields = require('graphql-fields');

const SubscriptionPaymentDetailsRepository = require('../../Repositories/SubscriptionPaymentDetailsRepository');

const subscriptionPaymentDetailsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await SubscriptionPaymentDetailsRepository.subscriptionPaymentDetails(
    fields.join(',')
  );
};

const getSubscriptionPaymentDetailResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await SubscriptionPaymentDetailsRepository.getSubscriptionPaymentDetail(
    id,
    fields.join(',')
  );
};

const createSubscriptionPaymentDetailResolver = async (args) => {
  return await SubscriptionPaymentDetailsRepository.createSubscriptionPaymentDetail(
    args.input
  );
};

module.exports = {
  subscriptionPaymentDetailsResolver,
  getSubscriptionPaymentDetailResolver,
  createSubscriptionPaymentDetailResolver,
};
