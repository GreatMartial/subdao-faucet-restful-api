import { Service } from 'typedi';

// import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
// import { UserRepository } from '../repositories/UserRepository';
// import { events } from '../subscribers/events';

@Service()
export class FaucetService {

    constructor(
      // @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
      @Logger(__filename) private log: LoggerInterface
    ) { }

    public getTransferHistory(): Promise<User[]> {
      this.log.info('Get all the transfer history for User.');
      return this.network.getTransferHistory();
    }

    public async transferToken(users: User[]): boolean {
      this.log.info('Transfer a token to the user => ', user.toString());
      const res = await this.network.transferToken(users);
      return res;
    }

}
