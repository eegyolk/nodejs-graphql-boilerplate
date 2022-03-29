const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const createSubscriptionPaymentDetailInputType = new GraphQLInputObjectType({
  name: 'CreateSubscriptionPaymentDetailInput',
  fields: {
    subscription_id: { type: new GraphQLNonNull(GraphQLInt) },
    data: { type: new GraphQLNonNull(GraphQLString) },
    attachment_url: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createSubscriptionPaymentDetailInputType };
