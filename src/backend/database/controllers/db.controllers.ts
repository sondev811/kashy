// This file contains the code for the controller to the db

// Import request and response interfaces from Express
import { Request, Response } from "express";
// Import data model
import IQuote from "../models/quote.model";
// Import all functions
import dbFunctions from "../functions/IFunctions";

// Class to store all controller functions
export default class dbController {

    // Find all users using email and phone
    async findAll(req: Request, res: Response) {

        // Declare two variables to store the
        // page number and page size (for pagination)
        const pageNo = parseInt(req.query.page as string) || 1;
        const pageSizeNo = parseInt(req.query.pageSize as string) || 10;

        // Calculate the offset and limit to query the data
        const offset: number = (pageNo - 1) * pageSizeNo;
        const limit: number = pageSizeNo;

        try {
            // Store the user inputs into two local variables
            const email: string = req.query.email as string;
            const phone: number = parseInt(req.query.phone as string);

            console.log(phone);

            // Send both variables to the retrieveAll function
            const result = await dbFunctions.retrieveAll(
                { email, phone, limit, offset }
            );

            // If no users are found
            if (result.length === 0) {
                res.status(404).json({error: 'User not found'});
            }
            // If at least one user is found
            else {
                res.json(result);
            }

        } catch (error) {
            // Return the error message to the user
            res.status(500).json({
                error: `Internal Server Error. Details: ${error}`
            })
        }
    }

    async findOne(req: Request, res: Response) {

        try {
            // Store the input id from the user to a local variable
            const id: number = +req.params.id;
            // Send the id to the retrieveById function
            const result: IQuote | undefined = await dbFunctions.retrieveById(id);

            // If no user can be found
            if (result == undefined)
            {
                // Send the error message back to the user
                res.send({
                    msg: `No user with id ${req.params.id} is found`,
                    status: 404
                })
            }
            // If at least one user is found
            else res.json(result);

        } catch (error) {
            // Send the error message back to the user
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }

}
