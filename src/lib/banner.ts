import { config } from '../config'
import { Logger } from '../lib/logger'

export function banner(log: Logger): void {
  console.log(`config: ${config}`);
/*
  if (config.app.banner) {
      // const route = () => `${config.app.schema}://${config.app.host}:${config.app.port}`;
      log.info(``);
//      log.info(`Your app is ready on ${route()}${config.app.routePrefix}`);
      log.info(`To shut it down, press <CTRL> + C at any time.`);
      log.info(``);
      log.info('-------------------------------------------------------');
//      log.info(`Network  : ${config.network.name}`);
      // log.info(`Version      : ${config.app.version}`);
      log.info(``);
//      log.info(`API Info     : ${route()}${config.app.routePrefix}`);
      log.info('-------------------------------------------------------');
      log.info('');
  } else {
      log.info(`Application is up and running.`);
  }
  */
}
