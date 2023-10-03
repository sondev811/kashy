// This file contains the code to start the server

// Set up an application
import express from "express";
// Import the routes
import router from "./dbRoutes";

import createError from "http-errors";

// Import dotenv package to use .env variables
// and set the path to the .env file
import * as dotenv from "dotenv";
dotenv.config(
    {
        path: "../../.env"
    }
);

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
  
module.exports = app;