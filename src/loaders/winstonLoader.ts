import { config } from './../config';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { configure, format, transports } from 'winston';

export const winstonLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  configure({
    transports: [
      new transports.Console({
        level: config.log.level,
        handleExceptions: true,
        /*
        format: config.node !== 'development'
            ? format.combine(
                format.json()
            )
            : format.combine(
                format.colorize(),
                format.simple()
            ),
        */
      }),
    ],
  });
};
