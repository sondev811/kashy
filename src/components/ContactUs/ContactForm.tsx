/* This file contains the code for the contact form of the Contact Us page */

// Required imports
import { useState } from "react"; // For storing the inputed information

/**
 * @name ContactForm
 * @summary Renders the contact form on the right of the Contact Us page
 * @returns HTML elements of the contact form
 */
export default function ContactForm() {

    // Nên sài formik thay vì viết từng state cho input, có 100 input => tạo 100 state?

    // Set the default first name
    const [userFirstName, setDefaultFirstName] = useState("");
    // Set the default last name
    const [userLastName, setDefaultLastName] = useState("");
    // Set the default email
    const [userEmail, setDefaultEmail] = useState("");
    // Set the default phone number
    const [userPhoneNo, setDefaultPhoneNo] = useState("");
    // Set the default message
    const [message, setDefaultMessage] = useState("");
    // Set the submitted message
    const [submittedMessage, setSubmittedMessage] = useState("");

    // Function to clear the comment section of the form
    function clearSubmittedMessage() {
        setSubmittedMessage("");
    }

    return (
        <section className="contact-us-form">
          <h2>Contact Us</h2>
            <form id="contact-form" autoComplete="off">
              <div>
                {/* <!-- Form Group 1: Full Name --> */}
                <div className="form-group">
                    <input
                        id="form__firstName"
                        type="text"
                        placeholder="First Name"
                        className="clear-border-right"
                        value={userFirstName}
                        required
                        onChange={(event) => {
                            setDefaultFirstName(event.target.value);
                        }}
                    />
                </div>
                {/* <!-- Form Group 2: Last Name --> */}
                <div className="form-group">
                  <input
                      id="form__lastName"
                      type="text"
                      placeholder="Last Name"
                      value={userLastName}
                      required
                      onChange={(event) => {
                          setDefaultLastName(event.target.value);
                      }}
                  />
                </div>
              </div>
              <div>
                {/* <!-- Form Group 3: Email --> */}
                <div className="form-group">
                    <input
                        id="form__email"
                        type="email"
                        placeholder="Email"
                        className="clear-border-right"
                        value={userEmail}
                        required
                        onChange={(event) => {
                            setDefaultEmail(event.target.value);
                        }}
                    />
                </div>
                {/* <!-- Form Group 4: Phone Number --> */}
                <div className="form-group">
                    <input
                        id="form__phoneNo"
                        type="tel"
                        placeholder="Phone"
                        pattern="0[0-9]{3}[0-9]{3}[0-9]{3}"
                        value={userPhoneNo}
                        onChange={(event) => {
                            setDefaultPhoneNo(event.target.value);
                        }}
                    />
                </div>
              </div>
              {/* <!-- Form Group 5: Comments --> */}
              <div className="form-group">
                  <input
                      id="form__message"
                      type="text"
                      placeholder="Type your message here..."
                      value={message}
                      style={{ height: '126px' }}
                      onChange={(event) => {
                          setDefaultMessage(event.target.value);
                      }}
                  />
              </div>
              {/* <!-- Submit button --> */}
              <div className="form-group submit-box">
                <button className="btn submit-box__btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
        </section>
    )
}