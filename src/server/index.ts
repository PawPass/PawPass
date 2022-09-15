import express, { Request, Response, Router, Express, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import router from './route';
import db from "./mongoDb";
import 'dotenv';
import { RequestHandler } from 'express-serve-static-core';
import { terminal } from './services/terminal';
import session from 'express-session';
import passport from 'passport';
require('./authGoogle');
import userRouter from './routers/userRouter';
import petRouter from './routers/petRouter';
import rentRouter from './routers/rentRouter';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const app: Express = express();

// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.header('Access-Control-Allow-Origin', '');
//   next();
// });

app.use(session( {secret: 'cats'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve(__dirname, '../../public')));

db.connect();

app.use(cors());
app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(express.json() as RequestHandler);

const port: number = Number(process.env.EXPRESS_PORT) || 3000;

app.use(express.static(path.join(__dirname, '../dist')));


app.use('/', userRouter);
app.use('/', petRouter);
app.use('/', rentRouter);

app.get('/', (req: Request, res: Response) => {
  terminal('sending index.html');
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const routes: Router[] = Object.values(router);
app.use('/api', routes);
// app.use((req: Request, res: Response) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err: Error, req: Request, res: Response) => {
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
