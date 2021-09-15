import * as path from 'path';
import * as fs from 'fs';
import * as pkg from '../package.json';

import toml from '@ltd/j-toml';

const configPath = '/Users/subdao/Workspace/subdao.com/subdao-faucet-restful-api/example/src/config.toml';

function getConfig(key: string): string {
  const fileBytes = fs.readFileSync(configPath, 'utf8');
  let rootTable: any;
  try {
    rootTable = toml.parse(fileBytes, 1.0, '\n');
  } catch (err) {
    console.error(err);
  }
  const map = new Map(Object.entries(rootTable));
  console.log(map);

  const value = map.get(key) as string;
  if (typeof value === 'undefined') {
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return value
}

function toBool(value: string): boolean {
  return value === 'true';
}

export const config = {
  app: {
    name: getConfig('app_name'),
    version: (pkg as any).version,
    description: (pkg as any).description,
    host: getConfig('host'),
    schema: getConfig('schema'),
    port: getConfig('port'),
    banner: toBool(getConfig('banner')),
    dirs: {
      controllers: getConfig('controllers'),
    },
  },
  network: 
    [
      {
        name: getConfig('app_name'),
        endpoint: getConfig('ws'),
        contractAddress: getConfig('contract_address'),
        abiPath: getConfig('api_path'),
        userAddress: getConfig('userAddress'),
      },
    ],
  log: {
    level: getConfig('log_level'),
    // json: getConfig,
    output: getConfig('log_output'),
  },
};