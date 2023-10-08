/* This file contains the code for the Blog page of the application */

// Required imports
import React, { useEffect, useState } from "react"; // Import React namespace and useEffect function to change the page's title

// Import components
import Head from "@components/Head";
import { navbarName } from "@constants/Constant";
import Modal from "@components/Modal";
import UpdatingGif from "@assets/img/updating.gif";

/**
 * @name Blog
 * @summary Renders the Blog page when it is called
 * @param setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the Blog page
 */
export default function Blog() {
    const [isActiveModal, setIsActiveModal] = useState(true);
    
    return (
      <main>
        <Head />
        <Modal isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal}> 
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <img src={UpdatingGif} alt='updating' style={{width: '100%'}} />
          </div>
          <p style={{ fontSize: '30px', fontWeight: 'bold', paddingBottom: '1rem', color: '#333'}}>Content Updating...</p>
        </Modal>
      </main>
    )
}