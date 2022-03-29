const DataLoader = require('dataloader');

const SubscriptionsRepository = require('../../Repositories/SubscriptionsRepository');
const Utilities = require('../../Classes/Utilities');

const getSubscriptionsLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await SubscriptionsRepository.getSubscriptions(ids, fields);
};

module.exports = {
  subscriptions: new DataLoader(getSubscriptionsLoader),
};
