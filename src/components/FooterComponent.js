import React from "react";
import { Row, Col } from "reactstrap";
import { Stack } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="container">
          <div className="row">
              <div className="col col-4 offset-2">
                <ul className="list-unstyled">
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
              </div>
              <div className="col col-4 offset-2">
                <ul className="list-unstyled">
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
              </div>
          </div>
          <div>
            <p>
              Portfolio Description
            </p>
            <p>Copyright 2022</p>
          </div>
      </div>
    </>
  );
}

export default Footer;
