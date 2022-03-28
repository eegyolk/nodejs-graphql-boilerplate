const { Model } = require('objection');

class PropertyMediaFiles extends Model {
  static get tableName() {
    return 'property_media_files';
  }
}

module.exports = PropertyMediaFiles;
