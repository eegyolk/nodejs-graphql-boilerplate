const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const createPriceSchemeDurationLogInputType = new GraphQLInputObjectType({
  name: 'CreatePriceSchemeDurationLogInput',
  fields: {
    price_scheme_duration_id: { type: new GraphQLNonNull(GraphQLInt) },
    old_data: { type: new GraphQLNonNull(GraphQLString) },
    new_data: { type: new GraphQLNonNull(GraphQLString) },
    remarks: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createPriceSchemeDurationLogInputType };
