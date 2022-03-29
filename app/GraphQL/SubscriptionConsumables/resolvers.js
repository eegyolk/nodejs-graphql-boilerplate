const graphqlFields = require('graphql-fields');

const SubscriptionConsumablesRepository = require('../../Repositories/SubscriptionConsumablesRepository');

const subscriptionConsumablesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await SubscriptionConsumablesRepository.subscriptionConsumables(
    fields.join(',')
  );
};

const getSubscriptionConsumableResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await SubscriptionConsumablesRepository.getSubscriptionConsumable(
    id,
    fields.join(',')
  );
};

const createSubscriptionConsumableResolver = async (args) => {
  return await SubscriptionConsumablesRepository.createSubscriptionConsumable(
    args.input
  );
};

module.exports = {
  subscriptionConsumablesResolver,
  getSubscriptionConsumableResolver,
  createSubscriptionConsumableResolver,
};
