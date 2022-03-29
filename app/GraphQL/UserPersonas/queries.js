const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { userPersonasType } = require('./types'),
  { userPersonasResolver, getUserPersonaResolver } = require('./resolvers');

const userPersonas = {
  type: new GraphQLList(userPersonasType),
  resolve: async (source, args, context, info) =>
    await userPersonasResolver(info),
};

const getUserPersona = {
  type: userPersonasType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserPersonaResolver(args.id, info),
};

module.exports = {
  userPersonas,
  getUserPersona,
};
