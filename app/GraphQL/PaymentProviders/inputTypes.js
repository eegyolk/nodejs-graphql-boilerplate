const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const createPaymentProviderInputType = new GraphQLInputObjectType({
  name: 'CreatePaymentProviderInput',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    account_name: { type: new GraphQLNonNull(GraphQLString) },
    account_number: { type: new GraphQLNonNull(GraphQLString) },
    swift_code: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createPaymentProviderInputType };
