/* This file contains the code for the 404 page of the application */

// Required imports
import React, { useEffect } from "react"; // Import React namespace and useEffect function to change the page's title

// Import components
import Head from "../components/Head";

/**
 * @name Error404
 * @summary Renders the Error 404 page when it is called
 * @param setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the Error 404 page
 */
export default function Error404({setActivePage}: {setActivePage: any}) {

    // Set the page's title and active page to 404 page
    useEffect(() => {
        document.title = "404 Error Page | Kashy";
        setActivePage("404");
    }, [setActivePage]);

    return (
        <main>
            <Head />
        </main>
    )
}