const { createPropertyVerificationInputType } = require('./inputTypes'),
  { createPropertyVerificationResolver } = require('./resolvers'),
  { propertyVerificationsType } = require('./types');

const createPropertyVerification = {
  type: propertyVerificationsType,
  args: {
    input: { type: createPropertyVerificationInputType },
  },
  resolve: async (source, args) =>
    await createPropertyVerificationResolver(args),
};

module.exports = {
  createPropertyVerification,
};
