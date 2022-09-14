"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./endpoints/auth"));
const user_1 = __importDefault(require("./endpoints/user"));
const cluster_1 = __importDefault(require("./endpoints/cluster"));
const prom_1 = __importDefault(require("./endpoints/prom"));
const faas_1 = __importDefault(require("./endpoints/faas"));
exports.default = {
    auth: auth_1.default,
    user: user_1.default,
    cluster: cluster_1.default,
    prom: prom_1.default,
    faas: faas_1.default
};
//# sourceMappingURL=index.js.map