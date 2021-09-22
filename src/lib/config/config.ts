import * as path from 'path';
import * as fs from 'fs';
import * as pkg from '../../../package.json';
import toml from '@ltd/j-toml';

/*
export function getValue(key: string): string {
  const value = src.get(key) as string;
  if (typeof value === 'undefined') {
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return value;
}
*/

export function getValueArray(src: Map<string, any>, key: string): string[] {
  return [];
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
    host: string,
    schema: string,
    routePrefix: string,
    port: number,
    banner: string,
    dirs: {
      controllers: string[],
    }
  }

  network: [
    {
      name: string,
      contractAddress: string,
      abiPath: string,
      userAddress: string,
    },
  ]

  log: {
    level: string,
    outPut: string,
  }

  constructor(filePath: string) {
    const configMap = this.createCofing(filePath);
    this.app = configMap.get('app');
    this.network = configMap.get('network');
    this.log = configMap.get('log');
  }

  createCofing(filePath: string): Map<string, any> {
    const fileBytes = fs.readFileSync(filePath, 'utf8');
    let rootTable: any;
    try {
        rootTable = toml.parse(fileBytes, 1.0, '\n');
    } catch (err) {
        console.error(err);
    }
    const configToMap = new Map(Object.entries(rootTable));
    return configToMap;
  }
}