"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subdaoNode = void 0;
const api_1 = require("@polkadot/api");
const config_1 = require("../../../config");
const schema = config_1.config.schema;
const url = config_1.config.host + config_1.config.port;
const abi = config_1.config.abiPath;
const contractAddress = config_1.config.contractAddress;
const value = 0;
const gasLimit = -1;
const erc20Addr = config_1.config.contractAddress;
const toAddr = config_1.config.contractAddress;
class subdaoNode {
    constructor() {
        this.getApiAndConstractInstance().then(() => {
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
    getApiAndConstractInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.api) {
                const provider = new api_1.WsProvider(schema + url);
                this.api = yield api_1.ApiPromise.create({ provider });
                this.contract = new api_1.ContractPromise(this.api, abi, contractAddress);
            }
            yield this.api.isReady;
            yield this.contract.isReady;
            return this;
        });
    }
    sendToken(address, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            // let result: DripResponse;
            try {
                if (!this.account)
                    throw new Error('account not ready');
                // const dripAmount = Number(amount) * 10 ** decimals;
                const client = yield this.getApiAndConstractInstance();
                // logger.info('sending tokens');
                // TODO: 此处需更换为vault合约的提取token方法
                /// 1. 获取合约的metadata.
                /// 2. 查询abi中是否有将要调用的方法.
                /// 3. 构造调用方法.
                // const transfer = api.tx.balances.transfer(address, amount);
                // const hash = await transfer.signAndSend(this.account, {nonce: -1});
                // result = { hash: hash.toHex() };
                yield client.contract.tx.withdraw({ value, gasLimit }, erc20Addr, toAddr, amount)
                    .signAndSend(alice, (result) => {
                    if (result.status.isInBlock()) {
                        console.log('success to send token.');
                    }
                });
            }
            catch (e) {
                // result = { error: (e as Error).message || 'An error occured when sending tokens'}
                // logger.error('An error occured when sending tokens', e);
                console.log('error' + e);
                // errorCounter.plusOne('other');
                return false;
            }
            return true;
        });
    }
}
exports.subdaoNode = subdaoNode;
//# sourceMappingURL=subdaoNode.js.map