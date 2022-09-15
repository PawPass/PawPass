import { Request, Response, NextFunction } from "express";

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    console.log(req, ' is req.user');
    req.user ? next() : res.sendStatus(401);
};