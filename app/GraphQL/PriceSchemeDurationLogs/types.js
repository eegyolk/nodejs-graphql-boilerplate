const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const priceSchemeDurationLogsType = new GraphQLObjectType({
  name: 'PriceSchemeDurationLogs',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    price_scheme_duration_id: { type: new GraphQLNonNull(GraphQLInt) },
    old_data: { type: new GraphQLNonNull(GraphQLString) },
    new_data: { type: new GraphQLNonNull(GraphQLString) },
    remarks: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { priceSchemeDurationLogsType };
