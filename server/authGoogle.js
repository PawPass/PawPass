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
const passport_1 = __importDefault(require("passport"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = __importStar(require("dotenv")); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const sqlDb_1 = __importDefault(require("./sqlDb"));
dotenv.config();
console.log(process.env.GOOGLE_CLIENT_ID, ' is id');
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback: true
}, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function (_request, _accessToken, _refreshToken, profile, done) {
    // query to add this users to the db
    console.log("reach here", profile.emails[0].value);
    const email = profile.emails[0].value;
    const searchQuery = 'Select * FROM "User" WHERE email = $1';
    const insertQuery = `INSERT INTO "User" (email) VALUES ($1)`;
    try {
        const res = await sqlDb_1.default.query(searchQuery, [email]);
        console.log('user:', res.rows[0]);
        if (res.rows.length == 0) {
            sqlDb_1.default.query(insertQuery, [email])
                .then(() => console.log('insert new user'))
                .catch((err) => console.log('insert new user error', err));
        }
        else {
            console.log('existing user!');
        }
    }
    catch (err) {
        console.log('search user error ', err);
    }
    return done(null, profile);
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
//# sourceMappingURL=authGoogle.js.map