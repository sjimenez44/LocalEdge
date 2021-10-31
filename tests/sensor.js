const chai = require('chai');
const expect = chai.expect;
const sensorFactory = require('../modules/sensor/SensorFactory');


describe("Sensor test module: ", function () {
  describe("Check sensor factory ", function () {
    it("Check temperature sensor ", function () {
      // Arrange
      const TemperatureSensor = sensorFactory.create('DV001', 'temperature');
      // Act
      const result = JSON.parse(TemperatureSensor.readValue().getData());
      // Assert
      expect(result.deviceId).to.equal('DV001');
      expect(result.type).to.equal('temperature');
      expect(result.value).to.be.an('number');
    });
    it("Check humidity sensor ", function () {
      // Arrange
      const HumiditySensor = sensorFactory.create('DV002', 'humidity');
      // Act
      const result = JSON.parse(HumiditySensor.readValue().getData());
      // Assert
      expect(result.deviceId).to.equal('DV002');
      expect(result.type).to.equal('humidity');
      expect(result.value).to.be.an('number');
    });
  });
});