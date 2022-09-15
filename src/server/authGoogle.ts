import passport from 'passport';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const  GoogleStrategy = require('passport-google-oauth20').Strategy;
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import pool from './sqlDb';
dotenv.config();

console.log(process.env.GOOGLE_CLIENT_ID, ' is id');
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback: true
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function(_request: any, _accessToken: any, _refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any) {
    // query to add this users to the db
    console.log("reach here", profile.emails[0].value);
    const email = profile.emails[0].value;
    const searchQuery = 'Select * FROM "User" WHERE email = $1';
    const insertQuery = `INSERT INTO "User" (email) VALUES ($1)`;
    try {
      const res = await pool.query(searchQuery, [email]);
      console.log('user:', res.rows[0]);
      if (res.rows.length == 0) {
        pool.query(insertQuery, [email])
        .then(() => console.log('insert new user'))
        .catch ((err) => console.log('insert new user error', err));
      } else {console.log('existing user!');}
    } catch (err) {
      console.log('search user error ', err);
    }    
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: false | string | null | undefined, done) => {
  done(null, user);
});
