// Import MySQL package to establish connection
import mysql from 'mysql2';
// Import dotenv package to use .env variables
// and set the path to the .env file
import * as dotenv from "dotenv";
dotenv.config();

// Note for later use:
// Do not connect to the AWS server using nodemon,
// use 'ts-node-esm fileName.ts' in cmd instead

// Fill in the database info from the .env file
// and establish connection
export var connection = mysql.createConnection(
    {
        host: process.env.AWS_HOST,
        user: process.env.AWS_USER,
        password: process.env.AWS_PASS,
        database: process.env.AWS_DB,
        port: 3306
    }
);

console.log(process.env.AWS_HOST);

// Test connection
connection.connect(function(err) {

    if (err) {
      console.error('Database connection failed: ' + err.message);
      return;
    }
  
    console.log('Connected to database.');
  });
  
connection.end();