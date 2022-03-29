const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createActivityLogInputType = new GraphQLInputObjectType({
  name: 'CreateActivityLogInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    device_id: { type: new GraphQLNonNull(BigInt) },
    activity: { type: new GraphQLNonNull(GraphQLString) },
    ip_address: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createActivityLogInputType };
