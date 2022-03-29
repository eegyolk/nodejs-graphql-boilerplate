const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require('graphql');

const { paymentStatusEnumType } = require('./enumTypes');

const createSubscriptionInputType = new GraphQLInputObjectType({
  name: 'CreateSubscriptionInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    price_scheme_duration_id: { type: new GraphQLNonNull(GraphQLInt) },
    price_scheme_duration_amount: { type: new GraphQLNonNull(GraphQLFloat) },
    price_scheme_duration_discount: { type: new GraphQLNonNull(GraphQLInt) },
    price_scheme_feature_id: { type: new GraphQLNonNull(GraphQLInt) },
    price_scheme_feature_inclusion: { type: new GraphQLNonNull(GraphQLString) },
    total_amount: { type: new GraphQLNonNull(GraphQLFloat) },
    payment_provider_id: { type: new GraphQLNonNull(GraphQLInt) },
    payment_reference_no: { type: new GraphQLNonNull(GraphQLString) },
    payment_status: { type: new GraphQLNonNull(paymentStatusEnumType) },
    payment_notes: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createSubscriptionInputType };
