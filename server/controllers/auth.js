"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
const isLoggedIn = (req, res, next) => {
    console.log(req, ' is req.user');
    req.user ? next() : res.sendStatus(401);
};
exports.isLoggedIn = isLoggedIn;
//# sourceMappingURL=auth.js.map