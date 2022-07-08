import React from 'react';
import {Card, CardTitle, CardText, Container} from 'reactstrap';
import TypeWriter from './TypeWriterComponent';
function About() {
    const texts = ['Hiker', 'Dad', 'Programmer', 'Kayaker', 'Dungeon Master', 'Biologist', 'Woodworker']
    const speed = 50
    const endSpeed = 2000
    //add iskak's code-typing script
    return (
        <>
        <Container>
        <TypeWriter texts={texts} speed={speed} endSpeed={endSpeed} className="type-writer" />
<Card className="about-card">
<a name="about" className="a-invisible" href="/#about">
<CardTitle>
About
</CardTitle>
</a>
<CardText>
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