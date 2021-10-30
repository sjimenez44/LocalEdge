const logger = require('./logger');

exports.printResultFor = (op) => {
    return function printResult(err, res) {
        if (res) logger.success(`${op} status: ${res.constructor.name}`);
        if (err) logger.error(`${op} error: ${err.toString()}`);
    };
}
