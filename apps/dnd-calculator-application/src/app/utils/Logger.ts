import winston from 'winston';


const { combine, colorize } = winston.format;

export class Logger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: combine(
      colorize({ all: true}),
      (winston.format.json())),
      transports: [
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      ],
    });
  }

  info(message: string) {
    this.logger.info(message);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  error(message: string, error?: Error) {
    this.logger.error(message, error);
  }

  debug(message: string) {
    this.logger.debug(message);
  }
}


