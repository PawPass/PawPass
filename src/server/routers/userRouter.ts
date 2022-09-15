import { Router, Request, Response} from 'express';

import passport from 'passport';
import { isLoggedIn } from '../controllers/auth';
const userRouter = Router();
// routes
// register routers
// userRouter: get /user, post /user, update /user, delete /user

userRouter.get('/auth2', (req: Request, res: Response) => {
    res.send('<a href="/auth/google"> Authenticate with Google</a>');
});

userRouter.get('/protected', isLoggedIn, (req: Request, res: Response) => {
    res.send( `Hello`);
} );

userRouter.get('/logout', (req: Request, res: Response) => {
    req.logout({keepSessionInfo: false}, (err) => console.log('logout err', err));
    res.send('Goodbye!');
})
userRouter.get('/auth/google', 
  passport.authenticate('google', { scope: ['email', 'profile']})
);

userRouter.get('/google/callback', 
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure'
    })
);

userRouter.get('/auth/failure', (req: Request, res: Response) => {
    res.send('Something went wrong in google authentication...');
} );

// userRouter.post('/user', (req: Request, res: Response, next: NextFunction) => {
    
// })




export default userRouter;