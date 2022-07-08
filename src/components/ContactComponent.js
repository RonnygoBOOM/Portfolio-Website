import React from "react";

function Contact() {
  return (
    <>
      <div className="contact">
        <a href="/#contact" className="a-invisible" name="contact">
          <h1>Contact Me</h1>
        </a>
        <p>
          I live in Orlando, Florida, and am looking for local or remote career
          opportunities.
        </p>
        <br />
        <p>I look forward to hearing from you!</p>
        <br />
        <p>Email: scheibelr@gmail.com</p>
        <a href="mailto:scheibelr@gmail.com">Copy Email Address<i className="fa fa-copy" /></a>
        <br />
      </div>
    </>
  );
}

export default Contact;
