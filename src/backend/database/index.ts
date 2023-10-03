// This file contains the code to start the server

// Set up an application
import { Application } from "express";
// Import the routes
import dbRoutes from "./routes/dbRoutes";

export default class Routes {
    constructor(app: Application) {
        app.use("/api", dbRoutes);

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    }
}