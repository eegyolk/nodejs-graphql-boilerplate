const { GraphQLEnumType } = require('graphql');

const verificationStatusEnumType = new GraphQLEnumType({
  name: 'VerificationStatusEnum',
  values: {
    PENDING: { value: 'PENDING' },
    VERIFIED: { value: 'VERIFIED' },
    REJECTED: { value: 'REJECTED' },
  },
});

module.exports = { verificationStatusEnumType };
