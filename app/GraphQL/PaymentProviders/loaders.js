const DataLoader = require('dataloader');

const PaymentProvidersRepository = require('../../Repositories/PaymentProvidersRepository');
const Utilities = require('../../Classes/Utilities');

const getPaymentProvidersLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PaymentProvidersRepository.getPaymentProviders(ids, fields);
};

module.exports = {
  paymentProviders: new DataLoader(getPaymentProvidersLoader),
};
