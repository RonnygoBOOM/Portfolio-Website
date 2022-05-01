import React from "react";
import { Row, Col } from "reactstrap";
import { Stack } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div>
        <Stack>
          <div>
            <Row>
              <Col>
                <ul>
                  Socials
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  Links
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </Col>
            </Row>
          </div>
          <div>
            <p>
              Portfolio Description
            </p>
            <p>Copyright 2022</p>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default Footer;
