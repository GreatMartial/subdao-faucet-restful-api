"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const fs = __importStar(require("fs"));
const pkg = __importStar(require("../package.json"));
const j_toml_1 = __importDefault(require("@ltd/j-toml"));
const configPath = '/Users/subdao/Workspace/subdao.com/subdao-faucet-restful-api/example/src/config.toml';
function getConfig(key) {
    const fileBytes = fs.readFileSync(configPath, 'utf8');
    let rootTable;
    try {
        rootTable = j_toml_1.default.parse(fileBytes, 1.0, '\n');
    }
    catch (err) {
        console.error(err);
    }
    const map = new Map(Object.entries(rootTable));
    console.log(map);
    const value = map.get(key);
    if (typeof value === 'undefined') {
        throw new Error(`Environment variable ${key} is not set.`);
    }
    return value;
}
function toBool(value) {
    return value === 'true';
}
exports.config = {
    app: {
        name: getConfig('app_name'),
        version: pkg.version,
        description: pkg.description,
        host: getConfig('host'),
        schema: getConfig('schema'),
        port: getConfig('port'),
        banner: toBool(getConfig('banner')),
        dirs: {
            controllers: getConfig('controllers'),
        },
    },
    network: [
        {
            name: getConfig('app_name'),
            endpoint: getConfig('ws'),
            contractAddress: getConfig('contract_address'),
            abiPath: getConfig('api_path'),
            userAddress: getConfig('userAddress'),
        },
    ],
    log: {
        level: getConfig('log_level'),
        // json: getConfig,
        output: getConfig('log_output'),
    },
};
//# sourceMappingURL=config.js.map