import { Application } from 'express';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { createExpressServer } from 'routing-controllers'
import { config } from '../config';

export const expressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings) {
    console.log('print ==================');
    console.log(config);
    const expressApp: Application = createExpressServer({
      defaultErrorHandler: false,

      controllers: config.app.dirs.controllers,
    });
    const server = expressApp.listen(config.app.host + config.app.port);
    console.log('print expressApp ==================');
    settings.setData('express_server', server);
  }
};