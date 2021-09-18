"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.faucetController = void 0;
const routing_controllers_1 = require("routing-controllers");
const subdao_1 = require("../network/subdao");
let faucetController = class faucetController {
    constructor() {
        this.getApiInstance().then(() => { });
    }
    ;
    getApiInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (network.name) {
                case 'subdao':
                    this.api = new subdao_1.subdaoNode();
                    break;
                default:
                    console.log("not find network name.");
                    break;
            }
            return this.api;
        });
    }
    /*
    public getTransferHistory(): Promise<User[]> {
      return this.api.getTransferHistory();
    }
    */
    sendToken(address, amount) {
        return this.api.sendToken(address, amount);
    }
};
__decorate([
    (0, routing_controllers_1.Post)('/')
], faucetController.prototype, "sendToken", null);
faucetController = __decorate([
    (0, routing_controllers_1.JsonController)('/faucet')
], faucetController);
exports.faucetController = faucetController;
//# sourceMappingURL=faucetController.js.map