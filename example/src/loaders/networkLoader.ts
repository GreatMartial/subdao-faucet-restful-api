import { config } from '../config';
import { ApiPromise, WsProvider } = from '@polkadot/api';
import { ContractPromise } = from '@polkadot/api-contract';
import { Keyring } = from '@polkadot/keyring';
import fs = require('fs');

export function NetworkInit(config: config): NetworkInterface {
    const nodeAddr = () => `${config.app.schema}://${config.app.host}:${config.app.port}`;
    const rawData = fs.readFileSync(config.abiPath);
    const abi = JSON.parse(rawData);
    const contractAddress = config.contractAddress;

    const provider = new WsProvider(nodeAddr);
    const api = await ApiPromise.create({ provider })

    const value = 0;
    const gasLimit = -1;

    let contract = initContractProvider(api, abi, contractAddress)

    return contract
}

function initContractProvider(api: any, abi: string, address: string) {
    const contract = new ContractPromise(api, abi, address); 
    return contract
}

export { NetworkInterface } from '../lib/network'