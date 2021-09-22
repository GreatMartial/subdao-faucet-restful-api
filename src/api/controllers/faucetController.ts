import {
  Authorized, Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put, Req
} from 'routing-controllers';

import { FaucetServiceInterface } from '../services/faucet';
import { subdaoNode } from '../network/subdao';
import { config } from '../../config';

@JsonController('/faucet')
export class faucetController {
    api: FaucetServiceInterface;
    constructor() {
      this.api = this.getApiInstance();
      // this.getApiInstance().then(() => {});
    };

    getApiInstance(): FaucetServiceInterface {
      switch (config.app.name) {
        case 'subdao':
          this.api = new subdaoNode();
          break;
        default:
          console.log("not find network name.");
          break;
      }
      return this.api;
    }
    /*
    public getTransferHistory(): Promise<User[]> {
      return this.api.getTransferHistory();
    }
    */
    @Post('/')
    public sendToken(address: string, amount: string): Promise<(boolean)> {
      return this.api.sendToken(address, amount);
    }
}
