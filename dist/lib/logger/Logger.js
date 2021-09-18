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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const path = __importStar(require("path"));
const winston = __importStar(require("winston"));
class Logger {
    constructor(scope) {
        this.scope = Logger.parsePathToScope((scope) ? scope : Logger.DEFAULT_SCOPE);
    }
    static parsePathToScope(filePath) {
        if (filePath.indexOf(path.sep) >= 0) {
            filePath = filePath.replace(process.cwd(), '');
            filePath = filePath.replace(`${path.sep}src${path.sep}`, '');
            filePath = filePath.replace(`${path.sep}dist${path.sep}`, '');
            filePath = filePath.replace('.ts', '');
            filePath = filePath.replace('.js', '');
            filePath = filePath.replace(path.sep, ':');
        }
        return filePath;
    }
    debug(message, ...args) {
        this.log('debug', message, args);
    }
    info(message, ...args) {
        this.log('info', message, args);
    }
    warn(message, ...args) {
        this.log('warn', message, args);
    }
    error(message, ...args) {
        this.log('error', message, args);
    }
    log(level, message, args) {
        if (winston) {
            winston[level](`${this.formatScope()} ${message}`, args);
        }
    }
    formatScope() {
        return `[${this.scope}]`;
    }
}
exports.Logger = Logger;
Logger.DEFAULT_SCOPE = 'app';
//# sourceMappingURL=Logger.js.map