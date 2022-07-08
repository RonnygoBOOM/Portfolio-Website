import React from 'react';
import {Card, CardTitle, CardText, Container} from 'reactstrap';

function About() {
    return (
        <>
        <Container>
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