"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminal = void 0;
function terminal(message) {
    if (process.env.EXPRESS_CONSOLE_LOG === 'on') {
        if (typeof message === 'object') {
            console.table(message);
        }
        else {
            console.log(message);
        }
    }
}
exports.terminal = terminal;
//# sourceMappingURL=terminal.js.map