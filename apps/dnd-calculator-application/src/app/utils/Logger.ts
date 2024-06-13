import winston from 'winston';
import { v4 as uuid } from 'uuid';


const { combine, colorize } = winston.format;

export class Logger {
  private logger: winston.Logger;
  private correlationId: string;

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
    this.correlationId = uuid();
  }

  info(message: string, value?: any) {
    if(value) return this.logger.info(`[${this.correlationId}] ${message}, ${value}`);
    return this.logger.info(`[${this.correlationId}] ${message}`);
  }

  warn(message: string) {
    this.logger.warn(`[${this.correlationId}] ${message}`);
  }

  error(message: string, error?: any) {
    if (error) {
      this.logger.error(`[${this.correlationId}] ${message} with error: ${error}`);
    } else {
      this.logger.error(`[${this.correlationId}] ${message}`);
    }
  }

  debug(message: string) {
    this.logger.debug(`[${this.correlationId}] ${message}`);
  }
}


