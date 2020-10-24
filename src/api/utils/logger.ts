import * as path from 'path';
import * as winston from 'winston';
require('winston-daily-rotate-file');
const logDirectory = path.join(__dirname, '../logs/winston');
const transports = [];

const fileTransport = new (winston.transports["DailyRotateFile"])({
  filename: `${logDirectory}/` + 'demo-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  handleExceptions: true,
  colorized: true,
  prettyPrint: function(object) {
    return JSON.stringify(object);
  },
});

transports.push(fileTransport);

if (process.env.NODE_ENV !== 'production') {
  const consoleLog = new winston.transports.Console({
    level: 'debug',
    handleExceptions: false,
  });
  transports.push(consoleLog);
}
const logger = (winston["createLogger"])({
  transports,
  exitOnError: false,
});

export default logger;
