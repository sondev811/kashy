// This file contains the code for all functions
// to interact with the database

// Import connection function
import { connection } from "../db.connection";
// Import data model
import IQuote from "../models/quote.model";
// Import package to signal successful completion of a command
// import { RowDataPacket, FieldPacket } from "mysql2";

// Interface for all implemented functions
interface IFunctions {
    // Retrieve customer data using their email and/or phone
    retrieveAll(
        searchParams: {
            email: string,
            phone: number,
            limit: number,
            offset: number
        }
    ): Promise<IQuote[]>;

    // Retrieve customer data using their id in the db
    retrieveById(
        id: number
    ): Promise<IQuote | undefined>;
}

// Class to implement all functions
class dbFunctions implements IFunctions {
    
    // Implement retrieveAll
    retrieveAll(
        searchParams: {
            email?: string,
            phone?: number,
            limit?: number,
            offset?: number
        }
    ): Promise<IQuote[]> {

        // Declare the search query and condition
        let query: string = "SELECT * FROM workrequest";
        let condition: string = "";

        // If an email is used for searching
        if (searchParams?.email)
            condition += "email = '" + searchParams.email + "'"
        // If a phone number is used for searching
        else if (searchParams?.phone)
            condition += "phone = '" + searchParams.phone + "'"
        // If both a phone number and an email is used for searching
        else if (searchParams?.email && searchParams?.phone)
            condition += "email = '" + searchParams.email + "'" +  " AND phone = '" + searchParams.phone + "'"

        // If the condition string is longer than 0
        if (condition.length)
            query += " WHERE " + condition;

        // Set default return data limit
        if (!searchParams?.limit)
            query += " LIMIT 10";
        else
            query += " LIMIT " + searchParams.limit

        // Set default return data offset
        if (!searchParams?.offset)
            query += " OFFSET 0";
        else
            query += " OFFSET " + searchParams.offset

        console.log(query);

        // Return a promise that comes with the result
        return new Promise((resolve, reject) => {
            connection.query<IQuote[]>(query, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
            })
        })
    }
    
    retrieveById(id: number): Promise<IQuote | undefined> {
        // Return a promise that comes with the result
        return new Promise((resolve, reject) => {
            connection.query<IQuote[]>(
                "SELECT * FROM workrequest WHERE id = ?",
                [id],
                (err, res) => {
                    if (err) reject(err);
                    else resolve(res?.[0]);
                }
            )
        })
    }

}

// Export the class above
export default new dbFunctions();