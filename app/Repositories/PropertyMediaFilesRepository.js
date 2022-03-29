const { raw } = require('objection');

const PropertyMediaFiles = require('../Models/PropertyMediaFiles');

class PropertyMediaFilesRepository {
  static async propertyMediaFiles(fields) {
    return await PropertyMediaFiles.query().select(raw(fields));
  }

  static async getPropertyMediaFile(id, fields) {
    return await PropertyMediaFiles.query().select(raw(fields)).findById(id);
  }

  static async createPropertyMediaFile(input) {
    const { property_id, images_url, videos_url } = input;

    return await PropertyMediaFiles.query().insert({
      property_id,
      images_url,
      videos_url,
    });
  }
}

module.exports = PropertyMediaFilesRepository;
