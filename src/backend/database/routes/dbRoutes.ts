// This file contains the code for the routes
// to the AWS's database

// Import the Router interface from Express
import { Router } from "express";
// Import the controller
import dbController from "../controllers/db.controllers";

// Create a router and a controller using the imported stuff
var router = Router();
var controller = new dbController();

router.get("/users", controller.findAll);
router.get("/users/:id", controller.findOne);

export default router;