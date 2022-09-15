"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("./route"));
const mongoDb_1 = __importDefault(require("./mongoDb"));
require("dotenv");
const terminal_1 = require("./services/terminal");
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
require('./authGoogle');
const userRouter_1 = __importDefault(require("./routers/userRouter"));
const petRouter_1 = __importDefault(require("./routers/petRouter"));
const rentRouter_1 = __importDefault(require("./routers/rentRouter"));
const dotenv = __importStar(require("dotenv")); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const app = (0, express_1.default)();
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.header('Access-Control-Allow-Origin', '');
//   next();
// });
app.use((0, express_session_1.default)({ secret: 'cats' }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../public')));
mongoDb_1.default.connect();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const port = Number(process.env.EXPRESS_PORT) || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.use('/', userRouter_1.default);
app.use('/', petRouter_1.default);
app.use('/', rentRouter_1.default);
app.get('/', (req, res) => {
    (0, terminal_1.terminal)('sending index.html');
    res.sendFile(path_1.default.join(__dirname, '../dist/index.html'));
});
const routes = Object.values(route_1.default);
app.use('/api', routes);
// app.use((req: Request, res: Response) => res.status(404).send('This is not the page you\'re looking for...'));
app.use((err, req, res) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
app.listen(port);
console.log(`VaaS is awake on port: ${port}`);
//# sourceMappingURL=index.js.map