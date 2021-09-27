import * as fs from 'fs';
import toml from '@ltd/j-toml';
import { safeTouch } from 'safe-touch';

import * as pkg from '../../../package.json';

type NetworkConfig = {
  plateform: number,
  detail: any[],
}
const enum NetworkType {
  SUBSCRIPTION = 0,
  OTHER = 1,
}

function getValue(object: any, path: string): any {
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.').reduce((o, k) => (o || {})[k], object);
}

let plateform: number;
export function getNetworkByConfig(object: any, path: string): any {
  const res = [];
  if (object.network.substrate !== undefined) {
    plateform = NetworkType.SUBSCRIPTION;
  }

  const result = getValue(object, path);
  for (let i = 0; i < result.length; i++) {
    res.push({
      plateform,
      name: getValue(result[i], 'name'),
      ws: getValue(result[i], 'ws'),
      contractAddress: getValue(result[i], 'contractAddress'),
      abiPath: getValue(result[i], 'abiPath'),
      userAddress: getValue(result[i], 'userAddress'),
    });
  }
  return res;
}

export function toBool(src: Map<string, any>, value: string): boolean {
  return value === 'true';
}

/*
export function getPath(src: Map<string, any>, key: string): string {
  return
}

export function getPaths(path: string): string[] {
  return path.
}
*/
export class Config {
  app: {
    name: string,
    version: string,
    description: string,
    schema: string,
    host: string,
    port: string,
    routePrefix: string,
    banner: boolean,
    dirs: {
      controllers: string[],
    }
  }

  network: [
    {
      plateform: number,
      name: string,
      ws: string,
      contractAddress: string,
      abiPath: string,
      userAddress: string,
    }
  ]

  log: {
    level: string,
    outPut: string,
  }

  constructor(filePath: string) {
    const config = this.createConfig(filePath);
    this.app = config.app;
    this.app.version = (pkg as any).version;
    this.network = getNetworkByConfig(config, 'network.substrate');
    this.log = config.log;
  }

  createConfig(filePath: string): any {
    const fileBytes = fs.readFileSync(filePath, 'utf8');
    let rootTable: any;
    try {
        rootTable = toml.parse(fileBytes, 1.0, '\n');
    } catch (err) {
        console.error(err);
    }
    return rootTable;
  }
}