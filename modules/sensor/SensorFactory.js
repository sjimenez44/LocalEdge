const Humidity = require('./Humidity');
const Temperature = require('./Temperature');

class sensorFactory {
  // Create a sensor based on the type
  create(deviceId, type) {
    switch (type) {
      case 'humidity':
        return new Humidity(deviceId);
      case 'temperature':
        return new Temperature(deviceId);
      default: {
        console.log('Invalid sensor type');
      }
    }
  }
}

module.exports = new sensorFactory();