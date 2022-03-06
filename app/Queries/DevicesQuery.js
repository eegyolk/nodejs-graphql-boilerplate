const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

class DevicesQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'Devices',
      fields: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        ip_address: { type: GraphQLString },
        user_agent: { type: GraphQLString },
        user_agent_md5: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = DevicesQuery;
