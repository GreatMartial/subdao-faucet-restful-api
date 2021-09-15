import { config } from '../../../config';
import {} from '';
import * as fs from 'fs';

export class SubdaoNode {
    contructor{ 
      @Logger(__filename) private log: LoggerInterface
      @Network(config) private network: NetworkInterface
    }

    public invoke(func: string, ...args: string[]): boolean {
        await contract.tx.$func({value, gasLimit}, "func", addrListArr).signAndSend(alice, (result) => {
            if (result.status.isInBlock()) {
                console.log('Succuess of contract invoke');
            }
        });
        return true;
    }
}