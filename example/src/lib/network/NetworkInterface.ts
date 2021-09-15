import { config } from '../../config';

export interface NetworkInterface {
    init(config: config): boolean;
    invoke(func: string, ...args: any[]): boolean;
  }