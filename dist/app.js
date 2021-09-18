"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microframework_w3tec_1 = require("microframework-w3tec");
const banner_1 = require("./lib/banner");
const logger_1 = require("./lib/logger");
const expressLoader_1 = require("./loaders/expressLoader");
const winstonLoader_1 = require("./loaders/winstonLoader");
const log = (0, logger_1.Logger)(__filename);
(0, microframework_w3tec_1.bootstrapMicroframework)({
    loaders: [
        winstonLoader_1.winstonLoader,
        expressLoader_1.expressLoader,
    ],
})
    .then(() => (0, banner_1.banner)(log))
    .catch(error => log.error('Application is crashed: ' + error));
//# sourceMappingURL=app.js.map