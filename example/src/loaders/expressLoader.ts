import { Application } from 'express';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { createExpressServer } from 'routing-controllers'
import { config } from '../config';

export const expressLoader: MicroframeworkLoader = (settings: MicroframeworkLoader | undefined) => {
  if (settings) {
    const expressApp: Application = createExpressServer({
      defaultErrorHandler: false,

      controllers: config.app.dirs.controllers,
    });
    const server = expressApp.listen(config.app.port);
    settings.setData('express_server', server);
  }
};