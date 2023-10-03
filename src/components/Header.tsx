/* This file contains the code for the web app's header */
// Import components
import Navigation from "./Nav";
import KashyLogo from "../assets/img/logo-icon.svg";
import "../styles/Header.css"; // Import style sheet

import KashyPartner from "../assets/img/MTAQ-Transparent-Logo.webp";

/**
 * @name Header
 * @summary Renders the Header of the application when it is called
 * @param activePage string value to check which page is currently active
 * @returns HTML element of the Header
 */
// The activePage variable are passed down from App.tsx, then it is continued to be passed down to Navigation.
export default function Header({ activePage }: { activePage: any }) {
  return (
    <header className="header header--fixed">
      <div className="container">
        <div className="header___inner">
          {/* <!-- Logo --> */}
          <img src={KashyLogo} alt="Kashy" className="logo" />
          {/* <!-- Nav bar --> */}
          <Navigation activePage={activePage} />
          <div className="kashy-partner">
            <a
              href="https://www.mtaq.com.au/"
              className="kashy-partner__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={KashyPartner}
                alt="MTA Queensland Website"
                className="kashy-partner__img"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
