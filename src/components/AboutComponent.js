import React from 'react';
import {Card, CardTitle, CardText, Container} from 'reactstrap';
import TypeWriter from './TypeWriterComponent';
function About() {
    const texts = ['Hiker', 'Dad', 'Programmer', 'Kayaker', 'Dungeon Master', 'Biologist', 'Woodworker', 'Cyclist']
    const speed = 50
    const endSpeed = 2000
    return (
        <>
        <Container className="about-container">
        <Card className="about-card">
        <CardTitle className="about-title">
About
</CardTitle>
        <div className="laptop-div">
        <img alt="laptop" src="images/laptop.png" className="laptop"></img>
        </div>
        <TypeWriter texts={texts} speed={speed} endSpeed={endSpeed} className="type-writer" />

<a name="about" className="a-invisible" href="/#about">
</a>
<CardText className="about-text">
          Thanks for taking the time to check out my portfolio! This is very
          much a work in progress, but I will keep improving and adding
          content week by week as I continue on my growth journey as a web
          developer.
</CardText>
</Card>
</Container>
</>
    );
}

export default About;