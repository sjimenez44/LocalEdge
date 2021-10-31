<p align="center">
  <h1 align="center">🚐 Local Edge 📦</h1>
  <p align="center">
    <i>Sending data to IoT Hub</i>
  </p>
</p>

<p align="center">
  <a href="https://choosealicense.com/licenses/mit/">
    <img alt="license" src="https://img.shields.io/github/license/sjimenez44/LocalEdge?style=flat-square&color=lightblue"/>
  </a>
  <a href="https://github.com/sjimenez44/LocalEdge/actions/workflows/ci.yml/">
    <img alt="tests status" src="https://github.com/sjimenez44/LocalEdge/actions/workflows/ci.yml/badge.svg"/>
  </a>
</p>

<p align="center">
  <p align="center">
    Browse the <a href="https://github.com/sjimenez44/LocalEdge/releases">releases</a>.
  </p>
</p>

------------------------

## Features

- 🏭 &nbsp; Create different types of sensors
- 📦 &nbsp; Send data to IoT Hub
- 📥 &nbsp; Receive data from IoT Hub

## Environment Variables

- **NODE_ENV**: Type of environment (development, production)
- **CONN_STR**: Connection string of device to Azure IoT Hub
- **SENSORID**: Device ID of the sensor
- **SENSORTYPE**: Sensor type (temperature, humidity, etc)
- **FREQMSG**: Time to send data expressed in ms

To run this project, you will need to add the following files `development.env` and `production.env` in the root of the project with the following content:

```
CONN_STR=<your_connection_string>
SENSORID=<your_device_id>
SENSORTYPE=<your_sensor_type>
FREQMSG=<time_to_send_data>
```