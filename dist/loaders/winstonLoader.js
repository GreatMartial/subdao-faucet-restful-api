"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonLoader = void 0;
const config_1 = require("./../config");
const winston_1 = require("winston");
const winstonLoader = (settings) => {
    (0, winston_1.configure)({
        transports: [
            new winston_1.transports.Console({
                level: config_1.config.log.level,
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
exports.winstonLoader = winstonLoader;
//# sourceMappingURL=winstonLoader.js.map