import React, { useState } from "react";
import "./page5.css";

const Page5 = () => {
  const [state, setState] = useState({
    email: "Your email address",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    console.log("Email Address: " + state.email);
  };
  return (
    <div className="Page5">
      <div className="Page5TitleText">Join our newsletter to stay updated</div>
      <input
        type="text"
        className="Page5InputBox"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <div className="Page5NewsletterText" onClick={handleClick}>
        Join Newsletter
      </div>
    </div>
  );
};
export { Page5 };
export default Page5;
