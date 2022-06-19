import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function About() {
  return (
    <>
      <div className="about">
        <Parallax pages={2}>
          <div className="col col-sm-8 offset-sm-2">
          <ParallaxLayer
            enabled={false}
            sticky={{ start: 0, end: 1 }}
            style={{ zIndex: "-1" }}
          >
            <h1>About</h1>
          </ParallaxLayer>
          <p>
            Thanks for taking the time to check out my portfolio! This is very
            much a work in progress, but I will keep improving and adding
            content week by week as I continue on my growth journey as a web
            developer.
          </p>
          <br />
          <p>
            As a teacher and a scientist, I have a growth mindset, and a strong
            passion for learning. I am hyped to have found a career that allows
            me to challenge myself with difficult problems, collaborate with
            others, and continuously learn, grow, and adapt to a
            constantly-evolving environment. I would love to hear from you!
            Check out my{" "}
            <a className="text-link" href="/Contact">
              Contact
            </a>{" "}
            page to send me a message.
          </p>
          <br />
          <h2>My Journey as a Developer</h2>
          <p>
            I started dabbling into code a few years ago when I wanted to create
            some custom plugins for my Minecraft server. I loved learning the
            tools to be creative with a new medium, as well as the challenges of
            creative problem solving. After 8 wonderful years as a teacher, I
            recognized that my growth potential plateaued and I found myself
            unfulfilled academically, so I decided to make a career change. I
            found some free courses online and had some great mentors and
            encouragers in my life, especially my wife, Candice, and my good
            friends in tech, Steve L. and Eli G., who helped me develop the
            perspective and direction I needed to set some goals and accomplish
            them.
          </p>
          <br />
          <p>
            Since spring of 2021, I have completed CS50 through Harvard
            University's online platform, taught myself the basics of CSS,
            Javascript, and HTML, and then earned a certification in front end
            libraries through NuCamp coding Bootcamp for the MERN stack. Since
            then, I have been following tutorials, coming up with my own
            creative ideas, and building projects every day. I often live-stream
            my progress to help hold myself accountable for my own growth and
            learning.
          </p>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default About;
