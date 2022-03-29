const graphqlFields = require('graphql-fields');

const SubscriptionsRepository = require('../../Repositories/SubscriptionsRepository');

const subscriptionsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await SubscriptionsRepository.subscriptions(fields.join(','));
};

const getSubscriptionResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await SubscriptionsRepository.getSubscription(id, fields.join(','));
};

const createSubscriptionResolver = async (args) => {
  return await SubscriptionsRepository.createSubscription(args.input);
};

module.exports = {
  subscriptionsResolver,
  getSubscriptionResolver,
  createSubscriptionResolver,
};
