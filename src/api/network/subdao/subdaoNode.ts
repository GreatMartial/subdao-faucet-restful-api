import { ApiPromise, WsProvider, ContractPromise } from '@polkadot/api';
import Keyring from '@polkadot/keyring';
import { KeyringPair } from '@polkadot/keyring/types';

import { config } from '../../../config';
import * as fs from 'fs';
import { FaucetServiceInterface } from '../../services/faucet';

const schema: string = config.schema;
const url: string = config.host + config.port;
const abi: string = config.abiPath;
const contractAddress: string = config.contractAddress;
const value: number = 0;
const gasLimit: number = -1;
const erc20Addr: string = config.contractAddress;
const toAddr: string = config.contractAddress;

// test
const alice: string = '123';
export class subdaoNode implements FaucetServiceInterface {   
  api: ApiPromise | undefined;
  account: KeyringPair | undefined;
  contract: ContractPromise | undefined;
  constructor() {
      this.getApiAndConstractInstance().then( () => {
      }).catch((e) => {
          // logger.error(e);
      });
  } 
  
  /*
  { 
      this.getApiAndConstractInstance().then(() => {
          // const keyring = new Keyring({ type: 'sr25519' });
          // this.account = keyring.addFromMnemonic(mnemonic);
        }).catch((e) => {
          // logger.error(e);
          // errorCounter.plusOne('other');
        });
      );
  }
  */
  async getApiAndConstractInstance(): Promise<FaucetServiceInterface> {
      if (!this.api) {
          const provider = new WsProvider(schema + url);

          this.api = await ApiPromise.create({ provider });

          this.contract = new ContractPromise(this.api, abi, contractAddress);
      }
      await this.api.isReady;
      await this.contract.isReady;
      return this;
  }

  public async sendToken(address: string, amount: string): Promise<(boolean)> {
      // let result: DripResponse;

      try {
          if (!this.account) throw new Error('account not ready');

          // const dripAmount = Number(amount) * 10 ** decimals;
          const client = await this.getApiAndConstractInstance();

          // logger.info('sending tokens');

          // TODO: 此处需更换为vault合约的提取token方法
          /// 1. 获取合约的metadata.
          /// 2. 查询abi中是否有将要调用的方法.
          /// 3. 构造调用方法.
          // const transfer = api.tx.balances.transfer(address, amount);
          // const hash = await transfer.signAndSend(this.account, {nonce: -1});
          // result = { hash: hash.toHex() };
          await client.contract.tx.withdraw({ value, gasLimit }, erc20Addr, toAddr, amount)
              .signAndSend(alice, (result) => {
                  if (result.status.isInBlock()) {
                      console.log('success to send token.');
                  }
              });
      } catch (e) {
          // result = { error: (e as Error).message || 'An error occured when sending tokens'}
          // logger.error('An error occured when sending tokens', e);
          console.log('error' + e);
          // errorCounter.plusOne('other');
          return false;
      }
      return true;
  }

  // TODO: async resquestToken(message)
}