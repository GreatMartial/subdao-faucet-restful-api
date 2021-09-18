"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = void 0;
const routing_controllers_1 = require("routing-controllers");
const config_1 = require("../config");
const expressLoader = (settings) => {
    if (settings) {
        const expressApp = (0, routing_controllers_1.createExpressServer)({
            defaultErrorHandler: false,
            controllers: [config_1.config.app.dirs.controllers],
        });
        const server = expressApp.listen(config_1.config.app.port);
        // settings.setData('express_server', server);
    }
};
exports.expressLoader = expressLoader;
//# sourceMappingURL=expressLoader.js.map