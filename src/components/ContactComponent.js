import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  Label,
  Card,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_255as5l",
        "template_gnaxgrc",
        form.current,
        "UP6M60oa6x6YcjGcY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const [sendModalOpen, setSendModalOpen] = React.useState(false);
  function toggleSendModal() {
    setSendModalOpen((prev) => !prev);
  }

  return (
    <>
      <div className="surround-div">
        <Container className="contact-container">
          <Card className="contact-card">
            <a name="contact" className="a-invisible" href="/#contact">
              <CardTitle className="contact-title">Contact Me</CardTitle>
            </a>
            <CardText className="contact-text">
              I live in Orlando, FL, and am looking for local or remote career
              opportunities. I am also willing to relocate to Huntsville, AL.
            </CardText>
            <CardText className="contact-text">
              I look forward to hearing from you!
            </CardText>
            <a href="mailto:scheibelr@gmail.com">
              <CardText className="contact-text">scheibelr@gmail.com</CardText>
            </a>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <FormGroup>
                <Label>Name or Company</Label>
                <Input
                  type="text"
                  name="name_company"
                  id="name_company"
                  placeholder="Name/Company"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  name="return_email"
                  placeholder="Email Address"
                  id="return_email"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Message</Label>
                <Input
                  type="textarea"
                  name="message_text"
                  id="message_text"
                ></Input>
                <div className="send-button-div">
                  <input
                    className="send-button"
                    onClick={toggleSendModal}
                    type="submit"
                    value="Send"
                  />
                </div>
              </FormGroup>
            </form>
          </Card>
        </Container>
      </div>
      <Modal
        isOpen={sendModalOpen}
        size="md"
        centered="true"
        className="message-modal"
        modalClassName="modal-size"
        contentClassName="custom-modal"
      >
        <ModalHeader
          toggle={toggleSendModal}
          className="close-modal"
          style={{ textAlign: "center" }}
        >
          Message Sent
        </ModalHeader>
        <ModalBody className="modal-text">
          Thank you for your message! I will get back to you as soon as I can.
        </ModalBody>
      </Modal>
    </>
  );
}

export default Contact;

/*import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
*/
