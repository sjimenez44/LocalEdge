const Sensor = require('./Sensor');

class Humidity {
  constructor(deviceId) {
    // Set type of sensor and usual parameters of sensor
    return new Sensor(deviceId, 'humidity', { min: 0, max: 4096 });
  }
}

module.exports = Humidity;