const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

class AddressTypesMutator {
  static createAddressTypes() {
    return new GraphQLObjectType({
      name: 'createAddressTypes',
      fields: () => ({
        createAddressTypes: {
          type: GraphQLString,
          resolve: async (source, { input }, { mutators }) => {
            return mutators.createAddressTypes({ input });
          },
        },
      }),
    });
  }

  static updateAddressTypes() {
    return new GraphQLObjectType({
      name: 'updateAddressTypes',
      fields: () => ({
        updateAddressTypes: {
          type: GraphQLString,
          resolve: async (source, { input }, { mutators }) => {
            return mutators.updateAddressTypes({ input });
          },
        },
      }),
    });
  }

  static deleteAddressTypes() {
    return new GraphQLObjectType({
      name: 'deleteAddressTypes',
      fields: () => ({
        deleteAddressTypes: {
          type: GraphQLString,
          resolve: async (source, { input }, { mutators }) => {
            return mutators.deleteAddressTypes({ input });
          },
        },
      }),
    });
  }
}

module.exports = AddressTypesMutator;
