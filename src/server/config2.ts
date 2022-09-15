import { IConfig2 } from "./interfaces/IConfig2";
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export const config2: IConfig2 = {
    sqldb: {
      url: process.env.SQL_URL,
      // port: Number(process.env.MONGO_PORT),
      
      // collection: process.env.MONGO_COLLECTION,
    },
    jwt: {
      access: process.env.JWT_ACCESS_SECRET,
      refresh: process.env.JWT_REFRESH_SECRET
    }
};
