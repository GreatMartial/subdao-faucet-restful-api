import {
  Authorized, Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put, Req
} from 'routing-controllers';

import { User } from '../models/User';
import { FaucetService } from '../services/FaucetService';

@Authorized()
@JsonController('/faucet')
export class UserController {

    constructor(
      private faucetService: FaucetService
      @Faucet() private faucet: FaucetInterface
    ) { }

    @Get()
    public getTransferHistory(): Promise<User[]> {
      return this.faucetService.getTransferHistory();
    }


    @Post()
    public transferToken(@Body() users: User[]): void {
      return this.faucetService.transferToken(users);
    }

}
