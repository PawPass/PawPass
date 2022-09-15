"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_1 = require("../controllers/auth");
const userRouter = (0, express_1.Router)();
// routes
// register routers
// userRouter: get /user, post /user, update /user, delete /user
userRouter.get('/api/auth2', (req, res) => {
    res.json('<a href="/auth/google"> Authenticate with Google</a>');
});
userRouter.get('/protected', auth_1.isLoggedIn, (req, res) => {
    res.send(`Hello`);
});
userRouter.get('/logout', (req, res) => {
    req.logout({ keepSessionInfo: false }, (err) => console.log('logout err', err));
    res.send('Goodbye!');
});
userRouter.get('/auth/google', passport_1.default.authenticate('google', { scope: ['email', 'profile'] }));
userRouter.get('/google/callback', passport_1.default.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
}));
userRouter.get('/auth/failure', (req, res) => {
    res.send('Something went wrong in google authentication...');
});
// userRouter.post('/user', (req: Request, res: Response, next: NextFunction) => {
// })
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map