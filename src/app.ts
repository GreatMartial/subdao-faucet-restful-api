import { bootstrapMicroframework } from 'microframework-w3tec';

import { banner } from './lib/banner';
import { Logger } from './lib/logger';
import { expressLoader } from './loaders/expressLoader';
import { winstonLoader } from './loaders/winstonLoader';

const log = new Logger(__filename);
bootstrapMicroframework({
  loaders: [
    winstonLoader,
    expressLoader,
  ],
})
  .then(() => banner(log))
  .catch(error => log.error('Application is crashed: ' + error));