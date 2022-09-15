"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config2_1 = require("./config2");
console.log(config2_1.config2.sqldb.url, ' is ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
const pool = new pg_1.Pool({
    connectionString: config2_1.config2.sqldb.url,
});
const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS "User" (
      "_id" SERIAL PRIMARY KEY,
      "name" VARCHAR NULL,
      "email" VARCHAR UNIQUE NOT NULL,
      "phone" VARCHAR UNIQUE NULL,
      "bio" VARCHAR
    );
    CREATE TABLE IF NOT EXISTS "Pet" (
      "_id" SERIAL PRIMARY KEY,
      "user_id" INT NOT NULL,
      "name" VARCHAR NOT NULL,
      "species" VARCHAR NOT NULL,
      "breed" VARCHAR NOT NULL,
      "age" VARCHAR NOT NULL,
      "gender" VARCHAR NOT NULL,
      "size" VARCHAR NOT NULL,
      "location" VARCHAR NOT NULL,
      "temperament" VARCHAR NOT NULL,
      "status" VARCHAR NOT NULL,
      "bio" VARCHAR,
      "healthCertificate" VARCHAR NOT NULL,
      "reviews" VARCHAR NOT NULL,
      "pic" VARCHAR,
      FOREIGN KEY ("user_id") REFERENCES "User"("_id")
    );
    CREATE TABLE IF NOT EXISTS "Rent" (
    "id" SERIAL PRIMARY KEY,
    "pet_id" INT NOT NULL,
    "renter" INT NOT NULL,
    "rentee" INT NOT NULL,
    "rented_date" DATE NOT NULL,
    "ending_date" DATE NOT NULL,
    FOREIGN KEY ("pet_id") REFERENCES "Pet"("_id"),
    FOREIGN KEY ("renter") REFERENCES "User"("_id"),
    FOREIGN KEY ("rentee") REFERENCES "User"("_id")
  );
  `;
pool.query(createTablesQuery, (err, res) => {
    console.log(err);
});
exports.default = pool;
//# sourceMappingURL=sqlDb.js.map