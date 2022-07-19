import React from "react";
import { Card, CardTitle, CardText, Container } from "reactstrap";

function Contact() {
  return (
    <>
      <div className="surround-div">
        <Container className="contact-container">
          <Card className="contact-card">
            <a name="contact" className="a-invisible" href="/#contact">
              <CardTitle className="contact-title">Contact Me</CardTitle>
            </a>
            <CardText className="contact-text">
              I live in Orlando, FL, and am looking for local or remote
              career opportunities. I am also willing to relocate to Huntsville, AL.
            </CardText>
            <CardText className="contact-text">
              I look forward to hearing from you!
            </CardText>
            <a href="mailto:scheibelr@gmail.com">
              <CardText className="contact-text">
              scheibelr@gmail.com
              </CardText>
            </a>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Contact;
