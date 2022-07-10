import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Languages() {
  return (
    <>
      <div className="languages">
        <Parallax pages={3.7}>
          <ParallaxLayer factor={1} offset={1} speed={2}>
            <img
              className="python-logo"
              alt="python"
              src="images/python-logo.png"
            ></img>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={1} speed={2}>
            <img
              className="react-native-logo"
              alt="react-native"
              src="images/react-native-logo.png"
            ></img>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default Languages;
