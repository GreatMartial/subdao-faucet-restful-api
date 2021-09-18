"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.banner = void 0;
const config_1 = require("../config");
function banner(log) {
    if (config_1.config.app.banner) {
        const route = () => `${config_1.config.app.schema}://${config_1.config.app.host}:${config_1.config.app.port}`;
        log.info(``);
        //      log.info(`Your app is ready on ${route()}${config.app.routePrefix}`);
        log.info(`To shut it down, press <CTRL> + C at any time.`);
        log.info(``);
        log.info('-------------------------------------------------------');
        //      log.info(`Network  : ${config.network.name}`);
        log.info(`Version      : ${config_1.config.app.version}`);
        log.info(``);
        //      log.info(`API Info     : ${route()}${config.app.routePrefix}`);
        log.info('-------------------------------------------------------');
        log.info('');
    }
    else {
        log.info(`Application is up and running.`);
    }
}
exports.banner = banner;
//# sourceMappingURL=banner.js.map