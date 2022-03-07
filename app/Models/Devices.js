const crypto = require('crypto-js');
const { Model } = require('objection');

class Devices extends Model {
  static get tableName() {
    return 'devices';
  }

  async $beforeInsert(queryContext) {
    const parent = super.$beforeInsert(queryContext);

    return Promise.resolve(parent).then(() => {
      this.user_agent_md5 = crypto.MD5(this.user_agent).toString();
    });
  }
}

module.exports = Devices;
