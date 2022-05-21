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
      <h1>Portfolio Items Here</h1>
      <container>
        <Cards project={PROJECT}/>
      </container>
    </>
  );
}

export default Home;
