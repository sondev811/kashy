/* This file contains the code for the navigation bar */
import React, { useState } from "react";

// Required imports
import { Link } from "react-router-dom"; // Import element to link to other pages

import "../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

/**
 * @name Navigation
 * @summary Renders the navigation bar when it is called
 * @param activePage string value to check which page is currently active
 * @returns HTML element of the navigation bar
 */
export default function Navigation({ activePage }: { activePage: any }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="navbar">
      <ul className={!showNav ? "navbar__list hide-item" : "navbar__list"}>
        <div className="navbar-group-item">
          <li className="navbar__item">
            <Link
              to="/"
              className="navbar__link"
              style={
                activePage === "Home"
                  ? { color: "#e89c89" }
                  : { color: "#000000" }
              }
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/about-us"
              className="navbar__link"
              style={
                activePage === "About Us"
                  ? { color: "#e89c89" }
                  : { color: "#000000" }
              }
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              About Us
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/blog"
              className="navbar__link"
              style={
                activePage === "Blog"
                  ? { color: "#e89c89" }
                  : { color: "#000000" }
              }
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Blog
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/contact-us"
              className="navbar__link"
              style={
                activePage === "ContactUs"
                  ? { color: "#e89c89" }
                  : { color: "#000000" }
              }
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Contact Us
            </Link>
          </li>
        </div>

        <div
          className="nav-close-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faX} />
        </div>
      </ul>

      <div className="nav-mobile-icon">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
        />
      </div>
    </nav>
  );
}
