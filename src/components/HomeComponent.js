import React from "react";


function Home() {

  return (
    <>
      <div className="top-container">
        <div className="col">
          <img
            className="top-image"
            alt="front end dev desk with monitors"
            src="images/front-end-displays.jpg"
          ></img>
        </div>
        <h2 className="top-text">Ron Scheibel</h2>
        
        <h2 className="bottom-text"><a className="a-invisible" href="#about" alt="navigate to experiments">Developer</a></h2>
      </div>
    </>
  );
}

export default Home;
