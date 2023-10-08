/* This file contains the code for the Contact Us page of the application */

// Required imports
import React, { useEffect } from "react"; // Import React namespace and useEffect function to change the page's title
import "@styles/ContactUs.css"; // Import style sheet

// Import components
import Head from "@components/Head";
import ContactInfo from "@components/ContactUs/ContactInfo";
import ContactForm from "@components/ContactUs/ContactForm";
import { navbarName } from "@constants/Constant";

/**
 * @name ContactUs
 * @summary Renders the Contact Us page when it is called
 * @param setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the ContactUs page
 */
export default function ContactUs() {
  return (
      <main>
          <Head />
          <div className="contact-us-container">
              <ContactInfo />
              <ContactForm />
          </div>
      </main>
  )
}