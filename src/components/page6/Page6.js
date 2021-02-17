import React, { useState } from "react";
import "./page6.css";

const Page6 = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmptyFields = () => {
    setState({
      ...state,
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
    });
  };
  const handleClick = () => {
    console.log(
      "First Name: " + state.firstName,
      "Last Name: " + state.lastName,
      "Subject: " + state.subject,
      "Message: " + state.message
    );
  };
  return (
    <div className="Page6">
      <div className="sectionText sectionText4">Testimonials</div>
      <div className="sectionDivider sectionDivider4"></div>
      <div className="Page6WhiteBox">
        <div className="Page6QuoteBox">
          <div className="Page6Quote">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </div>
          <div className="Page6QuoteAuthorBlue">- Lorem ipsum dolor</div>
          <div className="Page6QuoteAuthorGrey">Labore et dolore</div>
          <div className="Page6QuoteSymbolUp" />
          <div className="Page6QuoteSymbolDown" />
        </div>
      </div>
      <div className="Page6ContactBoxBlank"></div>
      <div className="Page6ContactBox">
        <div className="Page6SectionText2">Contact Us</div>
        <div className="Page6SectionDivider2"></div>
        <div className="Page6FirstRow">
          <div className="Page6FirstName">First Name</div>
          <div className="Page6LastName">Last Name</div>
        </div>
        <div className="Page6SecondRow">
          <input
            type="text"
            className="Page6FirstNameInputBox"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="Page6LastNameInputBox"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="Blank"></div>
        <div className="Page6Subject">Subject</div>

        <input
          type="text"
          className="Page6SubjectInputBox"
          name="subject"
          value={state.subject}
          onChange={handleChange}
        />
        <div className="Blank"></div>
        <div className="Page6Message">Message</div>
        <textarea
          type="text"
          className="Page6MessageInputBox"
          name="message"
          value={state.message}
          onChange={handleChange}
        />
        <div className="Blank"></div>
        <div className="Blank"></div>
        <div className="Page6SendMessageButtonBox" />

        <div className="Page6EmptyFillsButton" onClick={handleEmptyFields}>
          Empty Fills
        </div>
        <div className="Page6SendMessageButton" onClick={handleClick}>
          <div className="Page6SendMessageButtonText">Send Message</div>
          <div className="Page6SendMessageButtonArrow" />
        </div>
      </div>
    </div>
  );
};

export { Page6 };
export default Page6;
