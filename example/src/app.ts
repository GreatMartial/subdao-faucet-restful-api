import { bootstrapMicroframework } from 'microframework-w3tec';

import { banner } from './lib/banner';
import { Logger } from './lib/logger';
import { expressLoader } from './loaders/expressLoader';
import { winstonLoader } from './loaders/winstonLoader';
import { networkLoader } from './loaders/networkLoader';

const log = Logger(__filename);
bootstrapMicroframework({
  loaders: [
    winstonLoader,
    expressLoader,
    networkLoader,
  ],
})
  .then(() => banner(log))
  .catch(error => log.error('Application is crashed: ' + error));