import React from "react";
import emailjs from "emailjs-com";

import "../../styles/Components.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_818x1x1",
        "template_3vq1l5a",
        e.target,
        "user_iwbCAENbu4RyZEHcbrk1W"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
          document.querySelector("form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      {/* <h1>Contact</h1> */}
      <label>Name</label>
      <input type="text" name="from_name" />

      <label>Email</label>
      <input type="email" name="user_email" />

      <label>Message</label>
      <input type="text" name="message" />

      <button>
        <input type="submit" value="Send" />
      </button>
    </form>
  );
}
