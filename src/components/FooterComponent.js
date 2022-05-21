import React from "react";
import { Row, Col } from "reactstrap";
import { Stack } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="container">
          <div className="row footer">
              <div className="col col-4">
                <ul className="list-unstyled">
                  Socials
                  <li>
                    <a href="https://www.youtube.com/channel/UCDpvI_BpoMILcRxXUXlbwvg">Youtube</a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/RonScheibel_">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ron-scheibel-21003822a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BkP7c2PDfTh2%2BLicNzoE%2B3g%3D%3D">LinkedIn</a>
                  </li>
                </ul>
              </div>
              <div className="col col-4">
                <ul className="list-unstyled">
                  Links
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Me</a>
                  </li>
                </ul>
              </div>
          </div>
          <div className="footer-bottom">
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
