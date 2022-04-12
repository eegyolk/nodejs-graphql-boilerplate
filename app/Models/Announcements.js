const { Model } = require('objection');

class Announcements extends Model {
  static get tableName() {
    return 'announcements';
  }
}

module.exports = Announcements;
