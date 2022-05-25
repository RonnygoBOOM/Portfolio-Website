import React from "react";
import {PROJECT} from '../shared/project';
import Cards from '../components/CardsComponent';

function Home(props) {
  return (
    <>
      <container className="top-container">
        <div className="col">
          <img
            className="top-image"
            alt="front end dev desk with monitors"
            src="images/front-end-displays.jpg"
          ></img>
        </div>
        <h2 className="top-text">Ron Scheibel</h2>
        <h2 className="bottom-text">Web Developer</h2>
      </container>
      <h2>
        Experiments:
        </h2>
      <container>
      <div className="col">
        <Cards project={PROJECT}/>
      </div>
      </container>
    </>
  );
}

export default Home;
