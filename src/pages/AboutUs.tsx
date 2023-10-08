/* This file contains the code for the About Us page */

// Required imports
import { useEffect } from "react"; // Import React namespace and useEffect function to change the page's title
// Import style sheet

// Import components
import Head from "@components/Head";
import AboutUsInfo from "@components/AboutUs/AboutUsInfo";
import { navbarName } from "@constants/Constant";

/**
 * @name AboutUs
 * @summary Renders the About Us page when it is called
 * @param setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the About Us page
 */
export default function AboutUs() {
    
  return (
      <main>
          <Head />
          <AboutUsInfo />
      </main>
  )
}