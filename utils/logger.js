const winston = require('winston');

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'server' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'status.log' }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console());
}

exports.success = function(details) {
    logger.log({ level: 'info', message: details });
}

exports.error = function(details) {
    logger.log({ level: 'error', message: details });
}
