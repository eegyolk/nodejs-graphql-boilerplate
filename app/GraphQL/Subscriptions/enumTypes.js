const { GraphQLEnumType } = require('graphql');

const paymentStatusEnumType = new GraphQLEnumType({
  name: 'PaymentStatussEnum',
  values: {
    PENDING: { value: 'PENDING' },
    COMPLETED: { value: 'COMPLETED' },
    REJECTED: { value: 'REJECTED' },
    CANCELLED: { value: 'CANCELLED' },
  },
});

module.exports = { paymentStatusEnumType };
