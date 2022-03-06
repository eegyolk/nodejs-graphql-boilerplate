const Devices = require('../Models/Devices');

class DevicesRepository {
  static async getDevices() {
    return await Devices.query();
  }

  static async getDevice(id) {
    return await Devices.query().findById(id);
  }
}

module.exports = DevicesRepository;
