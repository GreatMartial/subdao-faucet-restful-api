import {
  Authorized, Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put, Req
} from 'routing-controllers';

import { User } from '../models/User';
import { faucetServiceInterface } from '../services/faucet';
import { subdaoNode } from '../network/subdao';

@JsonController('/faucet')
export class faucetController {
    api: faucetServiceInterface;
    constructor() {
      this.getApiInstance().then(() => {});
    };

    async getApiInstance(): faucetServiceInterface {
      switch (network.name) {
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
    public sendToken(address: string, amount: string): void {
      return this.api.sendToken(address, amount);
    }
}
