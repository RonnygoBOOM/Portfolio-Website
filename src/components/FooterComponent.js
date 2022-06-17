import React from "react";

function Footer(props) {
  return (
    <>
    <div className={props.page}>
      <div className="container">
        <div className="row footer">
          <div className="col col-8 site-footer">
            <a
              className="btn btn-social-icon btn-linkedin"
              href="http://linkedin.com/in/ron-scheibel-21003822a"
            >
              <i className="fa fa-linkedin" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/ronscheibel_"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="https://www.youtube.com/channel/UCDpvI_BpoMILcRxXUXlbwvg"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Ron Scheibel<br></br>Full-Stack Web Developer Portfolio</p>
          <p>&copy; 2022</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
